import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";
import { Resend } from "resend";

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json();

    // Destructure form data
    const { title, author, email, abstract, fileUrl } = body;

    // Google Sheets integration
    const sheets = google.sheets("v4");
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

    const googleSheetInstance = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      auth,
      range: "Sheet1!A:F",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [title, author, email, abstract, fileUrl, new Date().toISOString()],
        ],
      },
    });

    // Send email confirmation
    const emailResponse = await resend.emails.send({
      from: "Call for Papers",
      to: [email],
      subject: "Paper Submission Received",
      html: `
        <h1>Paper Submission Confirmation</h1>
        
        <p>Dear ${author},</p>
        
        <p>We have received your paper submission with the following details:</p>
        
        <ul>
          <li><strong>Title:</strong> ${title}</li>
          <li><strong>Authors:</strong> ${author}</li>
          <li><strong>Abstract:</strong> ${abstract}</li>
        </ul>
        
        <p>Your submission will be reviewed by our committee. We will contact you with further information.</p>
        
        <p>Best regards,<br>Conference Organizing Committee</p>
      `,
    });

    return NextResponse.json(
      {
        message: "Submission successful",
        sheetResponse: googleSheetInstance.data,
        emailResponse,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Submission error:", error);
    return NextResponse.json(
      {
        message: "Submission failed",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

// Note: In App Router, file upload handling is different
// You might want to use libraries like formidable or use server-side file handling
export const config = {
  api: {
    bodyParser: true, // Enable JSON body parsing
  },
};
