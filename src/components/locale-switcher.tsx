'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { usePathname } from '@/libs/i18nNavigation';
import { Check, ChevronDown } from 'lucide-react';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'tr', name: 'Türkçe' },
  { code: 'ae', name: 'العربية' },
];

export const LocaleSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleChange = (value: string) => {
    router.push(`/${value}${pathname}`);
    router.refresh();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-[140px] justify-between">
          {languages.find(lang => lang.code === locale)?.name}
          <ChevronDown className="ml-2 size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[140px]">
        {languages.map(lang => (
          <DropdownMenuItem
            key={lang.code}
            onSelect={() => handleChange(lang.code)}
            className="justify-between"
          >
            {lang.name}
            {lang.code === languages.find(lang => lang.code === locale)?.code && <Check className="size-4" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
