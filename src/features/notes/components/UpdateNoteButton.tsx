'use client';

import type { FC } from 'react';
import { Pencil } from 'lucide-react';

import { useAppDispatch } from '@/store';
import { IconTextButton } from '@/components/atoms';

import { setUpdateNoteModalMetadata, toggleUpdateModalVisible } from '../store';

interface UpdateNoteButtonProps {
  id: string;
}

export const UpdateNoteButton: FC<UpdateNoteButtonProps> = ({ id }) => {
  const dispatch = useAppDispatch();

  const handleUpdateNote = (): void => {
    dispatch(toggleUpdateModalVisible());
    dispatch(setUpdateNoteModalMetadata({ id }));
  };

  return <IconTextButton iconJsx={<Pencil size={14} />} onClick={handleUpdateNote} text="Update Note" />;
};
