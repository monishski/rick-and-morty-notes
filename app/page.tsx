import { getAllCharacters } from '@/api/endpoints';
import { Card } from '@/components/molecules';

export default async function Home(): Promise<JSX.Element> {
  const characters = await getAllCharacters();

  return (
    <main>
      <div style={{ display: 'flex', gap: 8, flex: 'wrap', padding: 8 }}>
        {characters?.results.map((character) => {
          const { id, name, image, status, gender, species, type } = character;
          return <Card key={id} {...{ id, name, image, status, gender, species, type }} />;
        })}
      </div>
    </main>
  );
}
