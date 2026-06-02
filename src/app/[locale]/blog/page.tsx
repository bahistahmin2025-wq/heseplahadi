import {getTranslations} from 'next-intl/server';
import {setRequestLocale} from 'next-intl/server';
import {Link} from '@/i18n/navigation';

type Props = {
  params: Promise<{locale: string}>;
};

export async function generateMetadata({params}: Props) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'BlogIndex.meta'});
  return {title: (t as any)('title'), description: (t as any)('description')};
}

export default async function BlogIndex({params}: Props) {
  const {locale} = await params;
  setRequestLocale(locale);
  const t = await getTranslations('BlogIndex');

  return (
    <div>
      <section className="bg-gradient-to-br from-deep-blue via-deep-blue to-brand-blue text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('hero.title')}</h1>
          <p className="text-lg text-white/70">{t('hero.subtitle')}</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-deep-blue mb-8">{t('posts.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <div key={i} className="bg-gray-100 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-deep-blue mb-3">{t(`posts.post${i}.title`)}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{t(`posts.post${i}.desc`)}</p>
                <Link
                  href={i === 1 ? '/blog/bahis-ipuclari' : '/blog/kazanma-taktikleri'}
                  className="text-brand-blue font-semibold hover:underline"
                >
                  {t(`posts.post${i}.link`)} &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
