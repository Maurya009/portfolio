import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

const COOKIE_NAME = "portfolio_admin_session";
const SESSION_SECONDS = 8 * 60 * 60;

function secret() {
  return process.env.ADMIN_SESSION_SECRET || process.env.ADMIN_PASSWORD || "";
}

function sign(value: string) {
  return createHmac("sha256", secret()).update(value).digest("hex");
}

export function createAdminSession() {
  if (!process.env.ADMIN_PASSWORD || !secret()) {
    throw new Error("Admin authentication environment variables are not configured.");
  }
  const issuedAt = Math.floor(Date.now() / 1000).toString();
  return `${issuedAt}.${sign(issuedAt)}`;
}

export function isValidAdminSession(token: string | undefined) {
  if (!token || !secret()) return false;
  const [issuedAt, signature, extra] = token.split(".");
  if (!issuedAt || !signature || extra) return false;
  const timestamp = Number(issuedAt);
  const now = Math.floor(Date.now() / 1000);
  if (!Number.isSafeInteger(timestamp) || timestamp > now + 60 || now - timestamp > SESSION_SECONDS) return false;
  const expected = sign(issuedAt);
  const actualBuffer = Buffer.from(signature, "hex");
  const expectedBuffer = Buffer.from(expected, "hex");
  return actualBuffer.length === expectedBuffer.length && timingSafeEqual(actualBuffer, expectedBuffer);
}

export async function isAdminAuthenticated() {
  const cookieStore = await cookies();
  return isValidAdminSession(cookieStore.get(COOKIE_NAME)?.value);
}

export const adminCookieName = COOKIE_NAME;
export const adminSessionSeconds = SESSION_SECONDS;
