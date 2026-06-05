import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    sheetId: process.env.GOOGLE_SHEET_ID,
    projectId: process.env.GOOGLE_PROJECT_ID,
    email: process.env.GOOGLE_CLIENT_EMAIL,
    privateKeyLength: process.env.GOOGLE_PRIVATE_KEY?.length,
    hasBegin: process.env.GOOGLE_PRIVATE_KEY?.includes("BEGIN PRIVATE KEY"),
    hasSlashN: process.env.GOOGLE_PRIVATE_KEY?.includes("\\n"),
    hasRealLineBreak: process.env.GOOGLE_PRIVATE_KEY?.includes("\n"),
  });
}
