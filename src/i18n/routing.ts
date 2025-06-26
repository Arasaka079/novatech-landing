import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'fr'],
  // The default locale to use when no locale is specified
  defaultLocale: 'en',
  localePrefix: 'as-needed',
});
