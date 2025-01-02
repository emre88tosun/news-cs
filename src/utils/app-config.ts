import type { LocalePrefixMode } from 'node_modules/next-intl/dist/types/src/routing/types';

const localePrefix: LocalePrefixMode = 'as-needed';

export const AppConfig = {
  name: 'News App',
  locales: ['en', 'tr', 'ae'],
  defaultLocale: 'en',
  localePrefix,
};
