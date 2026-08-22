import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'Cívica Digital — Propuesta de Transformación',
  description:
    'Propuesta técnica de modernización y digitalización integral del sistema Cívica del Metro de Medellín.',
  openGraph: {
    title: 'Cívica Digital — Propuesta de Transformación',
    description:
      'Propuesta técnica de modernización del ecosistema Cívica. Caso M00746243.',
    type: 'website',
    locale: 'es_CO',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#16a34a', // Verde Metro
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`scroll-smooth ${inter.className}`}>
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
