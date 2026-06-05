import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const privateKey =
      process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");

    return NextResponse.json({
      length: privateKey?.length,
      first30: privateKey?.substring(0, 30),
      last30: privateKey?.substring(privateKey.length - 30),
    });
  } catch (error) {
    return NextResponse.json({
      error,
    });
  }
}
