'use client';
import { Button } from '@/components/ui/button';
import { useRouter } from '@/libs/i18nNavigation';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

type NewsListingPaginationProps = {
  readonly next: string | undefined;
  readonly fetching: string | undefined;
};

export default function NewsListingPagination({ next, fetching }: NewsListingPaginationProps) {
  const t = useTranslations();
  const router = useRouter();
  return (
    <div className="mt-4 flex w-full items-center justify-end gap-4">
      <Button variant="default" onClick={router.back} disabled={!fetching}>
        {t('previous')}
      </Button>
      <Link href={`/?fetching=${next}`} scroll>
        <Button variant="default">
          {t('next')}
        </Button>
      </Link>
    </div>
  );
}
