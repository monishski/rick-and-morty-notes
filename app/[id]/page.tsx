import { getSingleCharacter } from '@/api/endpoints';

export default async function CharacterPage({ params }: { params: { id: number } }): Promise<JSX.Element> {
  const { id } = params;
  const character = await getSingleCharacter({ id });

  return <div>{JSON.stringify(character)}</div>;
}
