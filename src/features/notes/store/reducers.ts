import type { CaseReducer } from '@reduxjs/toolkit';

import type { AddNotePayload, AddNotesPayload, DeleteNotePayload, State, UpdateNotePayload } from './types';

export const addNotesReducer: CaseReducer<State, AddNotesPayload> = (state, action): void => {
  const notes = action.payload;
  state.notes = notes;
};

export const addNoteReducer: CaseReducer<State, AddNotePayload> = (state, action) => {
  const note = action.payload;
  if (!state.notes) return { ...state, notes: [note] };
  state.notes.push(note);
};

export const updateNoteReducer: CaseReducer<State, UpdateNotePayload> = (state, action): void => {
  const { id, title, description, updatedAt } = action.payload;

  const noteIndex = state.notes.findIndex((note) => note.id === id);

  state.notes[noteIndex].title = title;
  state.notes[noteIndex].description = description;
  state.notes[noteIndex].updatedAt = updatedAt;
};

export const deleteNoteReducer: CaseReducer<State, DeleteNotePayload> = (state, action): void => {
  const { id } = action.payload;
  state.notes = state.notes.filter((note) => note.id !== id);
};
