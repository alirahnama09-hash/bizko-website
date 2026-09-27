import { NextRequest, NextResponse } from "next/server";
import { join } from "node:path";
import { readFile } from "node:fs/promises";
import { DEMOS } from "@/lib/demos";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const DOWNLOAD_PATHS: Record<string, string> = {
  "bizko-market": "/downloads/bizko-market/Bizko-Market-Demo.exe",
  bizcofood: "/downloads/bizcofood/BizcoFoodDemo_0.1.1_x64-setup.exe",
};

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ product: string }> }
) {
  const { product } = await params;
  const relativePath = DOWNLOAD_PATHS[product];
  if (!DEMOS[product] || !relativePath) {
    return new NextResponse("demo not found", { status: 404 });
  }

  const filePath = join(process.cwd(), "public", relativePath);
  const buffer = await readFile(filePath).catch(() => null);
  if (!buffer) {
    return new NextResponse("demo file is not available", { status: 404 });
  }

  const filename = relativePath.split("/").pop() ?? `demo-${product}.exe`;

  return new NextResponse(new Uint8Array(buffer), {
    headers: {
      "Content-Type": "application/octet-stream",
      "Content-Disposition": `attachment; filename="${filename}"`,
      "Cache-Control": "public, max-age=3600",
    },
  });
}