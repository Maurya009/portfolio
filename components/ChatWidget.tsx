"use client";

import { useState, useRef, useEffect } from "react";
import { profile } from "@/data/profile";

type Message = { role: "user" | "assistant"; content: string };

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: `Hey, I'm ${profile.name}'s AI. Ask me about his work, skills, or projects.` },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  async function sendMessage() {
    const text = input.trim();
    if (!text || loading) return;

    const nextMessages: Message[] = [...messages, { role: "user", content: text }];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });

      if (!res.ok) throw new Error("Request failed");
      const data = await res.json();
      setMessages([...nextMessages, { role: "assistant", content: data.reply }]);
    } catch {
      setMessages([
        ...nextMessages,
        { role: "assistant", content: "Something went wrong reaching the AI. Try again in a bit." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="mb-3 flex h-[28rem] w-80 flex-col overflow-hidden rounded-lg border border-line bg-panel shadow-2xl sm:w-96">
          <div className="flex items-center justify-between border-b border-line px-4 py-3">
            <span className="font-mono text-xs text-mute">ask-{profile.name.toLowerCase()}-ai</span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="text-mute hover:text-paper"
            >
              ✕
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-3">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] rounded-md px-3 py-2 text-sm ${
                  m.role === "user"
                    ? "ml-auto bg-signal/15 text-paper"
                    : "bg-ink text-paper"
                }`}
              >
                {m.content}
              </div>
            ))}
            {loading && (
              <div className="max-w-[85%] rounded-md bg-ink px-3 py-2 text-sm text-mute">
                typing…
              </div>
            )}
          </div>

          <div className="flex gap-2 border-t border-line p-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Ask about my projects…"
              className="flex-1 rounded-md border border-line bg-ink px-3 py-2 text-sm text-paper placeholder:text-mute focus:outline-none focus-visible:ring-2 focus-visible:ring-signal"
            />
            <button
              onClick={sendMessage}
              disabled={loading}
              className="rounded-md bg-signal px-3 py-2 text-sm font-medium text-ink disabled:opacity-50"
            >
              Send
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        className="rounded-full bg-signal px-5 py-3 font-mono text-sm font-medium text-ink shadow-lg transition-transform hover:scale-105"
      >
        {open ? "close" : `talk to ${profile.name}'s AI`}
      </button>
    </div>
  );
}
