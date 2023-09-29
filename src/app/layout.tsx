import './globals.css';
import type { Metadata } from 'next';
import HeaderContainer from '@/app.feature/header/HeaderContainer';

export const metadata: Metadata = {
  title: 'caseBread`s devlog',
  description: '기술블로그입니다',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ko" className="font-sans">
      <head />
      <body>
        <header>
          <HeaderContainer />
        </header>
        <main className="m-auto" style={{ maxWidth: '1056px' }}>
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
