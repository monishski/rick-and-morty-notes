'use client';

import { useQuery } from '@tanstack/react-query';

import { getAllCharacters } from '@/api/endpoints';
import { Grid } from '@/components/atoms';
import { Card } from '@/components/molecules';

export default function Home(): JSX.Element {
  const {
    data: characters,
    isLoading,
    isFetching,
    isSuccess,
    isError,
  } = useQuery({
    queryKey: ['ALL_CHARACTERS'],
    queryFn: () => getAllCharacters(),
    placeholderData: { info: null, results: [] },
  });

  return (
    <main>
      <div style={{ width: '100%' }}>
        <Grid>
          {(isFetching || isLoading) && <p>Loading...</p>}
          {isError && <p>Error!</p>}
          {isSuccess &&
            characters?.results.map((character) => {
              const { id, name, image, status, gender, species, type } = character;
              return <Card key={id} {...{ id, name, image, status, gender, species, type }} />;
            })}
        </Grid>
      </div>
    </main>
  );
}
