import type { Metadata } from 'next';
import { Providers } from './providers';
import './globals.css';

export const metadata: Metadata = {
  title: 'Errandly - Your hyperlocal task network',
  description: 'Get small errands done, fast.',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-bg text-text-primary">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
