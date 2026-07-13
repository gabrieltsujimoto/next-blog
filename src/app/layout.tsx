import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'The Blog - NextJS',
  description: 'Descrição do blog',
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html id='root' lang='en' className='dark'>
      <body className='min-h-full flex flex-col'>{children}</body>
    </html>
  );
}
