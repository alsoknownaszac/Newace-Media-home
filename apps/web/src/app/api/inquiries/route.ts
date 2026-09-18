import { NextResponse } from "next/server";

import { deliverInquiry, inquirySchema } from "@/lib/inquiries";

/**
 * POST /api/inquiries
 *
 * Replaces the `setTimeout` that used to stand in for a submission. Runs on the
 * server, re-validates with the same Zod schema the browser uses, and delivers
 * through src/lib/inquiries.ts (Resend when RESEND_API_KEY is configured).
 */
export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const parsed = inquirySchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", issues: parsed.error.flatten().fieldErrors },
      { status: 422 },
    );
  }

  // Honeypot hit: pretend everything is fine so the bot keeps quiet.
  if (parsed.data.company) {
    return NextResponse.json({ ok: true }, { status: 202 });
  }

  const result = await deliverInquiry(parsed.data);

  if (!result.delivered) {
    console.error("[api/inquiries] delivery failed:", result.reason);
    return NextResponse.json({ error: "Unable to deliver inquiry" }, { status: 502 });
  }

  return NextResponse.json({ ok: true, delivery: result.provider }, { status: 202 });
}
