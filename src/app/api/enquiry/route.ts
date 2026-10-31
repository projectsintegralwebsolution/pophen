import { NextResponse } from "next/server";

interface EnquiryPayload {
  fullName: string;
  companyName?: string;
  email: string;
  phone: string;
  productInterest: string;
  message: string;
  hp_website?: string; // Honeypot spam trap
}

export async function POST(request: Request) {
  try {
    const body: EnquiryPayload = await request.json();

    // 1. Spam honeypot check - bots fill hidden fields
    if (body.hp_website && body.hp_website.trim().length > 0) {
      // Silently return success to spam bots without processing
      return NextResponse.json(
        { success: true, message: "Enquiry received successfully." },
        { status: 200 }
      );
    }

    // 2. Field Validations
    const errors: Record<string, string> = {};

    if (!body.fullName || body.fullName.trim().length < 2) {
      errors.fullName = "Full name must be at least 2 characters long.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!body.email || !emailRegex.test(body.email.trim())) {
      errors.email = "Please provide a valid business email address.";
    }

    const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{7,15}$/;
    if (!body.phone || !phoneRegex.test(body.phone.replace(/\s+/g, ""))) {
      errors.phone = "Please provide a valid contact phone number.";
    }

    if (!body.productInterest || body.productInterest.trim().length === 0) {
      errors.productInterest = "Please select a product or solution of interest.";
    }

    if (!body.message || body.message.trim().length < 10) {
      errors.message = "Project requirements message must be at least 10 characters long.";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { success: false, errors, message: "Validation failed. Please correct the highlighted fields." },
        { status: 400 }
      );
    }

    // 3. Generate a clean tracking reference ID
    const referenceId = `POP-${Date.now().toString(36).toUpperCase()}-${Math.floor(100 + Math.random() * 900)}`;

    const submissionData = {
      referenceId,
      timestamp: new Date().toISOString(),
      fullName: body.fullName.trim(),
      companyName: body.companyName?.trim() || "Not specified",
      email: body.email.trim().toLowerCase(),
      phone: body.phone.trim(),
      productInterest: body.productInterest.trim(),
      message: body.message.trim(),
    };

    // Log the received enquiry cleanly on the server (never exposed to client)
    console.log("[POPHEN ENQUIRY RECEIVED]", JSON.stringify(submissionData, null, 2));

    // Optional environment-configured notification hook:
    // If SMTP credentials or a webhook are configured in server env, it can dispatch an email here.
    const forwardWebhook = process.env.ENQUIRY_WEBHOOK_URL;
    if (forwardWebhook) {
      try {
        await fetch(forwardWebhook, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(submissionData),
        });
      } catch (err) {
        console.error("[POPHEN ENQUIRY] Webhook dispatch warning:", err);
      }
    }

    return NextResponse.json(
      {
        success: true,
        referenceId,
        message: "Thank you for reaching out to Pophen. An engineering specialist will review your project requirements and contact you within 24 business hours.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[POPHEN ENQUIRY] Error processing request:", error);
    return NextResponse.json(
      { success: false, message: "A server error occurred while processing your enquiry. Please try again or contact us directly via email at info@pophen.in." },
      { status: 500 }
    );
  }
}
