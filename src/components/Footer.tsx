import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';

export default function Footer() {
  const t = useTranslations('Footer');

  const links = [
    {href: '/hakkimizda', label: t('about')},
    {href: '/iletisim', label: t('contact')},
    {href: '/blog', label: t('blog')},
    {href: '/giris', label: t('login')},
    {href: '/bonus', label: t('bonus')},
  ];

  return (
    <footer className="bg-deep-blue text-white/60 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">1win</h3>
            <p className="text-sm leading-relaxed">{t('description')}</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">{t('quickLinks')}</h4>
            <nav className="flex flex-col gap-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">{t('responsible')}</h4>
            <p className="text-sm leading-relaxed">{t('responsibleText')}</p>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} - {t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
