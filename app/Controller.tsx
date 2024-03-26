'use client';

import { useEffect, type FC } from 'react';

import { useAppDispatch, useAppSelector } from '@/store';
import { addNotes, useNotesLocalStorage } from '@/features/notes';

export const Controller: FC = () => {
  const dispatch = useAppDispatch();

  const notes = useAppSelector((state) => state.notes.notes);

  const { getNotesLocalStorage, setNotesLocalStorage } = useNotesLocalStorage();

  useEffect(() => {
    if (notes === null) {
      const notes = getNotesLocalStorage();
      if (notes) dispatch(addNotes(notes));
    } else {
      setNotesLocalStorage(notes);
    }
  }, [notes, dispatch, getNotesLocalStorage, setNotesLocalStorage]);

  return null;
};
