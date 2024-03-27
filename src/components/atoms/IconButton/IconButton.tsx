import type { FC, PropsWithChildren } from 'react';
import c from 'classnames';

import styles from './IconButton.module.css';

interface IconButtonProps {
  className: string;
  onClick: () => void;
}

export const IconButton: FC<PropsWithChildren<IconButtonProps>> = ({ children, className, onClick }) => {
  return (
    <button className={c(styles.button, className)} onClick={onClick}>
      {children}
    </button>
  );
};
