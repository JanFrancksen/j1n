import Navbar from '@/components/navbar';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'j1n dev',
  description: '[Design & Code]',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body
        className={`${inter.className} bg-neutral-900 text-white font-light`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
