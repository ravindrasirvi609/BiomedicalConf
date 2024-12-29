import { NextResponse } from "next/server";
import { Resend } from "resend";

// Interface for form data
interface FormData {
  name: string;
  mobile: string;
  email: string;
  description: string;
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const formData: FormData = await req.json();

    // Validate required fields
    if (
      !formData.name ||
      !formData.email ||
      !formData.mobile ||
      !formData.description
    ) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    // Send email
    const data = await resend.emails.send({
      from: "Name <admin@opf.org.in>", // Added proper from address format
      to: "admin@obrf.org.in",
      subject: "Conttact Form Submission",
      html: `
        <h1>New Contact Form Recived </h1>
        
        <p>Dear ${formData.name},</p>
        
        <p>We have received your Contact submission with the following details:</p>
        
        <ul>
          <li><strong>Mobile:</strong> ${formData.mobile}</li>
          <li><strong>Email:</strong> ${formData.email}</li>
          <li><strong>Description:</strong> ${formData.description}</li>
        </ul>
        
        <p>We will review your submission and get back to you shortly.</p>
        
        <p>Best regards,<br>Conference Organizing Committee</p>
      `,
    });

    // Return success response
    return NextResponse.json(
      { message: "Paper submission received successfully", id: data },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email sending error:", error); // Updated error message
    return NextResponse.json(
      {
        message: "Error processing submission",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
