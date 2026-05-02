import { useEffect, useState } from "react";

const FULL_TEXT = "nathalia.";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(FULL_TEXT.substring(0, index + 1));
      index += 1;
      if (index >= FULL_TEXT.length) {
        clearInterval(interval);
        setTimeout(onComplete, 900);
      }
    }, 90);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-8"
      style={{ backgroundColor: "var(--bg-base)" }}
    >
      {/* Typewriter */}
      <div
        className="font-display italic"
        style={{
          fontSize: "clamp(2.5rem, 8vw, 5rem)",
          color: "var(--text-primary)",
          letterSpacing: "-0.02em",
        }}
      >
        {text}
        <span
          className="animate-blink"
          style={{ color: "var(--accent)", marginLeft: 2 }}
        >
          |
        </span>
      </div>

      {/* Loading bar */}
      <div
        className="overflow-hidden"
        style={{
          width: 160,
          height: 1,
          backgroundColor: "var(--border-subtle)",
        }}
      >
        <div
          className="h-full animate-loading-bar"
          style={{ width: "40%", backgroundColor: "var(--accent)" }}
        />
      </div>
    </div>
  );
};
