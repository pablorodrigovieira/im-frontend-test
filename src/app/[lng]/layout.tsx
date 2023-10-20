import React from "react";
import type { Metadata } from "next";
import { dir } from "i18next";
import { Inter } from "next/font/google";
import "../globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import OnboardLayout from "@/components/onboard-layout";
import { languages } from "@/app/i18n/settings";
import { RootLayoutProps } from "@/interfaces/app-interfaces";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Investing Mate",
  description: "Made by Investors for Investors.",
};

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout(props: RootLayoutProps) {
  const { children, params } = props;
  const lng = params.lng;
  return (
    <html lang={lng} dir={dir(lng)} suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen`}>
        <ThemeProvider attribute="class" defaultTheme="light" disableTransitionOnChange>
          <OnboardLayout>{children}</OnboardLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
