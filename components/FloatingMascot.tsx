"use client";

import { useState } from "react";
import BotMascot from "@/components/BotMascot";

export default function FloatingMascot() {
  const [hovered, setHovered] = useState(false);

  function handleClick() {
    const input = document.getElementById("home-chat-input");
    input?.scrollIntoView({ behavior: "smooth", block: "center" });
    (input as HTMLInputElement | null)?.focus();
  }

  return (
    <div
      className="fixed bottom-6 right-6 z-10 hidden w-20 animate-float sm:block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered && (
        <div className="absolute -top-11 right-0 whitespace-nowrap rounded-full border border-line bg-panel px-3 py-1.5 text-xs text-paper shadow-lg animate-pop-in">
          Ask AI about me!
          <span className="absolute -bottom-1 right-6 h-2 w-2 rotate-45 border-b border-r border-line bg-panel" />
        </div>
      )}
      <button
        onClick={handleClick}
        aria-label="Ask the AI about Suraj"
        className="w-full cursor-pointer transition-transform duration-200 hover:scale-110"
      >
        <BotMascot className="w-full opacity-90 drop-shadow-[0_0_18px_rgba(63,207,127,0.25)]" />
      </button>
    </div>
  );
}
