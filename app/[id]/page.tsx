import { getSingleCharacter } from '@/api/endpoints';
import { Hero } from '@/components/molecules/Hero';

export default async function CharacterPage({ params }: { params: { id: number } }): Promise<JSX.Element> {
  const { id } = params;
  const character = await getSingleCharacter({ id });

  return (
    <div>
      <Hero {...character} />
    </div>
  );
}
