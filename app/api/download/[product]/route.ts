import { NextRequest, NextResponse } from "next/server";
import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { Readable } from "node:stream";
import { join } from "node:path";
import { DEMOS, isDemoAvailable } from "@/lib/demos";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const DOWNLOAD_PATHS: Record<string, string> = {
  "bizko-market": "/bizko-market/Bizko-Market-Demo.exe",
  bizcofood: "/bizcofood/BizcoFoodDemo_0.1.1_x64-setup.exe",
};

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ product: string }> }
) {
  const { product } = await params;
  if (
    !Object.hasOwn(DEMOS, product) ||
    !Object.hasOwn(DOWNLOAD_PATHS, product)
  ) {
    return new NextResponse("demo not found", { status: 404 });
  }

  if (!isDemoAvailable(product)) {
    return new NextResponse("demo is not available", { status: 404 });
  }

  const relativePath = DOWNLOAD_PATHS[product];
  const filePath = join(process.cwd(), "private-downloads", relativePath);

  const fileStat = await stat(filePath).catch(() => null);
  if (!fileStat || !fileStat.isFile()) {
    return new NextResponse("demo file is not available", { status: 404 });
  }

  const filename = relativePath.split("/").pop() ?? `demo-${product}.exe`;
  const stream = Readable.toWeb(createReadStream(filePath)) as ReadableStream<Uint8Array>;

  return new NextResponse(stream, {
    headers: {
      "Content-Type": "application/octet-stream",
      "Content-Length": String(fileStat.size),
      "Content-Disposition": `attachment; filename="${filename}"`,
      "Cache-Control": "private, no-store",
    },
  });
}
