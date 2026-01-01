"use client";

import Link from "next/link";
import { Wifi, BatteryFull, Clock } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cx } from "@/lib/utils";

const tabs = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Demos", href: "/demos" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact", href: "/contact" }
];

export function TopBar() {
  const pathname = usePathname();
  const [time, setTime] = useState<string>(() =>
    new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit"
        })
      );
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#05070d]/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="My Portfolio Adarsh Dessai"
            width={120}
            height={40}
            className="object-contain"
            priority
          />
          <div>
            <p className="text-sm font-semibold text-white">
              My Portfolio: Adarsh Dessai
            </p>
            <p className="text-xs text-white/60">Adarsh Dessai - AI Architect</p>
          </div>
        </div>
        <nav className="hidden items-center gap-3 md:flex">
          {tabs.map((tab) => (
            <Link
              key={tab.href}
              href={tab.href}
              className={cx(
                "rounded-full px-4 py-2 text-sm transition",
                pathname === tab.href
                  ? "bg-white/10 text-white"
                  : "text-white/70 hover:text-white"
              )}
            >
              {tab.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3 text-xs text-white/70">
          <div className="hidden items-center gap-2 md:flex">
            <Wifi className="h-4 w-4" />
            <BatteryFull className="h-4 w-4" />
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>{time}</span>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl items-center gap-2 overflow-x-auto px-4 pb-3 md:hidden">
        {tabs.map((tab) => (
          <Link
            key={`mobile-${tab.href}`}
            href={tab.href}
            className={cx(
              "whitespace-nowrap rounded-full border border-white/10 px-3 py-1 text-xs transition",
              pathname === tab.href
                ? "border-neon-blue text-white"
                : "text-white/60"
            )}
          >
            {tab.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
