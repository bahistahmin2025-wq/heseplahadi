import {getTranslations} from 'next-intl/server';
import {setRequestLocale} from 'next-intl/server';
import AffiliateButton from '@/components/AffiliateButton';

type Props = {
  params: Promise<{locale: string}>;
};

export async function generateMetadata({params}: Props) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'LoginPage.meta'});
  return {title: (t as any)('title'), description: (t as any)('description')};
}

export default async function LoginPage({params}: Props) {
  const {locale} = await params;
  setRequestLocale(locale);
  const t = await getTranslations('LoginPage');

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
          <h2 className="text-2xl md:text-3xl font-bold text-deep-blue mb-8">{t('howToRegister.title')}</h2>
          <ol className="space-y-4 mb-12">
            {(t.raw('howToRegister.steps') as string[]).map((step, i) => (
              <li key={i} className="flex gap-4 items-start bg-gray-100 rounded-lg p-4">
                <span className="w-8 h-8 bg-brand-blue text-white rounded-full flex items-center justify-center shrink-0 font-bold">{i + 1}</span>
                <span className="text-gray-700 pt-1">{step}</span>
              </li>
            ))}
          </ol>

          <h2 className="text-2xl md:text-3xl font-bold text-deep-blue mb-8">{t('loginGuide.title')}</h2>
          <ol className="space-y-4 mb-12">
            {(t.raw('loginGuide.steps') as string[]).map((step, i) => (
              <li key={i} className="flex gap-4 items-start bg-gray-100 rounded-lg p-4">
                <span className="w-8 h-8 bg-brand-blue text-white rounded-full flex items-center justify-center shrink-0 font-bold">{i + 1}</span>
                <span className="text-gray-700 pt-1">{step}</span>
              </li>
            ))}
          </ol>

          <div className="text-center mb-12">
            <AffiliateButton>{t('tips.cta')}</AffiliateButton>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-12">
            <h3 className="text-xl font-bold text-amber-800 mb-4">{t('tips.title')}</h3>
            <p className="text-amber-700 mb-4">{t('tips.desc')}</p>
            <ul className="space-y-2">
              {(t.raw('tips.items') as string[]).map((item, i) => (
                <li key={i} className="text-amber-700 flex gap-2">
                  <span className="text-amber-500">&#x2022;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-deep-blue text-white rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">{t('info.title')}</h3>
            <p className="text-white/80 leading-relaxed">{t('info.desc')}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
