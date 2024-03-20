import { instance } from '../../instance';
import type { Character, Pagination, PaginationQuery } from '../../types';
import { getQueryString } from '../../utils';

type GetAllCharactersQuery = Partial<
  PaginationQuery & Pick<Character, 'name' | 'status' | 'species' | 'type' | 'gender'>
>;

export const getAllCharacters = async (query?: GetAllCharactersQuery): Promise<Pagination<Character>> => {
  return instance.get<Pagination<Character>>('/character' + getQueryString(query)).then((res) => res.data);
};
