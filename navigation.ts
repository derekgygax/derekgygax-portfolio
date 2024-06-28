import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const DEFAULT_LOCALE = 'en';
const additionalLocales: string[] = ['es'];

export const LOCALES = [DEFAULT_LOCALE, ...additionalLocales] as const;

export const {
  Link,
  redirect,
  usePathname,
  useRouter
} = createSharedPathnamesNavigation({ locales: LOCALES });