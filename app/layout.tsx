'use client';

import { Plus_Jakarta_Sans } from 'next/font/google';
import '@/styles/globals.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient();

const jakartaSans = Plus_Jakarta_Sans({
  // weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <QueryClientProvider client={queryClient}>
        <body className={jakartaSans.className}>
          <Toaster
            toastOptions={{
              duration: 5000,
            }}
          />
          <main className='w-full box-border relative min-h-screen'>
            <div className='my-10'>{children}</div>
          </main>
        </body>
      </QueryClientProvider>
    </html>
  );
}
