import type { FC, InputHTMLAttributes } from 'react';
import { IoCloseOutline } from 'react-icons/io5';

import styles from './Input.module.css';

type InputProps = Pick<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'placeholder'> & {
  iconJsx?: JSX.Element;
  handleValueReset: () => void;
};

export const Input: FC<InputProps> = ({ iconJsx, handleValueReset, value, onChange, placeholder }) => {
  return (
    <div className={styles.input}>
      {iconJsx && <span>{iconJsx}</span>}
      <input {...{ value, onChange, placeholder }} />
      {!!value && (
        <IoCloseOutline
          size={16}
          onClick={handleValueReset}
          style={{
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            right: 12,
            cursor: 'pointer',
          }}
        />
      )}
    </div>
  );
};
