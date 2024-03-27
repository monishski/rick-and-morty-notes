'use client';

import { useEffect, useState, type FC } from 'react';
import { NotebookPen } from 'lucide-react';

import { useAppDispatch, useAppSelector } from '@/store';
import { Modal } from '@/components/atoms';

import { setUpdateNoteModalMetadata, toggleUpdateModalVisible, updateNote } from '../../store';
import { selectNoteById } from '../../store/selectors';
import { NoteForm } from '../NoteForm';

export const UpdateNoteModal: FC = () => {
  const dispatch = useAppDispatch();

  const modalVisible = useAppSelector((state) => state.notes.updateNoteModalVisible);
  const modalMetadata = useAppSelector((state) => state.notes.updateNoteModalMetadata);

  const note = useAppSelector((state) => selectNoteById(state, modalMetadata?.id));

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (note) {
      setTitle(note?.title);
      setDescription(note?.description);
    }
  }, [note]);

  // const [error, setError] = useState();

  const handleSubmit = (e): void => {
    e.preventDefault();

    const updatedAt = new Date().toISOString();
    const { id } = modalMetadata;

    dispatch(updateNote({ id, title, description, updatedAt }));

    handleModalReset();
  };

  const handleModalReset = (): void => {
    dispatch(toggleUpdateModalVisible());
    dispatch(setUpdateNoteModalMetadata(null));

    setTitle('');
    setDescription('');
  };

  return (
    <Modal visible={modalVisible} handleClose={handleModalReset}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, minWidth: '250px' }}>
        <div style={{ display: 'flex', flexDirection: 'row', gap: 8, alignItems: 'center' }}>
          <NotebookPen size={20} />
          <h2 style={{ fontSize: 20 }}>Update Note</h2>
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
