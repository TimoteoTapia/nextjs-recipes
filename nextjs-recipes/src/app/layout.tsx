import '@/app/globals.css';
import { inter } from '@/ui/fonts';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'home/food',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <header></header>
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
