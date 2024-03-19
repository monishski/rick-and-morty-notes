import type { FC } from 'react';

import styles from './Badge.module.css';

interface BadgeProps {
  iconJsx: JSX.Element;
  title: string;
  subtitle: string;
}

export const Badge: FC<BadgeProps> = ({ iconJsx, title, subtitle }) => {
  return (
    <div className={styles.badge}>
      {iconJsx}
      <div>
        <h4 {...{ title }}>{title}</h4>
        {subtitle && <h6 title={subtitle}>{`· ${subtitle}`}</h6>}
      </div>
    </div>
  );
};
