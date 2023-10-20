import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getCurrentLanguage(pathname: string): string {
  // Remove any leading or trailing slashes and split the path by '/'
  const pathSegments = pathname
    .trim()
    .replace(/^\/|\/$/g, "")
    .split("/");

  if (pathSegments.length > 0) {
    return pathSegments[0];
  }

  return "en";
}
