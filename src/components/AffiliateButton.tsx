import {Link} from '@/i18n/navigation';

const AFFILIATE_URL = 'https://lkte.cc/9cd608a0';

export default function AffiliateButton({
  children,
  variant = 'primary',
  className = '',
}: {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}) {
  const base = 'inline-block text-center font-bold rounded-lg transition-all duration-200 no-underline';
  const styles = {
    primary: 'bg-brand-blue text-white hover:bg-blue-600 px-8 py-4 text-lg',
    secondary: 'bg-accent-green text-white hover:bg-green-600 px-6 py-3 text-base',
    outline: 'border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white px-6 py-3 text-base',
  };

  return (
    <a
      href={AFFILIATE_URL}
      target="_blank"
      rel="nofollow noopener sponsored"
      className={`${base} ${styles[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
