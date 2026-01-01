import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    message:
      "Chat endpoint stub. Plug in your RAG pipeline here for streaming replies."
  });
}
