'use client';

import { routing } from '@/libs/i18nNavigation';
import NextError from 'next/error';

export default function GlobalError() {
  return (
    <html lang={routing.defaultLocale}>
      <body>
        <NextError statusCode={0} />
      </body>
    </html>
  );
}