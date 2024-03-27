import { Note } from '@/features/notes';
import { getSingleCharacter } from '@/api/endpoints';
import { Hero } from '@/components/molecules';

export default async function CharacterPage({ params }: { params: { id: number } }): Promise<JSX.Element> {
  const { id } = params;
  const character = await getSingleCharacter({ id });

  return (
    <div style={{ padding: '24px' }}>
      <Hero {...character} />

      <hr style={{ borderBottom: '0.5px solid gray', margin: '8px 0px' }} />

      <Note characterId={id} />
    </div>
  );
}
