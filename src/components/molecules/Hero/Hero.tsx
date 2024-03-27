import type { FC } from 'react';
import Image from 'next/image';
import { FaRobot, FaSkull } from 'react-icons/fa';
import { HiOutlineStatusOnline } from 'react-icons/hi';
import { RiAliensFill } from 'react-icons/ri';

import type { Character } from '@/api/types';
import { Badge } from '@/components/atoms';

import styles from './Hero.module.css';

type HeroProps = Pick<Character, 'name' | 'image' | 'status' | 'gender' | 'species' | 'type'>;
export const Hero: FC<HeroProps> = ({ name, image, status, gender, species, type }) => {
  return (
    <div>
      <div style={{ position: 'relative' }}>
        <div className={styles['hero-bg']} />

        <div className={styles['img-positioner']}>
          <div className={styles['img-wrapper']}>
            <Image src={image} alt={name} fill objectFit="cover" />
          </div>
        </div>
      </div>

      <div className={styles.info}>
        <h2 title={name}>{name}</h2>

        <div className={styles.badges}>
          <Badge iconJsx={<HiOutlineStatusOnline size={12} />} title={status} subtitle="Status" />
          <Badge iconJsx={<FaRobot size={12} />} title={gender} subtitle="Gender" />
          <Badge iconJsx={<RiAliensFill size={12} />} title={species} subtitle="Species" />
          {!!type && <Badge iconJsx={<FaSkull size={12} />} title={type} subtitle="Type" />}
        </div>
      </div>
    </div>
  );
};
