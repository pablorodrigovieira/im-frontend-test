import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import OnboardLayout from "@/components/onboard-layout";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Investing Mate",
  description: "Made by Investors for Investors.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen`}>
        <ThemeProvider attribute="class" defaultTheme="light" disableTransitionOnChange>
          <OnboardLayout>{children}</OnboardLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
