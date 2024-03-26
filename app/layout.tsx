import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

import { Controller } from './Controller';
import { Provider } from './Provider';

import './globals.css';

import { AddNoteModal, UpdateNoteModal } from '@/features/notes';
import { AppHeader } from '@/components/molecules';

const roboto = Roboto({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: 'Rick and Morty Characters',
  description: 'Add notes to your favourite Rick and Morty characters',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>): JSX.Element {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Provider>
          <Controller />

          <AppHeader />
          {children}

          <AddNoteModal />
          <UpdateNoteModal />
        </Provider>
      </body>
    </html>
  );
}
