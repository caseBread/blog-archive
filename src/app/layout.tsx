import Header from '@/app.feature/header';
import './globals.css';
import type { Metadata } from 'next';
import { useEffect } from 'react';

export const metadata: Metadata = {
  title: 'caseBread`s devlog',
  description: '기술블로그입니다',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="font-sans">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
