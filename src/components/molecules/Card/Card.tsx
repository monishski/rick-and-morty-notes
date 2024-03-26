'use client';

import type { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { NotebookPen } from 'lucide-react';
import { FaRobot, FaSkull } from 'react-icons/fa';
import { HiOutlineStatusOnline } from 'react-icons/hi';
import { RiAliensFill } from 'react-icons/ri';

import { useAppDispatch, useAppSelector } from '@/store';
import { setUpdateNoteModalMetadata, toggleUpdateModalVisible } from '@/features/notes';
import { selectNoteByCharacterId } from '@/features/notes/store/selectors';
import type { Character } from '@/api/types';
import { Badge } from '@/components/atoms';

import styles from './Card.module.css';

type CardProps = Pick<Character, 'id' | 'name' | 'image' | 'status' | 'gender' | 'species' | 'type'>;

export const Card: FC<CardProps> = ({ id, name, image, status, gender, species, type }) => {
  const dispatch = useAppDispatch();

  const note = useAppSelector((state) => selectNoteByCharacterId(state, id));

  const handleNoteBadgeClick = (e): void => {
    e.preventDefault();
    dispatch(toggleUpdateModalVisible());
    dispatch(setUpdateNoteModalMetadata({ id: note?.id }));
  };

  return (
    <Link href={`/${id}`}>
      <div className={styles.card}>
        <div style={{ position: 'relative', width: '100%', aspectRatio: 1, borderRadius: 8, overflow: 'hidden' }}>
          <Image src={image} alt={name} fill objectFit="cover" />
        </div>
        <h2 title={name}>{name}</h2>
        <ul>
          {/* TODO: clicking on badge should select filter */}
          <Badge iconJsx={<HiOutlineStatusOnline size={12} />} title={status} subtitle="Status" />
          <Badge iconJsx={<FaRobot size={12} />} title={gender} subtitle="Gender" />
          <Badge iconJsx={<RiAliensFill size={12} />} title={species} subtitle="Species" />
          {!!type && <Badge iconJsx={<FaSkull size={12} />} title={type} subtitle="Type" />}
        </ul>
        {!!note && (
          <div
            style={{
              position: 'absolute',
              top: '14px',
              right: '14px',
              backgroundColor: 'var(--rick-and-morty-theme-slate-5xlight)',
              padding: '2px 6px',
              borderRadius: '4px',
              display: 'flex',
              gap: '4px',

              maxWidth: '120px',
              overflow: 'hidden',
            }}
            onClick={handleNoteBadgeClick}
          >
            <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
              <NotebookPen size={12} />
              <span style={{ fontSize: '12px', fontWeight: 600 }}>Note</span>
            </div>
            <span
              style={{
                fontSize: '12px',
                fontWeight: 300,
                textWrap: 'nowrap',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
              }}
            >
              · {note.title}
            </span>
          </div>
        )}
      </div>
    </Link>
  );
};
