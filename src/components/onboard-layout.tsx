"use client";
import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import ModeToggle from "@/components/mode-toggle";

export default function OnboardLayout({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  return (
    <section className="grid grid-cols-12 md:min-h-screen">
      <aside className="relative p-4 bg-secondary col-span-12 md:col-span-3 md:max-w-[300px] md:p-10">
        <Image
          src={theme === "dark" ? "/images/logo.svg" : "/images/logo-dark.svg"}
          alt="Investing Mate logo"
          width="448"
          height="72"
          className="w-[200px] max-w-full"
          priority={true}
        />
        <Image
          src="/images/footer.svg"
          alt="footer art"
          width="448"
          height="72"
          className="absolute bottom-0 left-0"
          priority={true}
        />
      </aside>
      <div className="p-4 col-span-12 md:p-10 md:col-span-9">
        <div className="flex justify-end">
          <ModeToggle />
        </div>
        {children}
      </div>
    </section>
  );
}
