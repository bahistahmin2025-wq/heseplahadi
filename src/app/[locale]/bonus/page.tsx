import {getTranslations} from 'next-intl/server';
import {setRequestLocale} from 'next-intl/server';
import AffiliateButton from '@/components/AffiliateButton';

type Props = {
  params: Promise<{locale: string}>;
};

export async function generateMetadata({params}: Props) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'BonusPage.meta'});
  return {title: (t as any)('title'), description: (t as any)('description')};
}

export default async function BonusPage({params}: Props) {
  const {locale} = await params;
  setRequestLocale(locale);
  const t = await getTranslations('BonusPage');

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
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">{t('welcome.title')}</h2>
            <p className="text-green-700 leading-relaxed mb-6">{t('welcome.desc')}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {Object.keys(t.raw('welcome.details') as object).map((key) => (
                <div key={key} className="bg-white/80 rounded-lg p-3 text-green-800 font-medium">
                  {t(`welcome.details.${key}`)}
                </div>
              ))}
            </div>
            <AffiliateButton variant="secondary">{t('welcome.cta')}</AffiliateButton>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-deep-blue mb-8">{t('promos.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {(t.raw('promos.items') as {title: string; desc: string}[]).map((item, i) => (
              <div key={i} className="bg-gray-100 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-deep-blue mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-100 rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-deep-blue mb-3">{t('terms.title')}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{t('terms.desc')}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
