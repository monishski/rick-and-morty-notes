'use client';

import type { FC, PropsWithChildren } from 'react';
import { X } from 'lucide-react';

import { IconButton } from '../IconButton/IconButton';
import styles from './Modal.module.css';

interface ModalProps {
  visible: boolean;
  handleClose: () => void;
}

export const Modal: FC<PropsWithChildren<ModalProps>> = ({ children, visible, handleClose }) => {
  if (!visible) return null;
  return (
    <div className={styles['modal-wrapper']}>
      <div className={styles['modal-overlay']} onClick={() => handleClose()} />
      <div className={styles.modal}>
        <IconButton className={styles['close-button']} onClick={handleClose}>
          <X />
        </IconButton>

        {children}
      </div>
    </div>
  );
};
