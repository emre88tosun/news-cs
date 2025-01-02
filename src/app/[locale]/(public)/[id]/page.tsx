import type { ApiResponse } from '@/customTypes';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Heart, Share2 } from 'lucide-react';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';

type IDetailProps = {
  params: Promise<{ locale: string; id: string }>;
};

export async function generateMetadata(props: IDetailProps) {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,

  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

const fetchNews = async (locale: string, id: string) => {
  const t = await getTranslations({
    locale,
  });
  const res = await fetch(`https://newsdata.io/api/1/latest?&apikey=${process.env.NEXT_PUBLIC_NEWS_API_TOKEN}&id=${id}`, {
    next: { revalidate: 90, tags: [id] }, // Cache the page for 1.5 minutes
  });
  const result = await res.json() as ApiResponse;
  if (!res.ok) {
    return { message: t('detail_error') };
  }

  return {
    data: result.results[0],
  };
};

export default async function Detail(props: IDetailProps) {
  const { locale, id } = await props.params;
  const t = await getTranslations({
    locale,
  });
  const result = await fetchNews(locale, id);
  setRequestLocale(locale);

  if ('message' in result || (result && !result.data)) {
    return (
      <div className="mt-6 flex flex-col items-center justify-center gap-4">
        <h2 className="text-2xl font-bold">{result.message}</h2>
        <Link href="/">
          <Button variant="default">{t('go_home')}</Button>
        </Link>
      </div>
    );
  }

  return (
    <main className="container py-6">
      <Card className="overflow-hidden">
        <CardHeader className="p-0">
          <div className="relative h-64 w-full">
            <Image
              src={result.data!.image_url ?? 'https://fastly.picsum.photos/id/305/536/354.jpg?hmac=u9Mw37522_zEQ1FdKoVv_QXkWMkBOZFzRSXn2MCW0IY'}
              alt={result.data!.title}
              style={{ objectFit: 'cover' }}
              sizes="100vw"
              fill
              unoptimized
            />
            <Badge className="absolute start-2 top-2 bg-primary text-primary-foreground">
              {result.data!.category.join(', ')}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <h1 className="mb-4 text-3xl font-bold text-foreground">{result.data!.title}</h1>
          <time className="mb-4 block text-sm text-muted-foreground">{`${result.data!.pubDate} ${result.data!.pubDateTZ}`}</time>
          <p className="mb-6 text-muted-foreground">{result.data!.description}</p>
        </CardContent>
        <CardFooter className="flex items-center justify-between bg-muted p-6">
          <div className="flex space-x-2">
            <Button variant="ghost" size="sm">
              <Heart className="me-1 size-4" />
              {t('like')}
            </Button>
            <Button variant="ghost" size="sm">
              <Share2 className="me-1 size-4" />
              {t('share')}
            </Button>
          </div>
        </CardFooter>
      </Card>
    </main>
  );
}
