"use client";

import TypewriterText from "@/components/TypewriterText";

export default function HeroTyping({ name }: { name: string }) {
  return (
    <div>
      <h1 className="font-mono text-3xl font-semibold text-paper sm:text-4xl">
        <TypewriterText
          text={name}
          speed={70}
          startDelay={150}
        />
      </h1>
    </div>
  );
}