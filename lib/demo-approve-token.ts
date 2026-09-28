import { createHmac, randomBytes, timingSafeEqual } from "node:crypto";

export const DEMO_APPROVE_TTL_MS = 72 * 60 * 60 * 1000;
const SECRET_NAME = "DEMO_APPROVE_SECRET";

export interface DemoApprovePayload {
  id: string;
  product: string;
  name: string;
  email: string;
  exp: number;
}

function getSecret(): string {
  const secret = process.env[SECRET_NAME];
  if (!secret) {
    throw new Error(
      `${SECRET_NAME} is not set. Set it to create or verify demo approval tokens.`
    );
  }
  return secret;
}

function hmacSha256(data: string, secret: string): Buffer {
  return createHmac("sha256", secret).update(data).digest();
}

function toBase64Url(value: string): string {
  return Buffer.from(value, "utf8").toString("base64url");
}

function fromBase64Url(value: string): string {
  return Buffer.from(value, "base64url").toString("utf8");
}

export function createDemoApproveToken(input: {
  product: string;
  name: string;
  email: string;
}): string {
  const secret = getSecret();
  const payload: DemoApprovePayload = {
    id: randomBytes(16).toString("hex"),
    product: input.product,
    name: input.name,
    email: input.email,
    exp: Date.now() + DEMO_APPROVE_TTL_MS,
  };
  const payloadString = JSON.stringify(payload);
  const mac = hmacSha256(payloadString, secret);
  return `${toBase64Url(payloadString)}.${mac.toString("base64url")}`;
}

export type VerifyDemoApproveTokenResult =
  | { ok: true; data: DemoApprovePayload }
  | { ok: false; reason: "invalid" | "expired" };

export function verifyDemoApproveToken(token: string): VerifyDemoApproveTokenResult {
  const secret = getSecret();

  const dot = token.indexOf(".");
  if (dot === -1) {
    return { ok: false, reason: "invalid" };
  }
  const encodedPayload = token.slice(0, dot);
  const encodedMac = token.slice(dot + 1);
  if (!encodedPayload || !encodedMac) {
    return { ok: false, reason: "invalid" };
  }

  let payloadString: string;
  try {
    payloadString = fromBase64Url(encodedPayload);
  } catch {
    return { ok: false, reason: "invalid" };
  }

  const expected = hmacSha256(payloadString, secret);
  let supplied: Buffer;
  try {
    supplied = Buffer.from(encodedMac, "base64url");
  } catch {
    return { ok: false, reason: "invalid" };
  }
  if (
    supplied.length !== expected.length ||
    !timingSafeEqual(supplied, expected)
  ) {
    return { ok: false, reason: "invalid" };
  }

  let parsed: unknown;
  try {
    parsed = JSON.parse(payloadString);
  } catch {
    return { ok: false, reason: "invalid" };
  }
  const data = parsed as Partial<DemoApprovePayload>;
  if (
    typeof data.id !== "string" ||
    typeof data.product !== "string" ||
    typeof data.name !== "string" ||
    typeof data.email !== "string" ||
    typeof data.exp !== "number"
  ) {
    return { ok: false, reason: "invalid" };
  }

  if (data.exp <= Date.now()) {
    return { ok: false, reason: "expired" };
  }
  return { ok: true, data: data as DemoApprovePayload };
}

const usedTokens = new Map<string, number>();

function pruneUsedTokens(): void {
  const now = Date.now();
  for (const [token, exp] of usedTokens) {
    if (exp <= now) {
      usedTokens.delete(token);
    }
  }
}

export function isDemoApproveTokenUsed(token: string): boolean {
  pruneUsedTokens();
  return usedTokens.has(token);
}

export function markDemoApproveTokenUsed(token: string, exp: number): void {
  pruneUsedTokens();
  usedTokens.set(token, exp);
}