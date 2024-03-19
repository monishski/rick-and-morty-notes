import type { FC } from 'react';
import Image from 'next/image';
import { FaRobot, FaSkull } from 'react-icons/fa';
import { HiOutlineStatusOnline } from 'react-icons/hi';
import { RiAliensFill } from 'react-icons/ri';

import type { Character } from '@/api/types';
import { Badge } from '@/components/atoms';

import styles from './Card.module.css';

type CardProps = Pick<Character, 'name' | 'image' | 'status' | 'gender' | 'species' | 'type'>;

export const Card: FC<CardProps> = ({ name, image, status, gender, species, type }) => {
  return (
    <div className={styles.card}>
      <div style={{ position: 'relative', width: '100%', aspectRatio: 1, borderRadius: 8, overflow: 'hidden' }}>
        <Image src={image} alt={name} fill objectFit="cover" />
      </div>

      <h2>{name}</h2>

      <ul>
        {/* TODO: clicking on badge should select filter */}
        <Badge iconJsx={<HiOutlineStatusOnline />} title={status} subtitle="Status" />
        <Badge iconJsx={<FaRobot />} title={gender} subtitle="Gender" />
        <Badge iconJsx={<RiAliensFill />} title={species} subtitle="Species" />
        {!!type && <Badge iconJsx={<FaSkull />} title={type} subtitle="Type" />}
      </ul>
    </div>
  );
};
