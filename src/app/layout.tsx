import Header from '@/app.feature/header';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'caseBread`s devlog',
  description: '기술블로그입니다',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ko" className="font-sans">
      <head />
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
