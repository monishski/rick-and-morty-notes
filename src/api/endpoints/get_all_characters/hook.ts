import { useInfiniteQuery } from '@tanstack/react-query';
import type { InfiniteData, UseInfiniteQueryResult } from '@tanstack/react-query';

import type { Character, Pagination } from '../../types';
import { QUERY_KEY } from './config';
import { getAllCharacters } from './method';

type UseGetAllCharactersQueryReturnType = UseInfiniteQueryResult<InfiniteData<Pagination<Character>>>;

export const useGetAllCharactersQuery = (): UseGetAllCharactersQueryReturnType => {
  return useInfiniteQuery<Pagination<Character>>({
    queryKey: [QUERY_KEY],
    queryFn: ({ pageParam }) => {
      return getAllCharacters({ page: pageParam as number });
    },
    getNextPageParam: (lastPage) => {
      const nextPageUrl = lastPage.info.next;
      if (!nextPageUrl) return null;
      const [_, queryString] = nextPageUrl.split('?');
      const query = new URLSearchParams(queryString);

      const page = query.get('page');
      return JSON.parse(page);
    },
    initialPageParam: 1,
  });
};
