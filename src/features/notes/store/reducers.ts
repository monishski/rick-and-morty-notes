import type { AddNotePayload, AddNotesPayload, DeleteNotePayload, State, UpdateNotePayload } from './types';

export const addNotesReducer = (state: State, action: AddNotesPayload): void => {
  const notes = action.payload;
  state.notes = notes;
};

export const addNoteReducer = (state: State, action: AddNotePayload): void => {
  const note = action.payload;
  state.notes.push(note);
};

export const updateNoteReducer = (state: State, action: UpdateNotePayload): void => {
  const { id, title, description, updatedAt } = action.payload;

  const noteIndex = state.notes.findIndex((note) => note.id === id);

  state.notes[noteIndex].title = title;
  state.notes[noteIndex].description = description;
  state.notes[noteIndex].updatedAt = updatedAt;
};

export const deleteNoteReducer = (state: State, action: DeleteNotePayload): void => {
  const { id } = action.payload;
  state.notes = state.notes.filter((note) => note.id !== id);
};
