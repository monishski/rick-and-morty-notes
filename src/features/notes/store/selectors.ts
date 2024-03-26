import { createSelector } from '@reduxjs/toolkit';

import type { RootState } from '@/store';

import type { Note, Notes } from './types';

export const selectNotes = (state: RootState): Notes => state.notes.notes;

export const selectNotesByCharacterId = createSelector([selectNotes], (notes) => {
  return notes?.reduce(
    (obj, note) => {
      const { characterId } = note;
      return { ...obj, [characterId]: note };
    },
    {} as Record<Note['characterId'], Note>
  );
});

export const selectNoteByCharacterId = createSelector(
  [selectNotesByCharacterId, (_, characterId: Note['characterId']): Note['characterId'] => characterId],
  (notes, characterId) => notes?.[characterId]
);
