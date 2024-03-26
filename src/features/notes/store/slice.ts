import { createSlice } from '@reduxjs/toolkit';

import { addNoteReducer, addNotesReducer, deleteNoteReducer, updateNoteReducer } from './reducers';
import { initialState } from './state';

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNotes: addNotesReducer,
    addNote: addNoteReducer,
    updateNote: updateNoteReducer,
    deleteNote: deleteNoteReducer,
  },
});

export const { addNotes, addNote, updateNote, deleteNote } = notesSlice.actions;

export const notesReducer = notesSlice.reducer;
