import { NextRequest, NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/admin-auth";

export const runtime = "nodejs";
export const maxDuration = 60;
const MAX_FILE_SIZE = 5 * 1024 * 1024;

function githubHeaders() {
  return {
    Accept: "application/vnd.github+json",
    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    "X-GitHub-Api-Version": "2022-11-28",
    "Content-Type": "application/json",
  };
}

function repoFileUrl() {
  const owner = process.env.GITHUB_OWNER;
  const repo = process.env.GITHUB_REPO;
  const branch = process.env.GITHUB_BRANCH || "main";
  return `https://api.github.com/repos/${encodeURIComponent(owner || "")}/${encodeURIComponent(repo || "")}/contents/public/resume.pdf?ref=${encodeURIComponent(branch)}`;
}

export async function GET() {
  if (!(await isAdminAuthenticated())) return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  const configured = Boolean(process.env.GITHUB_TOKEN && process.env.GITHUB_OWNER && process.env.GITHUB_REPO);
  if (!configured) return NextResponse.json({ error: "GitHub storage is not configured." }, { status: 503 });

  try {
    const result = await fetch(repoFileUrl(), { headers: githubHeaders(), cache: "no-store" });
    if (result.status === 404) return NextResponse.json({ exists: false });
    if (!result.ok) return NextResponse.json({ error: "Could not check the resume in GitHub." }, { status: 502 });
    const file = await result.json();
    return NextResponse.json({ exists: true, updatedAt: file.commit?.committer?.date || file.commit?.author?.date || null });
  } catch {
    return NextResponse.json({ error: "GitHub could not be reached." }, { status: 502 });
  }
}

export async function PUT(request: NextRequest) {
  if (!(await isAdminAuthenticated())) return NextResponse.json({ error: "Unauthorized. Please sign in again." }, { status: 401 });
  if (!process.env.GITHUB_TOKEN || !process.env.GITHUB_OWNER || !process.env.GITHUB_REPO) {
    return NextResponse.json({ error: "GitHub storage is not configured." }, { status: 503 });
  }

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json({ error: "Please choose a PDF file." }, { status: 400 });
  }
  const file = formData.get("resume");
  if (!(file instanceof File)) return NextResponse.json({ error: "Please choose a PDF file." }, { status: 400 });
  if (file.size === 0 || file.size > MAX_FILE_SIZE) {
    return NextResponse.json({ error: "Resume must be a non-empty PDF smaller than 5 MB." }, { status: 400 });
  }
  if (file.type !== "application/pdf" || !file.name.toLowerCase().endsWith(".pdf")) {
    return NextResponse.json({ error: "Only PDF files are allowed." }, { status: 400 });
  }

  const bytes = Buffer.from(await file.arrayBuffer());
  if (bytes.subarray(0, 5).toString("ascii") !== "%PDF-") {
    return NextResponse.json({ error: "The selected file does not appear to be a valid PDF." }, { status: 400 });
  }

  const branch = process.env.GITHUB_BRANCH || "main";
  let sha: string | undefined;
  try {
    const existingResponse = await fetch(repoFileUrl(), { headers: githubHeaders(), cache: "no-store" });
    if (existingResponse.ok) {
      const existing = await existingResponse.json();
      sha = existing.sha;
    } else if (existingResponse.status !== 404) {
      return NextResponse.json({ error: "Could not access the repository. Check the GitHub token and repository settings." }, { status: 502 });
    }

    const owner = process.env.GITHUB_OWNER!;
    const repo = process.env.GITHUB_REPO!;
    const apiUrl = `https://api.github.com/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}/contents/public/resume.pdf`;
    const updateResponse = await fetch(apiUrl, {
      method: "PUT",
      headers: githubHeaders(),
      body: JSON.stringify({
        message: "Update portfolio resume",
        content: bytes.toString("base64"),
        branch,
        ...(sha ? { sha } : {}),
      }),
      cache: "no-store",
    });

    if (!updateResponse.ok) {
      const errorData = await updateResponse.json().catch(() => null);
      const detail = typeof errorData?.message === "string" ? errorData.message : "GitHub rejected the upload.";
      return NextResponse.json({ error: `Resume update failed: ${detail}` }, { status: 502 });
    }

    return NextResponse.json({ ok: true, message: "Resume uploaded. Your deployment will update automatically after GitHub/Vercel finishes building." });
  } catch {
    return NextResponse.json({ error: "Upload failed because GitHub could not be reached. Please try again." }, { status: 502 });
  }
}
