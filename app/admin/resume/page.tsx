"use client";

import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, FileText, LockKeyhole, LogOut, ShieldCheck, UploadCloud } from "lucide-react";

type ResumeStatus = { exists?: boolean; updatedAt?: string | null; error?: string };

export default function ResumeAdminPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [checking, setChecking] = useState(true);
  const [password, setPassword] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<ResumeStatus>({});
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function refreshStatus() {
    try {
      const response = await fetch("/api/admin/resume", { cache: "no-store" });
      if (response.status === 401) {
        setAuthenticated(false);
        return;
      }
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Could not check resume status.");
      setStatus(data);
      setAuthenticated(true);
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Could not connect to the server.");
    } finally {
      setChecking(false);
    }
  }

  useEffect(() => { void refreshStatus(); }, []);

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true); setError(""); setMessage("");
    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Sign in failed.");
      setPassword("");
      setAuthenticated(true);
      await refreshStatus();
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Sign in failed.");
    } finally { setBusy(false); }
  }

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    setError(""); setMessage("");
    const selected = event.target.files?.[0] || null;
    if (selected && (selected.type !== "application/pdf" || !selected.name.toLowerCase().endsWith(".pdf"))) {
      setFile(null); setError("Please select a PDF file only."); event.target.value = ""; return;
    }
    if (selected && selected.size > 5 * 1024 * 1024) {
      setFile(null); setError("The PDF must be smaller than 5 MB."); event.target.value = ""; return;
    }
    setFile(selected);
  }

  async function handleUpload(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!file) { setError("Choose your latest resume PDF first."); return; }
    setBusy(true); setError(""); setMessage("");
    try {
      const formData = new FormData(); formData.append("resume", file);
      const response = await fetch("/api/admin/resume", { method: "PUT", body: formData });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Resume upload failed.");
      setMessage(data.message || "Resume uploaded successfully."); setFile(null);
      const input = document.getElementById("resume-file") as HTMLInputElement | null;
      if (input) input.value = "";
      await refreshStatus();
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Resume upload failed.");
    } finally { setBusy(false); }
  }

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    setAuthenticated(false); setStatus({}); setMessage(""); setError("");
  }

  return (
    <main className="min-h-screen bg-[#12141A] px-4 py-10 text-[#EDEEE9] sm:px-6">
      <div className="mx-auto w-full max-w-2xl">
        <Link href="/" className="mb-8 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-emerald-300">
          <ArrowLeft size={16} /> Back to portfolio
        </Link>

        <section className="overflow-hidden rounded-3xl border border-emerald-400/20 bg-slate-900/70 shadow-[0_25px_100px_rgba(0,0,0,0.3)] backdrop-blur-xl">
          <div className="border-b border-white/10 bg-gradient-to-r from-emerald-950/70 to-slate-900/40 px-6 py-7 sm:px-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-300/20 bg-emerald-400/10 text-emerald-300">
              <FileText size={24} />
            </div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-emerald-300">Portfolio settings</p>
            <h1 className="mt-2 text-2xl font-bold sm:text-3xl">Resume manager</h1>
            <p className="mt-2 max-w-lg text-sm leading-6 text-slate-400">Sign in to replace the resume PDF shown on your portfolio. Changes are saved to your GitHub repository.</p>
          </div>

          <div className="px-6 py-7 sm:px-8 sm:py-8">
            {checking ? (
              <p className="text-sm text-slate-400">Checking secure session…</p>
            ) : !authenticated ? (
              <form onSubmit={handleLogin} className="space-y-5">
                <div className="flex items-center gap-2 text-sm font-medium text-slate-200"><LockKeyhole size={17} className="text-emerald-300" /> Admin sign in</div>
                <label className="block text-sm text-slate-300" htmlFor="admin-password">Admin password</label>
                <input id="admin-password" type="password" autoComplete="current-password" required value={password} onChange={(event) => setPassword(event.target.value)} className="w-full rounded-xl border border-white/10 bg-[#12141A] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-emerald-400/60 focus:ring-2 focus:ring-emerald-400/10" placeholder="Enter admin password" />
                <button disabled={busy} className="w-full rounded-xl bg-emerald-400 px-4 py-3 font-semibold text-slate-950 transition hover:bg-emerald-300 disabled:cursor-wait disabled:opacity-60">{busy ? "Signing in…" : "Sign in securely"}</button>
              </form>
            ) : (
              <div className="space-y-6">
                <div className="flex flex-col justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:flex-row sm:items-center">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300"><ShieldCheck size={20} /></div>
                    <div>
                      <p className="font-medium text-white">Current resume</p>
                      <p className="mt-1 text-xs text-slate-400">{status.exists ? "A resume PDF exists in your repository." : "No resume uploaded yet. Upload a PDF to activate the buttons."}</p>
                    </div>
                  </div>
                  <span className={`w-fit rounded-full px-3 py-1 text-xs font-medium ${status.exists ? "bg-emerald-400/10 text-emerald-300" : "bg-amber-400/10 text-amber-300"}`}>{status.exists ? "Uploaded" : "Not uploaded"}</span>
                </div>

                <form onSubmit={handleUpload} className="space-y-4">
                  <div>
                    <label htmlFor="resume-file" className="mb-2 block text-sm font-medium text-slate-200">Upload latest resume (PDF, max 5 MB)</label>
                    <label htmlFor="resume-file" className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-emerald-300/30 bg-emerald-400/[0.035] px-5 py-8 text-center transition hover:border-emerald-300/60 hover:bg-emerald-400/[0.07]">
                      <UploadCloud size={27} className="mb-3 text-emerald-300" />
                      <span className="text-sm font-semibold text-slate-100">{file ? file.name : "Choose a PDF from your computer"}</span>
                      <span className="mt-1 text-xs text-slate-500">This replaces public/resume.pdf in your GitHub repository</span>
                    </label>
                    <input id="resume-file" type="file" accept="application/pdf,.pdf" onChange={handleFileChange} className="sr-only" />
                    {file && <p className="mt-2 text-xs text-slate-400">File size: {(file.size / 1024 / 1024).toFixed(2)} MB</p>}
                  </div>
                  <button disabled={busy || !file} className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-400 px-4 py-3 font-semibold text-slate-950 transition hover:bg-emerald-300 disabled:cursor-not-allowed disabled:opacity-50">
                    <UploadCloud size={18} /> {busy ? "Uploading resume…" : "Upload and replace resume"}
                  </button>
                </form>

                {message && <div role="status" className="flex gap-2 rounded-xl border border-emerald-400/20 bg-emerald-400/[0.07] p-3 text-sm leading-6 text-emerald-200"><CheckCircle2 size={18} className="mt-1 shrink-0" />{message}</div>}
                <div className="rounded-xl border border-white/10 p-4 text-xs leading-6 text-slate-400">After upload, GitHub will save the new PDF and Vercel should redeploy automatically if GitHub is connected to your deployment. Wait for deployment to finish before checking the public buttons.</div>
                <button onClick={handleLogout} className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"><LogOut size={16} /> Sign out</button>
              </div>
            )}

            {error && <p role="alert" className="mt-5 rounded-xl border border-rose-400/20 bg-rose-400/[0.07] px-4 py-3 text-sm leading-6 text-rose-200">{error}</p>}
          </div>
        </section>
      </div>
    </main>
  );
}
