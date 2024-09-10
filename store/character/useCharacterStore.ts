import { LIST_CHARACTER_KEY } from '@/constants/queryKeys';
import { getListCharacter } from '@/libs/fetcher/character';
import { useQuery } from 'react-query';

export const useCharacterStore = () => {
  const {
    data: dataListCharacter,
    isLoading,
    isError,
  } = useQuery({
    queryKey: [LIST_CHARACTER_KEY],
    queryFn: () => getListCharacter(),
  });

  return {
    dataListCharacter,
    isLoading,
    isError,
  };
};
