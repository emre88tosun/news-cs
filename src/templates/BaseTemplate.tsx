import { LocaleSwitcher } from '@/components/locale-switcher';
import { AppConfig } from '@/utils/app-config';
import Link from 'next/link';

export const BaseTemplate = (props: {
  children: React.ReactNode;
}) => {
  return (
    <div className="w-full px-1 text-gray-700 antialiased">
      <div className="mx-auto max-w-screen-md">
        <header className="flex w-full items-center justify-between border-b border-gray-300 bg-card">
          <div className=" py-6">
            <Link href="/"><h1 className="text-3xl font-bold text-primary">News App</h1></Link>
          </div>
          <LocaleSwitcher />
        </header>
        <main>{props.children}</main>
        <footer className="border-t border-gray-300 py-8 text-center text-sm">
          {`© Copyright ${new Date().getFullYear()} ${AppConfig.name}. `}
          Emre Tosun
        </footer>
      </div>
    </div>
  );
};
