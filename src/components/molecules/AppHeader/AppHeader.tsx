import type { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from './AppHeader.module.css';

export const AppHeader: FC = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <div style={{ position: 'relative', width: 32, aspectRatio: 1, borderRadius: '100%', overflow: 'hidden' }}>
          <Image src="/rick-and-morty-portal.jpg" alt="Logo" fill objectFit="cover" />
        </div>
      </Link>

      <div className={styles.titles}>
        <h1>Rick and Morty</h1>
        <h4>Characters</h4>
      </div>
    </nav>
  );
};
