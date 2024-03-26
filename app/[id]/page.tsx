import { AddNoteButton } from '@/features/notes';
import { getSingleCharacter } from '@/api/endpoints';
import { Hero } from '@/components/molecules';

export default async function CharacterPage({ params }: { params: { id: number } }): Promise<JSX.Element> {
  const { id } = params;
  const character = await getSingleCharacter({ id });

  return (
    <div>
      <Hero {...character} actionTabsJsx={<AddNoteButton characterId={id} />} />
    </div>
  );
}
