import type { Character, Pagination } from '../../types';

export const QUERY_KEY = 'ALL_CHARACTERS';

const fallbackData: Character = {
  id: null,
  name: null,
  status: null,
  species: null,
  type: null,
  gender: null,
  origin: null,
  location: null,
  image: null,
  episode: [],
  url: null,
  created: null,
};

export const placeholderData: Pagination<Character> = { info: null, results: new Array(10).fill(fallbackData) };
