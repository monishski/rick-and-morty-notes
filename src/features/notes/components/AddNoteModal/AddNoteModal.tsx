'use client';

import { useState, type FC } from 'react';
import { NotebookPen } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';

import { useAppDispatch, useAppSelector } from '@/store';
import { Modal } from '@/components/atoms';

import { addNote, setAddNoteModalMetadata, toggleAddModalVisible } from '../../store';
import { NoteForm } from '../NoteForm';

export const AddNoteModal: FC = () => {
  const dispatch = useAppDispatch();

  const modalVisible = useAppSelector((state) => state.notes.addNoteModalVisible);
  const modalMetadata = useAppSelector((state) => state.notes.addNoteModalMetadata);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // const [error, setError] = useState();

  const handleSubmit = (e): void => {
    e.preventDefault();

    const id = uuidv4();
    const date = new Date().toISOString();
    const { characterId } = modalMetadata;

    const note = { id, title, description, characterId, createdAt: date, updatedAt: date };

    dispatch(addNote(note));

    handleModalReset();
  };

  const handleModalReset = (): void => {
    dispatch(toggleAddModalVisible());
    dispatch(setAddNoteModalMetadata(null));

    setTitle('');
    setDescription('');
  };

  return (
    <Modal visible={modalVisible} handleClose={handleModalReset}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, minWidth: '250px' }}>
        <div style={{ display: 'flex', flexDirection: 'row', gap: 8, alignItems: 'center' }}>
          <NotebookPen size={20} />
          <h2 style={{ fontSize: 20 }}>Add Note</h2>
        </div>

        <NoteForm
          {...{ title, description, handleSubmit }}
          handleTitleChange={(title) => setTitle(title)}
          handleDescriptioChange={(description) => setDescription(description)}
        />
      </div>
    </Modal>
  );
};
