'use client';

import { useGetAllCharactersQuery } from '@/api/endpoints/get_all_characters';
import { Grid } from '@/components/atoms';
import { Card } from '@/components/molecules';

export default function Home(): JSX.Element {
  const { data: characters, isFetching, isLoading, isError, isSuccess } = useGetAllCharactersQuery();
  const skeleton = isFetching || isLoading;

  return (
    <main>
      <div style={{ width: '100%' }}>
        <Grid>
          {isError && <p>Error!</p>}
          {isSuccess &&
            characters?.results.map((character, idx) => {
              const { id, name, image, status, gender, species, type } = character;
              const key = `character-card-${id}-${idx}`;

              return <Card {...{ key, id, name, image, status, gender, species, type, skeleton }} />;
            })}
        </Grid>
      </div>
    </main>
  );
}
