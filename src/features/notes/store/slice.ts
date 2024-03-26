import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { addNoteReducer, addNotesReducer, deleteNoteReducer, updateNoteReducer } from './reducers';
import { initialState } from './state';
import type { State } from './types';

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    //Data
    addNotes: addNotesReducer,
    addNote: addNoteReducer,
    updateNote: updateNoteReducer,
    deleteNote: deleteNoteReducer,

    //UI
    toggleAddModalVisible: (state): void => {
      state.addNoteModalVisible = !state.addNoteModalVisible;
    },
    setAddNoteModalMetadata: (state, action: PayloadAction<State['addNoteModalMetadata']>) => {
      state.addNoteModalMetadata = action.payload;
    },
  },
});

export const { addNotes, addNote, updateNote, deleteNote, toggleAddModalVisible, setAddNoteModalMetadata } =
  notesSlice.actions;

export const notesReducer = notesSlice.reducer;
