import type { FC, PropsWithChildren } from 'react';

import styles from './Grid.module.css';

export const Grid: FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.grid}>{children}</div>;
};
