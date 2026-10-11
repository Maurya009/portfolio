import { NextRequest, NextResponse } from "next/server";
import { adminCookieName, adminSessionSeconds, createAdminSession } from "@/lib/admin-auth";
import { timingSafeEqual } from "node:crypto";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  const configuredPassword = process.env.ADMIN_PASSWORD;
  if (!configuredPassword || !process.env.GITHUB_TOKEN || !process.env.GITHUB_OWNER || !process.env.GITHUB_REPO) {
    return NextResponse.json(
      { error: "Admin setup is incomplete. Configure ADMIN_PASSWORD and the GitHub environment variables." },
      { status: 503 },
    );
  }

  let body: { password?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const supplied = typeof body.password === "string" ? body.password : "";
  const suppliedBuffer = Buffer.from(supplied);
  const configuredBuffer = Buffer.from(configuredPassword);
  const valid = suppliedBuffer.length === configuredBuffer.length && timingSafeEqual(suppliedBuffer, configuredBuffer);
  if (!valid) return NextResponse.json({ error: "Incorrect password." }, { status: 401 });

  try {
    const response = NextResponse.json({ ok: true });
    response.cookies.set({
      name: adminCookieName,
      value: createAdminSession(),
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: adminSessionSeconds,
    });
    return response;
  } catch {
    return NextResponse.json({ error: "Admin session could not be created. Check ADMIN_SESSION_SECRET." }, { status: 503 });
  }
}
