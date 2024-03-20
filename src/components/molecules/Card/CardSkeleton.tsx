import type { FC } from 'react';

import styles from './Card.module.css';

export const CardSkeleton: FC = () => {
  return (
    <div className={styles.card}>
      <div
        style={{
          width: '100%',
          aspectRatio: 1,
          borderRadius: 8,
          backgroundColor: 'var(--rick-and-morty-theme-slate-3xlight)',
        }}
      />

      <div
        style={{
          height: 20,
          width: '75%',
          borderRadius: 4,
          margin: '4px 0px',
          backgroundColor: 'var(--rick-and-morty-theme-slate-3xlight)',
        }}
      />

      <ul>
        {new Array(4).fill(null).map((_, idx) => (
          <div
            key={idx}
            style={{
              height: 16,
              width: 72 + Math.random() * 30,
              borderRadius: 4,
              backgroundColor: 'var(--rick-and-morty-theme-slate-3xlight)',
            }}
          />
        ))}
      </ul>
    </div>
  );
};
