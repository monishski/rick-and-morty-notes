import { useCallback } from 'react';

import { useLocalStorage } from '@/hooks';

import type { Notes } from '../store/types';

const LOCAL_STORAGE_NOTES_KEY = 'NOTES';

export function useNotesLocalStorage(): {
  getNotesLocalStorage: () => Notes;
  setNotesLocalStorage: (notes: Notes) => void;
} {
  const { get, set } = useLocalStorage<Notes>();

  const getNotesLocalStorage = useCallback(() => get(LOCAL_STORAGE_NOTES_KEY), [get]);

  const setNotesLocalStorage = useCallback((notes: Notes) => set(LOCAL_STORAGE_NOTES_KEY, notes), [set]);

  return { getNotesLocalStorage, setNotesLocalStorage };
}
