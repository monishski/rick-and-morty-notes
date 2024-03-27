'use client';

import type { FC } from 'react';
import { Trash2 } from 'lucide-react';

import { useAppDispatch } from '@/store';
import { IconTextButton } from '@/components/atoms';

import { deleteNote } from '../store';

interface DeleteNoteButtonProps {
  id: string;
}

export const DeleteNoteButton: FC<DeleteNoteButtonProps> = ({ id }) => {
  const dispatch = useAppDispatch();

  const handleDeleteNote = (): void => {
    dispatch(deleteNote({ id }));
  };

  return <IconTextButton iconJsx={<Trash2 size={14} />} onClick={handleDeleteNote} text="Delete Note" />;
};
