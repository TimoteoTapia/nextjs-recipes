import type { Metadata } from 'next';
import '@/app/globals.css';
import { Providers } from '@/app/providers';
import Navbar from '@/ui/layout/navbar';
import Footer from '@/ui/layout/footer';

export const metadata: Metadata = {
  title: '',
  description: 'Kevin Tapia',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex flex-col min-h-screen'>
      <Providers>
        <header>
          <Navbar />
        </header>
        <main className='flex-grow mt-40 mb-10'>{children}</main>
        <footer className='mt-auto'>
          <Footer />
        </footer>
      </Providers>
    </div>
  );
}
