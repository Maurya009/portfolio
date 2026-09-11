"use client";

import { useMemo } from "react";

function generateStars(count: number, seed: number) {
  let value = seed;

  const random = () => {
    value = (value * 9301 + 49297) % 233280;
    return value / 233280;
  };

  return Array.from({ length: count }, () => ({
    top: `${(random() * 100).toFixed(2)}%`,
    left: `${(random() * 100).toFixed(2)}%`,
    size: random() > 0.9 ? 2 : 1,
    opacity: 0.25 + random() * 0.5,
    delay: `${(random() * 6).toFixed(2)}s`,
    duration: `${(3 + random() * 5).toFixed(2)}s`,
  }));
}

export default function Starfield() {
  const stars = useMemo(() => generateStars(150, 42), []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink">
      {/* White stars */}
      {stars.map((star, index) => (
        <span
          key={index}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
            animationDelay: star.delay,
            animationDuration: star.duration,
          }}
        />
      ))}
    </div>
  );
}