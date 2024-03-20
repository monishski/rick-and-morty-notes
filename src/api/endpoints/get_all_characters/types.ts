import type { Character, Pagination, PaginationQuery } from '../../types';

export type GetAllCharactersData = Pagination<Character>;

export type GetAllCharactersQuery = Partial<
  PaginationQuery & Pick<Character, 'name' | 'status' | 'species' | 'type' | 'gender'>
>;
