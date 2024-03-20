'use client';

import { useGetAllCharactersQuery } from '@/api/endpoints/get_all_characters';
import { Grid } from '@/components/atoms';
import { Card, CardSkeleton } from '@/components/molecules';
import { useObserver } from '@/hooks';

export default function Home(): JSX.Element {
  const { data, isFetching, isLoading, isError, isSuccess, fetchNextPage, hasNextPage } = useGetAllCharactersQuery();

  const { ref: targetRef } = useObserver<HTMLDivElement>({ enabled: hasNextPage, cb: fetchNextPage });

  const characters = data?.pages.flatMap(({ results }) => results);

  return (
    <main>
      <div style={{ width: '100%' }}>
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
