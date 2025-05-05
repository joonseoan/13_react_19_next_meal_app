import { JSX } from 'react';
import './globals.css';
import MainHeader from '@/components/main-header/main-header';

export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

// [IMPORTANT] 
// This root layout always active, even if the nested layout for instance `layout.tsx` in
// `meals` pages exits.
// This root layout always wraps `children` and also the nested `layout.tsx` like meals `layout.tsx`
export default function RootLayout({ children }: { children: JSX.Element }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}