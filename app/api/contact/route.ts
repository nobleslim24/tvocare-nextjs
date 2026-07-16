import { NextResponse } from "next/server";
import { contactSchema } from "../../../lib/contactSchema";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const validation = contactSchema.safeParse(data);

    if (!validation.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Please check your form details.",
          errors: validation.error.flatten().fieldErrors,
        },
        {
          status: 400,
        }
      );
    }

    const response = await fetch("https://api.staticforms.dev/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        apiKey: process.env.STATICFORMS_API_KEY,
        ...validation.data,
      }),
    });

    const result = await response.json();

    return NextResponse.json(result, {
      status: response.status,
    });
  } catch (error) {
    console.error("StaticForms error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}