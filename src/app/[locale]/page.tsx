import {getTranslations} from 'next-intl/server';
import {setRequestLocale} from 'next-intl/server';
import AffiliateButton from '@/components/AffiliateButton';
import {Link} from '@/i18n/navigation';

type Props = {
  params: Promise<{locale: string}>;
};

export async function generateMetadata({params}: Props) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'HomePage.meta'});
  return {
    title: (t as any)('title'),
    description: (t as any)('description'),
    openGraph: {title: (t as any)('title'), description: (t as any)('description')},
  };
}

export default async function HomePage({params}: Props) {
  const {locale} = await params;
  setRequestLocale(locale);
  const t = await getTranslations('HomePage');
  const features = t.raw('features.items') as {title: string; desc: string}[];
  const games = [
    {title: t('games.sports'), desc: t('games.sportsDesc')},
    {title: t('games.casino'), desc: t('games.casinoDesc')},
    {title: t('games.slots'), desc: t('games.slotsDesc')},
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-deep-blue via-deep-blue to-brand-blue text-white py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-sm bg-white/10 px-4 py-1 rounded-full">{t('hero.trustBadge')}</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-6 mb-6 leading-tight">{t('hero.title')}</h1>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-10">{t('hero.subtitle')}</p>
          <AffiliateButton>{t('hero.cta')}</AffiliateButton>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-deep-blue mb-16">{t('features.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div key={i} className="bg-gray-100 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-5">
                  <span className="text-brand-blue text-2xl font-bold">{i + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-deep-blue mb-3">{f.title}</h3>
                <p className="text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-deep-blue mb-16">{t('games.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {games.map((g, i) => (
              <div key={i} className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-deep-blue mb-3">{g.title}</h3>
                <p className="text-gray-600 leading-relaxed">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-deep-blue mb-16">{t('howto.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="text-center">
                <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">{step}</span>
                </div>
                <h3 className="text-lg font-bold text-deep-blue mb-2">{t(`howto.step${step}.title`)}</h3>
                <p className="text-gray-600 text-sm">{t(`howto.step${step}.desc`)}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <AffiliateButton variant="secondary">{t('howto.cta')}</AffiliateButton>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-deep-blue to-brand-blue text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('ctaSection.title')}</h2>
          <p className="text-white/70 text-lg mb-10">{t('ctaSection.desc')}</p>
          <AffiliateButton>{t('ctaSection.button')}</AffiliateButton>
        </div>
      </section>
    </div>
  );
}
