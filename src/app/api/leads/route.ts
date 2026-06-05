import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function POST(request: Request) {

    try {
    const body = await request.json();

    const { nombre, telefono, servicio } = body;

    console.log("=== DIAGNOSTICO PRIVATE KEY ===");
console.log("LONGITUD:", process.env.GOOGLE_PRIVATE_KEY?.length);
console.log(
  "TIENE BEGIN:",
  process.env.GOOGLE_PRIVATE_KEY?.includes("BEGIN PRIVATE KEY")
);
console.log(
  "TIENE \\n:",
  process.env.GOOGLE_PRIVATE_KEY?.includes("\\n")
);
console.log(
  "TIENE SALTO REAL:",
  process.env.GOOGLE_PRIVATE_KEY?.includes("\n")
);

    const auth = new google.auth.GoogleAuth({
      credentials: {
        project_id: process.env.GOOGLE_PROJECT_ID,
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY,
      },
      scopes: [
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({
      version: "v4",
      auth,
    });

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "A:E",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            new Date().toLocaleString("es-MX"),
            nombre,
            telefono,
            servicio,
            "Mudanzas Express MX",
          ],
        ],
      },
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}
