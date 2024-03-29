import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const locales = ["en", "vi", "fr", "ge", "sp"] as const;

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales });
