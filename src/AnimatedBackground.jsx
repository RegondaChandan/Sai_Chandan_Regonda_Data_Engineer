import React from "react";

export default function AnimatedBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 w-full h-full animate-gradient bg-gradient-to-br from-indigo-400 via-blue-300 to-cyan-300 opacity-60"
      style={{
        backgroundSize: '200% 200%',
        animation: 'gradientMove 12s ease-in-out infinite',
      }}
    />
  );
}
