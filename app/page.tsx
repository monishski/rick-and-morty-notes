'use client';

import { useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';

import { useGetAllCharactersQuery } from '@/api/endpoints/get_all_characters';
import { Grid, Input } from '@/components/atoms';
import { Card, CardSkeleton } from '@/components/molecules';
import { useDebounce, useObserver } from '@/hooks';

export default function Home(): JSX.Element {
  const [searchQuery, setSearchQuery] = useState('');
  //REF: https://github.com/TanStack/query/issues/293#issuecomment-1308442417
  const debouncedSearchQuery = useDebounce({ value: searchQuery, delay: 200 });

  const { data, isFetching, isLoading, isError, isSuccess, fetchNextPage, hasNextPage } = useGetAllCharactersQuery({
    name: debouncedSearchQuery ? debouncedSearchQuery.trim() : undefined,
  });

  const { ref: targetRef } = useObserver<HTMLDivElement>({ enabled: hasNextPage, cb: fetchNextPage });

  const characters = data?.pages.flatMap(({ results }) => results);

  return (
    <main>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20, padding: 24, width: '100%' }}>
        <Input
          iconJsx={<IoSearchOutline size={16} />}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for a character"
          handleValueReset={() => setSearchQuery('')}
        />
        <Grid>
          {isError && <p>Error!</p>}
          {isSuccess &&
            characters?.map((character, idx) => {
              const { id, name, image, status, gender, species, type } = character;
              const key = `character-card-${id}-${idx}`;

              return <Card {...{ key, id, name, image, status, gender, species, type }} />;
            })}
          {(isFetching || isLoading) &&
            new Array(20).fill(null).map((_, idx) => <CardSkeleton key={`character-card-skeleton-${idx}`} />)}
          <div ref={targetRef} />
        </Grid>
      </div>
    </main>
  );
}
