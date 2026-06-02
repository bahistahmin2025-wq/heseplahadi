import {getTranslations} from 'next-intl/server';
import {setRequestLocale} from 'next-intl/server';
import AffiliateButton from '@/components/AffiliateButton';

type Props = {
  params: Promise<{locale: string}>;
};

export async function generateMetadata({params}: Props) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'BlogTactics.meta'});
  return {title: (t as any)('title'), description: (t as any)('description')};
}

export default async function BlogTactics({params}: Props) {
  const {locale} = await params;
  setRequestLocale(locale);
  const t = await getTranslations('BlogTactics');

  const sections = t.raw('sections') as {title: string; body: string}[];

  return (
    <div>
      <section className="bg-gradient-to-br from-deep-blue via-deep-blue to-brand-blue text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('hero.title')}</h1>
          <p className="text-lg text-white/70">{t('hero.subtitle')}</p>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          {sections.map((section, i) => (
            <div key={i} className="mb-12">
              <h2 className="text-2xl font-bold text-deep-blue mb-4">{section.title}</h2>
              <p className="text-gray-600 leading-relaxed text-lg">{section.body}</p>
            </div>
          ))}

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-8 mt-12">
            <h3 className="text-2xl font-bold text-amber-800 mb-4">{t('conclusion.title')}</h3>
            <p className="text-amber-700 leading-relaxed mb-6">{t('conclusion.body')}</p>
            <AffiliateButton>{t('conclusion.cta')}</AffiliateButton>
          </div>
        </div>
      </article>
    </div>
  );
}
