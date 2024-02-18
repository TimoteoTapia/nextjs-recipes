import type { Metadata } from 'next';
import './globals.css';
import { Providers } from './providers';
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
        <main className='flex-grow'>{children}</main>
        <footer className='mt-auto'>
          <Footer />
        </footer>
      </Providers>
    </div>
  );
}
