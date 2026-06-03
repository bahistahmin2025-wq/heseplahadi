import type {MetadataRoute} from 'next';

const baseUrl = 'https://www.hesaplahadi.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap/default.xml`,
  };
}
