'use client';

import type { FC } from 'react';
import { Plus } from 'lucide-react';

import { useAppDispatch } from '@/store';
import { IconTextButton } from '@/components/atoms';

import { setAddNoteModalMetadata, toggleAddModalVisible } from '../store';

interface AddNoteButtonProps {
  characterId: number;
}

export const AddNoteButton: FC<AddNoteButtonProps> = ({ characterId }) => {
  const dispatch = useAppDispatch();

  const handleAddNote = (): void => {
    dispatch(toggleAddModalVisible());
    dispatch(setAddNoteModalMetadata({ characterId }));
  };

  return <IconTextButton iconJsx={<Plus size={14} />} onClick={handleAddNote} text="Add Note" />;
};
