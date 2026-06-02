import {getTranslations} from 'next-intl/server';
import {setRequestLocale} from 'next-intl/server';

type Props = {
  params: Promise<{locale: string}>;
};

export async function generateMetadata({params}: Props) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'ContactPage.meta'});
  return {title: (t as any)('title'), description: (t as any)('description')};
}

export default async function ContactPage({params}: Props) {
  const {locale} = await params;
  setRequestLocale(locale);
  const t = await getTranslations('ContactPage');

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
          <div className="bg-gray-100 rounded-2xl p-8 mb-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-deep-blue mb-6">{t('info.title')}</h2>
            <p className="text-gray-600 leading-relaxed mb-6">{t('info.desc')}</p>
            <a
              href="mailto:info@1winpartner.com"
              className="text-brand-blue text-xl font-bold hover:underline"
            >
              {t('info.email')}
            </a>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-amber-800 mb-3">{t('disclaimer.title')}</h3>
            <p className="text-amber-700 text-sm leading-relaxed">{t('disclaimer.desc')}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
