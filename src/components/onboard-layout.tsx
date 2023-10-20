"use client";
import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import ModeToggle from "@/components/mode-toggle";
import dynamic from "next/dynamic";
import LanguageSelector from "@/components/language-selector";

function OnboardLayout({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();

  return (
    <section className="flex flex-col min-h-screen justify-between">
      <header className="flex justify-between max-h-[80px] w-full">
        <div className="md:bg-secondary w-[250px] p-5 flex align-middle justify-center">
          <Image
            src={theme === "dark" ? "/assets/images/logo.svg" : "/assets/images/logo-dark.svg"}
            alt="Investing Mate logo"
            width="448"
            height="72"
            className="w-[200px] object-contain"
            priority={true}
          />
        </div>
        <div className="p-5 flex align-middle justify-center gap-2">
          <ModeToggle />
          <LanguageSelector />
        </div>
      </header>
      <section className="flex flex-grow">
        <aside className="relative p-4 bg-secondary w-[250px] hidden md:p-10 md:block">
          <Image
            src="/assets/images/footer.svg"
            alt="footer art"
            width="448"
            height="72"
            className="absolute bottom-0 left-0"
            priority={true}
          />
        </aside>
        <div className="flex flex-grow p-4">{children}</div>
      </section>
    </section>
  );
}

export default dynamic(() => Promise.resolve(OnboardLayout), { ssr: false });
