import { BaseTemplate } from '@/templates/BaseTemplate';
import { setRequestLocale } from 'next-intl/server';

export default async function Layout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <BaseTemplate>
      <div className="pb-6 text-xl [&_p]:my-6">{props.children}</div>
    </BaseTemplate>
  );
}
