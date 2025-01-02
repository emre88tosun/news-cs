import type { News } from '@/customTypes';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';

export default async function NewsListingItem({ article_id, title, pubDate, pubDateTZ, category, image_url, locale }: News & { readonly locale: string }) {
  const t = await getTranslations({
    locale,

  });
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          <Image
            src={image_url ?? 'https://fastly.picsum.photos/id/305/536/354.jpg?hmac=u9Mw37522_zEQ1FdKoVv_QXkWMkBOZFzRSXn2MCW0IY'}
            alt={title}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            unoptimized // Since the article's image's host is not known and we can not pass it to the Next Config
          />
          <Badge className="absolute start-2 top-2 bg-primary text-primary-foreground">{category.join(', ')}</Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <h2 className="mb-2 line-clamp-2 min-h-16 text-2xl font-bold text-foreground">{title}</h2>
        <time className="text-sm text-muted-foreground">{`${pubDate} ${pubDateTZ}`}</time>
      </CardContent>
      <CardFooter className="flex justify-end bg-muted p-4">
        <Link href={`/${article_id}`}>
          <Button variant="ghost" size="sm">
            {t('read_more')}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
