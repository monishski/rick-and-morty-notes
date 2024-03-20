import { getAllCharacters } from '@/api/endpoints';
import { Grid } from '@/components/atoms';
import { Card } from '@/components/molecules';

export default async function Home(): Promise<JSX.Element> {
  const characters = await getAllCharacters();

  return (
    <main>
      <div style={{ width: '100%' }}>
        <Grid>
          {characters?.results.map((character) => {
            const { id, name, image, status, gender, species, type } = character;
            return <Card key={id} {...{ id, name, image, status, gender, species, type }} />;
          })}
        </Grid>
      </div>
    </main>
  );
}
