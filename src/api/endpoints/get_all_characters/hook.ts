import { useQuery } from '@tanstack/react-query';
import type { UseQueryResult } from '@tanstack/react-query';

import type { Character, Pagination } from '../../types';
import { placeholderData, QUERY_KEY } from './config';
import { getAllCharacters } from './method';

type UseGetAllCharactersQueryReturnType = UseQueryResult<Pagination<Character>>;

export const useGetAllCharactersQuery = (): UseGetAllCharactersQueryReturnType => {
  return useQuery({
    queryKey: [QUERY_KEY],
    queryFn: () => getAllCharacters(),
    placeholderData,
  });
};
