import createMiddleware from 'next-intl/middleware';

import { DEFAULT_LOCALE, LOCALES } from './locales.config';

export default createMiddleware({
  // A list of all locales that are supported
  locales: LOCALES,

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: DEFAULT_LOCALE,

  // This would make it so there is no cookie detection
  // So any time you type 57west.us/ it will be english
  // even if they were previously at 57west.us/en/ and then typed
  // the url 57west.us/. 
  // If you comment this out then if the user is on 57west.us/en/ and then
  // types the url 57west.us/ in they will automatically be forwared
  // to 57west.us/en/
  localeDetection: false
});

export const config = {
  // Skip all paths that should not be internationalized. This example skips
  // certain folders and all pathnames with a dot (e.g. favicon.ico)
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};