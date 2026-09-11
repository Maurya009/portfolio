"use client";

import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { profile } from "@/data/profile";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio message from ${name || "a visitor"}`
    );

    const body = encodeURIComponent(
      `${message}\n\n— ${name} (${email})`
    );

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;

    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-medium text-paper"
        >
          Your Name
        </label>

        <input
          id="name"
          name="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="w-full rounded-xl border border-line bg-panel px-4 py-3 text-sm text-paper outline-none transition placeholder:text-mute focus:border-signal focus:ring-2 focus:ring-signal/20"
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-paper"
        >
          Email Address
        </label>

        <input
          id="email"
          name="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="w-full rounded-xl border border-line bg-panel px-4 py-3 text-sm text-paper outline-none transition placeholder:text-mute focus:border-signal focus:ring-2 focus:ring-signal/20"
        />
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-paper"
        >
          Your Message
        </label>

        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell me about your project or opportunity..."
          className="w-full resize-none rounded-xl border border-line bg-panel px-4 py-3 text-sm leading-7 text-paper outline-none transition placeholder:text-mute focus:border-signal focus:ring-2 focus:ring-signal/20"
        />
      </div>

      {/* Submit button */}
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-signal px-5 py-3 text-sm font-semibold text-ink transition hover:scale-[1.01] hover:opacity-90 sm:w-auto"
      >
        <Send size={17} />
        Send Message
      </button>

      {/* Success message */}
      {submitted && (
        <div className="flex items-start gap-3 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-sm text-emerald-200">
          <CheckCircle2 size={18} className="mt-0.5 shrink-0" />

          <p>
            Your email app is opening. Please review the message and send it.
          </p>
        </div>
      )}
    </form>
  );
}