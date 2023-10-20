"use client";

import * as React from "react";
import { useState } from "react";
import Image from "next/image";
import { languages } from "@/constants/LanguagesContants";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { getCurrentLanguage } from "@/lib/utils";
import Link from "next/link";

function LanguageSelector() {
  const pathname = usePathname();
  const lng = getCurrentLanguage(pathname);
  const currentLng = languages.find((l) => l.lang === lng);
  const [lang, setLang] = useState(currentLng);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="min-w-fit">
          {lang ? (
            <Image
              className="h-[1.2rem] w-auto object-contain rounded-md aspect-auto"
              src={lang.flag}
              alt={lang.name}
              width={20}
              height={20}
            />
          ) : null}
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((item) => {
          return (
            <DropdownMenuItem key={item.name} onClick={() => setLang(item)} className="gap-2">
              <Link href={pathname.replace(lng, item.lang)} className="flex gap-2">
                <Image
                  className="h-[1.2rem] w-auto object-contain rounded-md aspect-auto"
                  src={item.flag}
                  alt={item.name}
                  width={20}
                  height={20}
                />
                <span>{item.name}</span>
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default LanguageSelector;
