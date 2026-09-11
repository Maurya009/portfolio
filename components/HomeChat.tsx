"use client";

import { useState, useRef, useEffect } from "react";
import { profile } from "@/data/profile";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const SUGGESTIONS = [
  `Who is ${profile.name.split(" ")[0]}?`,
  "How much experience does he have?",
  "What has he built?",
  "How can I contact him?",
];

export default function HomeChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, loading]);

  async function send(text: string) {
    const clean = text.trim();

    if (!clean || loading) return;

    const next: Message[] = [
      ...messages,
      {
        role: "user",
        content: clean,
      },
    ];

    setMessages(next);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: next,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to get response");
      }

      const data = await res.json();

      setMessages([
        ...next,
        {
          role: "assistant",
          content: data.reply,
        },
      ]);
    } catch {
      setMessages([
        ...next,
        {
          role: "assistant",
          content:
            "Couldn't reach the AI right now — try again in a moment.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto w-full max-w-3xl">
      {/* Chat Messages */}
      {messages.length > 0 && (
        <div
          ref={scrollRef}
          className="mb-4 max-h-80 space-y-3 overflow-y-auto rounded-2xl border border-blue-400/15 bg-gradient-to-br from-slate-950/90 via-blue-950/25 to-indigo-950/30 p-4 shadow-[0_0_35px_-25px_rgba(59,130,246,0.7)] backdrop-blur-xl"
        >
          {messages.map((message, index) => (
            <div
              key={index}
              className={`max-w-[85%] rounded-xl border px-4 py-3 text-sm leading-6 ${
                message.role === "user"
                  ? "ml-auto border-blue-300/25 bg-blue-500/10 text-blue-100"
                  : "border-white/10 bg-white/[0.04] text-paper"
              }`}
            >
              {message.content}
            </div>
          ))}

          {loading && (
            <div className="max-w-[85%] rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-mute">
              Typing…
            </div>
          )}
        </div>
      )}

      {/* Suggestions */}
      <div className="mb-5 flex flex-wrap justify-center gap-2">
        {SUGGESTIONS.map((suggestion) => (
          <button
            key={suggestion}
            onClick={() => send(suggestion)}
            disabled={loading}
            className="rounded-full border border-blue-400/15 bg-gradient-to-r from-slate-950/80 to-blue-950/30 px-4 py-2 text-xs text-paper/75 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300/50 hover:bg-blue-400/10 hover:text-blue-200 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {suggestion}
          </button>
        ))}
      </div>

      {/* Chat Input */}
      <div className="flex items-center gap-2 rounded-full border border-blue-400/15 bg-gradient-to-r from-slate-950/90 via-blue-950/25 to-indigo-950/30 px-4 py-3 shadow-[0_0_35px_-25px_rgba(59,130,246,0.7)] backdrop-blur-xl transition-all duration-300 focus-within:border-blue-300/50 focus-within:shadow-[0_0_30px_-15px_rgba(59,130,246,0.65)]">
        <input
          id="home-chat-input"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              send(input);
            }
          }}
          placeholder={`Ask me anything about ${
            profile.name.split(" ")[0]
          }…`}
          className="flex-1 bg-transparent text-sm text-paper placeholder:text-mute focus:outline-none"
        />

        <button
          onClick={() => send(input)}
          disabled={loading}
          aria-label="Send message"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-blue-300/30 bg-gradient-to-br from-blue-500 to-indigo-500 text-white shadow-[0_0_18px_-5px_rgba(59,130,246,0.8)] transition-all duration-300 hover:scale-110 hover:from-blue-400 hover:to-indigo-400 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
        >
          <span className="text-lg">→</span>
        </button>
      </div>
    </div>
  );
}