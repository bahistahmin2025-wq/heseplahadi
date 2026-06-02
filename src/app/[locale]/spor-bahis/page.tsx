import {getTranslations} from 'next-intl/server';
import {setRequestLocale} from 'next-intl/server';
import AffiliateButton from '@/components/AffiliateButton';

type Props = {
  params: Promise<{locale: string}>;
};

export async function generateMetadata({params}: Props) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'SportsPage.meta'});
  return {title: (t as any)('title'), description: (t as any)('description')};
}

export default async function SportsPage({params}: Props) {
  const {locale} = await params;
  setRequestLocale(locale);
  const t = await getTranslations('SportsPage');

  const sports = ['football', 'basketball', 'tennis', 'esports'] as const;

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
          <h2 className="text-2xl md:text-3xl font-bold text-deep-blue mb-8">{t('sports.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {sports.map((sport) => (
              <div key={sport} className="bg-gray-100 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-deep-blue mb-3">{t(`sports.${sport}.title`)}</h3>
                <p className="text-gray-600 leading-relaxed">{t(`sports.${sport}.desc`)}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-100 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-deep-blue mb-6">{t('features.title')}</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {(t.raw('features.items') as string[]).map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-brand-blue rounded-full shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-deep-blue mb-4">{t('cta.title')}</h3>
            <p className="text-gray-600 mb-6">{t('cta.desc')}</p>
            <AffiliateButton>{t('cta.button')}</AffiliateButton>
          </div>
        </div>
      </section>
    </div>
  );
}
