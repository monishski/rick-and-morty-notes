'use client';

import type { FC } from 'react';
import { NotebookPen } from 'lucide-react';

import { useAppSelector } from '@/store';
import { Spinner } from '@/components/atoms';

import { selectNoteByCharacterId } from '../../store/selectors';
import { AddNoteButton } from '../AddNoteButton';
import { DeleteNoteButton } from '../DeleteNoteButton';
import styles from './Note.module.css';

interface NoteProps {
  characterId: number;
}

export const Note: FC<NoteProps> = ({ characterId }) => {
  const note = useAppSelector((state) => selectNoteByCharacterId(state, characterId));

  const notes = useAppSelector((state) => state.notes.notes);
  const notesLoading = notes === null;

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <NotebookPen size={16} />

        <h2>Note</h2>

        {!note && !notesLoading && <AddNoteButton {...{ characterId }} />}

        {!!note && !notesLoading && <DeleteNoteButton id={note.id} />}

        {notesLoading && <Spinner />}
      </div>

      {!note && !notesLoading && <p style={{ fontSize: '12px' }}>No note found.</p>}

      {note && (
        <div className={styles.card}>
          <h4>{note.title}</h4>

          <p>{note.description}</p>
        </div>
      )}
    </div>
  );
};
