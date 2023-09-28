import './globals.css';
import type { Metadata } from 'next';

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
    <html lang="en" className="font-mono">
      <body>
        <header>헤더입니다.</header>
        {children}
      </body>
    </html>
  );
}
