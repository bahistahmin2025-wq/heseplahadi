'use client';

import {usePathname} from 'next/navigation';
import {Link, usePathname as useI18nPathname} from '@/i18n/navigation';

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const currentLocale = pathname.startsWith('/en') ? 'en' : 'tr';
  const targetLocale = currentLocale === 'tr' ? 'en' : 'tr';

  const pathWithoutLocale = pathname.replace(/^\/(tr|en)/, '') || '/';

  return (
    <Link
      href={pathWithoutLocale as any}
      locale={targetLocale}
      className="text-sm font-medium text-white/80 hover:text-white transition-colors ml-4"
    >
      {targetLocale === 'tr' ? 'TR' : 'EN'}
    </Link>
  );
}
