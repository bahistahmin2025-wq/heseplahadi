import {routing} from '@/i18n/routing';

const baseUrl = 'https://www.hesaplahadi.com';

export async function generateSitemaps() {
  return [{id: 'default'}];
}

export default async function sitemap({id}: {id: string}) {
  const pages = [
    '', '/giris', '/bonus', '/casino', '/spor-bahis', '/blog',
    '/blog/bahis-ipuclari', '/blog/kazanma-taktikleri', '/hakkimizda', '/iletisim',
  ];

  const entries = routing.locales.flatMap((locale) =>
    pages.map((page) => ({
      url: `${baseUrl}/${locale}${page}`,
      lastModified: new Date(),
      changeFrequency: page.startsWith('/blog/') ? 'weekly' as const : 'monthly' as const,
      priority: page === '' ? 1 : page.startsWith('/blog/') ? 0.7 : 0.8,
    }))
  );

  return entries;
}
