import { instance } from '../instance';
import type { Character } from '../types';
import { getQueryString } from '../utils';

type GetSingleCharacterParams = Pick<Character, 'id'>;
type GetSingleCharacterQuery = Partial<Pick<Character, 'name' | 'status' | 'species' | 'type' | 'gender'>>;

export const getSingleCharacter = async (
  params: GetSingleCharacterParams,
  query?: GetSingleCharacterQuery
): Promise<Character> => {
  const { id } = params;
  return instance.get<Character>(`/character/${id}` + getQueryString(query)).then((res) => res.data);
};
