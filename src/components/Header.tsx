import {Link} from '@/i18n/navigation';
import {useTranslations} from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const t = useTranslations('Header');

  const navItems = [
    {href: '/', label: t('home')},
    {href: '/giris', label: t('login')},
    {href: '/bonus', label: t('bonus')},
    {href: '/casino', label: t('casino')},
    {href: '/spor-bahis', label: t('sports')},
    {href: '/blog', label: t('blog')},
  ];

  return (
    <header className="bg-deep-blue sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-white font-bold text-xl tracking-tight">
            1win
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white/80 hover:text-white text-sm font-medium transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <LanguageSwitcher />
          </nav>
          <div className="flex md:hidden items-center gap-2">
            <LanguageSwitcher />
            <MobileMenu items={navItems} />
          </div>
        </div>
      </div>
    </header>
  );
}

function MobileMenu({items}: {items: {href: string; label: string}[]}) {
  return (
    <details className="relative">
      <summary className="text-white cursor-pointer list-none p-2">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 12h18M3 6h18M3 18h18" />
        </svg>
      </summary>
      <div className="absolute right-0 top-full bg-deep-blue border border-white/10 rounded-lg p-4 w-48 shadow-xl">
        <nav className="flex flex-col gap-3">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-white/80 hover:text-white text-sm font-medium transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </details>
  );
}
