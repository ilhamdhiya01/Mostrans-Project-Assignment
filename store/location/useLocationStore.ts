import { DATA_LOCATION_KEY } from '@/constants/queryKeys';
import { getDataLocation } from '@/libs/fetcher/location';
import { useQuery } from 'react-query';

export const useLocationStore = () => {
  const {
    data: dataLocation,
    isLoading,
    isError,
  } = useQuery({
    queryKey: [DATA_LOCATION_KEY],
    queryFn: () => getDataLocation(),
  });

  return {
    dataLocation,
    isLoading,
    isError,
  };
};
