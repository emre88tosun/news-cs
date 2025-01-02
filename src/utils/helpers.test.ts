import { routing } from '@/libs/i18nNavigation';
import { getI18nPath } from './helpers';

describe('Helpers', () => {
  describe('getI18nPath function', () => {
    it('should not change the path for default language', () => {
      const url = '/random-url';
      const locale = routing.defaultLocale;

      expect(getI18nPath(url, locale)).toBe(url);
    });

    it('should prepend the locale to the path for non-default language', () => {
      const url = '/random-url';
      const locale = 'tr';

      expect(getI18nPath(url, locale)).toMatch(/^\/tr/);
    });
  });
});
