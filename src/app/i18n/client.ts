import { useEffect, useState } from "react";
import i18next from "i18next";
import { initReactI18next, useTranslation as useTranslationOrg } from "react-i18next";
import { useCookies } from "react-cookie";
import resourcesToBackend from "i18next-resources-to-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { getOptions, languages, cookieName } from "./settings";

const runsOnServerSide = typeof window === "undefined";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(
    resourcesToBackend(async (language: string, namespace: string) => {
      return (await import(`./locales/${language}/${namespace}.json`)).default;
    })
  )
  .init({
    ...(getOptions() as any), // You may need to cast the return type to 'any' due to the 'lng' property assignment
    lng: undefined, // let detect the language on the client side
    detection: {
      order: ["path", "htmlTag", "cookie", "navigator"],
    },
    preload: runsOnServerSide ? languages : [],
  });

export function useClientTranslation(
  lng: string,
  ns: string | string[] = "translation",
  options?: any
) {
  const [cookies, setCookie] = useCookies([cookieName]);
  const ret = useTranslationOrg(ns, options);
  const { i18n } = ret;

  // Move the conditional checks here
  if (runsOnServerSide && lng && i18n.resolvedLanguage !== lng) {
    i18n.changeLanguage(lng);
  }

  const [activeLng, setActiveLng] = useState(i18n.resolvedLanguage);

  useEffect(() => {
    if (runsOnServerSide && lng && i18n.resolvedLanguage !== lng) {
      i18n.changeLanguage(lng);
    }

    if (activeLng === i18n.resolvedLanguage) return;
    setActiveLng(i18n.resolvedLanguage);

    if (!lng || i18n.resolvedLanguage === lng) return;
    i18n.changeLanguage(lng);

    if (cookies.i18next === lng) return;
    setCookie(cookieName, lng, { path: "/" });
  }, [activeLng, cookies, i18n, lng, ns, setCookie]);

  return ret;
}
