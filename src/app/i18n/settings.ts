export const fallbackLng = "en";
export const languages = [fallbackLng, "pt"];
export const cookieName = "i18next";

const defaultNS = "translation"; // Provide a default value for defaultNS

export function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
