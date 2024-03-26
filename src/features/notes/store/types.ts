import type { PayloadAction } from '@reduxjs/toolkit';

export type AddNotesPayload = PayloadAction<Notes>;
export type AddNotePayload = PayloadAction<Note>;
export type UpdateNotePayload = PayloadAction<Pick<Note, 'id' | 'title' | 'description' | 'updatedAt'>>;
export type DeleteNotePayload = PayloadAction<Pick<Note, 'id'>>;

export type Note = {
  id: string;
  title: string;
  description: string;
  characterId: number;
  createdAt: string;
  updatedAt: string;
};

export type Notes = Note[];

export interface State {
  notes: Notes;
  addNoteModalVisible: boolean;
  addNoteModalMetadata: Pick<Note, 'characterId'>;
  updateNoteModalVisible: boolean;
  updateNoteModalMetadata: Pick<Note, 'id'>;
}
