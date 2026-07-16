import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    console.log("Data received from booking form:", data);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_ACCESS_KEY,
        ...data,
      }),
    });

    const result = await response.json();

    console.log("Web3Forms booking response:", result);

    return NextResponse.json(result, {
      status: response.status,
    });
  } catch (error) {
    console.error("Web3Forms booking error:", error);

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
