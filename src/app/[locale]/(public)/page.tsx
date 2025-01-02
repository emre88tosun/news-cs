import type { ApiResponse } from '@/customTypes';
import NewsListingItem from '@/components/news-listing-item';
import NewsListingPagination from '@/components/news-listing-pagination';
import { Button } from '@/components/ui/button';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Link from 'next/link';

type IIndexProps = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ fetching: string | undefined }>;
};

export async function generateMetadata(props: IIndexProps) {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,

  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

const fetchNewsListing = async (locale: string, fetching: string | undefined) => {
  const t = await getTranslations({
    locale,
  });
  const pageAddition = fetching ? `&page=${fetching}` : '';
  const countryFilter = locale === 'en' ? 'us' : locale;
  const res = await fetch(`https://newsdata.io/api/1/latest?size=10&apikey=${process.env.NEXT_PUBLIC_NEWS_API_TOKEN}&country=${countryFilter}${pageAddition}`, {
    next: { revalidate: 90, tags: [fetching ?? ''] }, // Cache the page for 1.5 minutes
  });
  const result = await res.json() as ApiResponse;
  if (!res.ok) {
    return { message: t('listing_error') };
  }

  return {
    ...result,
  };
};

export default async function Index(props: IIndexProps) {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
  });
  const { fetching } = await props.searchParams;
  const data = await fetchNewsListing(locale, fetching);
  setRequestLocale(locale);

  if ('message' in data) {
    return (
      <div className="mt-6 flex flex-col items-center justify-center gap-4">
        <h2 className="text-2xl font-bold">{data.message}</h2>
        <Link href="/">
          <Button variant="default">{t('go_home')}</Button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        {data.results.map(item => (
          <NewsListingItem key={item.article_id} locale={locale} {...item} />
        ))}
      </div>
      <NewsListingPagination next={data.nextPage} fetching={fetching} />
    </>

  );
};
