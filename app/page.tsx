import { getAllCharacters } from '@/api/endpoints';

export default async function Home(): Promise<JSX.Element> {
  const characters = await getAllCharacters();

  return (
    <main>
      <div>{JSON.stringify(characters)};</div>
    </main>
  );
}
