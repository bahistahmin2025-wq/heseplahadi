import type {Metadata} from "next";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.hesaplahadi.com'),
  title: {
    default: '1win Türkiye - Online Bahis ve Casino',
    template: '%s | 1win',
  },
  description: '1win resmi partneri. En güncel bonus fırsatları, ücretsiz dönüşler ve bedava bahis kampanyaları.',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    siteName: '1win',
    type: 'website',
    locale: 'tr_TR',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
