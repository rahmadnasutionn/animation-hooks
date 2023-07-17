import { Suspense } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Text Variant',
  description:
    'Explore text variant for your projects',
};

export default function TextVariantsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className='max-w-7xl mx-auto flex items-center justify-center p-6 lg:p-8'>
      <Suspense>
        {children}
      </Suspense>
    </main>
  );
};
