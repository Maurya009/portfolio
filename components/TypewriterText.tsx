"use client";

import { useEffect, useState } from "react";

export default function TypewriterText({
  text,
  speed = 45,
  startDelay = 0,
  onDone,
  className = "",
  showCursor = true,
}: {
  text: string;
  speed?: number;
  startDelay?: number;
  onDone?: () => void;
  className?: string;
  showCursor?: boolean;
}) {
  const [shown, setShown] = useState("");
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    let i = 0;
    let interval: ReturnType<typeof setInterval>;

    const startTimeout = setTimeout(() => {
      interval = setInterval(() => {
        i++;
        setShown(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setFinished(true);
          onDone?.();
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(startTimeout);
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  return (
    <span className={className}>
      {shown}
      {showCursor && (
        <span
          className="ml-0.5 inline-block w-[2px] animate-pulse-glow bg-signal align-middle"
          style={{ height: "0.85em", opacity: finished ? 0.9 : 1 }}
        />
      )}
    </span>
  );
}
