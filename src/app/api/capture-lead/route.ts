import { NextResponse } from "next/server";
import { createServerClient } from "@/lib/supabase/server";

export type CaptureLeadBody = {
  email: string;
  quiz_data?: Record<string, unknown>;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as CaptureLeadBody;
    const email = typeof body?.email === "string" ? body.email.trim() : "";
    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Valid email required" },
        { status: 400 },
      );
    }

    const supabase = createServerClient();
    const { error } = await supabase.from("leads").insert({
      email,
      quiz_data: body.quiz_data ?? null,
      created_at: new Date().toISOString(),
    });

    if (error) {
      console.error("[capture-lead]", error);
      return NextResponse.json(
        { error: "Failed to save lead" },
        { status: 500 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[capture-lead]", e);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
