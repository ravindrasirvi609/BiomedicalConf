// src/app/api/registrationSubmission/route.ts
import { NextResponse } from "next/server";
import { google } from "googleapis";

// Interface for form data
interface FormData {
  name: string;
  mobile: string;
  email: string;
}

// Function to validate input
function validateInput(data: FormData): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const mobileRegex = /^[6-9]\d{9}$/;

  return !!(
    data.name.trim().length >= 2 &&
    mobileRegex.test(data.mobile) &&
    emailRegex.test(data.email)
  );
}

export async function POST(req: Request) {
  try {
    const formData: FormData = await req.json(); // Parse incoming data

    // Validate input
    if (!validateInput(formData)) {
      return NextResponse.json(
        { message: "Invalid input data" },
        { status: 400 }
      );
    }

    // Configure Google Sheets authentication
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(
          /\\n/g,
          "\n"
        ),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    // Create Google Sheets client
    const sheets = google.sheets({ version: "v4", auth });

    // Specify your Google Sheet ID and the specific sheet/tab name
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;
    const range = "Registration!A:D"; // Assumes first sheet named 'Registration'

    // Prepare data to write
    const values = [
      [
        new Date().toISOString(), // Timestamp
        formData.name,
        formData.mobile,
        formData.email,
      ],
    ];

    // Write to Google Sheet
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: "RAW",
      insertDataOption: "INSERT_ROWS",
      requestBody: { values },
    });

    // Successful response
    return NextResponse.json({
      message: "Registration successful",
      rows: response.data.updates?.updatedRows,
    });
  } catch (error) {
    console.error("Sheet write error:", error);
    return NextResponse.json(
      {
        message: "Error processing registration",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
