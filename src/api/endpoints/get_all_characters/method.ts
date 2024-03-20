import { instance } from '../../instance';
import { getQueryString } from '../../utils';
import type { GetAllCharactersData, GetAllCharactersQuery } from './types';

export const getAllCharacters = async (query?: GetAllCharactersQuery): Promise<GetAllCharactersData> => {
  return instance.get<GetAllCharactersData>('/character' + getQueryString(query)).then((res) => res.data);
};
