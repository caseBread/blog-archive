import '@/app.styled/globals.css';
import '@/app.styled/markdown/github-markdown.css';
import '@/app.styled/markdown/github-markdown-light.css';
import type { Metadata } from 'next';
import HeaderContainer from '@/app.feature/header/HeaderContainer';
import DynamicDarkmodeCss from '@/app.modules/dynamic/DynamicDarkmodeCss';

export const metadata: Metadata = {
  title: 'caseBread`s devlog',
  description: '기술블로그입니다',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ko" className="font-sans bg-default text-gray-900">
      <head>
        <DynamicDarkmodeCss />
      </head>
      <body>
        <header>
          <HeaderContainer />
        </header>
        <main className="m-auto" style={{ maxWidth: '1056px' }}>
          {children}
        </main>
        <footer className="my-8 flex">
          <span className="m-auto text-xs text-gray-600">
            Copyright © Geonu Kim. All Rights Reserved.
          </span>
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
