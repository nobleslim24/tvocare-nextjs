
received from booking form:", data);

    const response = await fetch("https://api.staticforms.dev/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        apiKey: process.env.STATICFORMS_API_KEY,
        ...data,
      }),
    });

    const result = await response.json();

    console.log("StaticForms booking response:", result);

    return NextResponse.json(result, {
      status: response.status,
    });
  } catch (error) {
    console.error("StaticForms booking error:", error);

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
