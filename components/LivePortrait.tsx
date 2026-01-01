"use client";

import Image from "next/image";
import type { CSSProperties } from "react";

export function LivePortrait() {
  return (
    <div
      className="group relative h-[360px] w-[300px] overflow-hidden rounded-2xl border border-white/10 bg-[#0b1220] shadow-glow"
      style={
        {
          "--eye-y": "34%",
          "--eye-w": "44px",
          "--eye-left-x": "35%",
          "--eye-right-x": "57%"
        } as CSSProperties
      }
    >
      <Image
        src="/adi.jpg"
        alt="Adarsh Dessai portrait"
        fill
        className="object-cover object-[center_16%]"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0b1220]/35" />
      <div
        className="absolute inset-0 opacity-25 mix-blend-screen animate-scan"
        style={{
          backgroundImage:
            "linear-gradient(transparent 0%, rgba(61,232,255,0.14) 50%, transparent 100%)",
          backgroundSize: "100% 180px"
        }}
      />
      <div className="absolute inset-0 rounded-2xl border border-neon-blue/30 opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="absolute left-3 top-3 h-3 w-3 border-l border-t border-neon-blue/70" />
      <div className="absolute right-3 top-3 h-3 w-3 border-r border-t border-neon-blue/70" />
      <div className="absolute left-3 bottom-3 h-3 w-3 border-b border-l border-neon-blue/70" />
      <div className="absolute bottom-3 right-3 h-3 w-3 border-b border-r border-neon-blue/70" />
      <div className="absolute inset-0 border border-white/10" />
    </div>
  );
}
