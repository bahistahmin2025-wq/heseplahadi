import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {getMessages, setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '../globals.css';
import type {Metadata} from 'next';

type Props = {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {locale} = await params;
  const otherLocale = locale === 'tr' ? 'en' : 'tr';

  return {
    icons: {
      icon: '/favicon.svg',
    },
    alternates: {
      languages: {
        [locale]: `https://www.hesaplahadi.com/${locale}`,
        [otherLocale]: `https://www.hesaplahadi.com/${otherLocale}`,
        'x-default': 'https://www.hesaplahadi.com/tr',
      },
    },
  };
}

export default async function LocaleLayout({children, params}: Props) {
  const {locale} = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <link rel="alternate" hrefLang={locale === 'tr' ? 'en' : 'tr'} href={`https://www.hesaplahadi.com/${locale === 'tr' ? 'en' : 'tr'}`} />
        <link rel="alternate" hrefLang="x-default" href="https://www.hesaplahadi.com/tr" />
      </head>
      <body className="min-h-svh flex flex-col">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
