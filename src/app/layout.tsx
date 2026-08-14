import type { Metadata } from 'next';
import './globals.css';
import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import SwapTheme from '@/components/SwapTheme';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'The Blog - NextJS',
    template: '%s | The Blog',
  },
  description: 'Descrição do blog',
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html id='root' lang='en' className='dark'>
      <body className='min-h-full flex flex-col'>
        <SwapTheme />
        <Container>
          <Header />
          {children}

          <Footer />
        </Container>
      </body>
    </html>
  );
}
