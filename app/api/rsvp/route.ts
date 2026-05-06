import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formData = await req.formData();

  const id = formData.get("id");
  const attending = formData.get("attending");

  console.log("RSVP:", id, attending);

  return NextResponse.redirect(
    new URL("/thank-you", req.url)
  );
}
