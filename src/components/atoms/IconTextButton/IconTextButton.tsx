import type { FC } from 'react';

import styles from './IconTextButton.module.css';

interface IconTextButton {
  iconJsx: JSX.Element;
  text: string;
  onClick: () => void;
}

export const IconTextButton: FC<IconTextButton> = ({ iconJsx, text, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {iconJsx}
      <span>{text}</span>
    </button>
  );
};
