'use client';

import type { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaRobot, FaSkull } from 'react-icons/fa';
import { HiOutlineStatusOnline } from 'react-icons/hi';
import { RiAliensFill } from 'react-icons/ri';

import type { Character } from '@/api/types';
import { Badge } from '@/components/atoms';

import styles from './Card.module.css';

type CardProps = Pick<Character, 'id' | 'name' | 'image' | 'status' | 'gender' | 'species' | 'type'>;

export const Card: FC<CardProps> = ({ id, name, image, status, gender, species, type }) => {
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
      </div>
    </Link>
  );
};
