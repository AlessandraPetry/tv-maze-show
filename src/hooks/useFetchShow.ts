import { Show } from '@/types';
import { useQuery } from '@tanstack/react-query';

const fetchShow = async (): Promise<Show> => {
  const response = await fetch('https://api.tvmaze.com/shows/6771?embed=episodes');
  if (!response.ok) {
    throw new Error('Failed to fetch episodes');
  }
  return response.json();
};

export const useFetchShow = () => {
  return useQuery<Show, Error>({
    queryKey: ["show"],
    queryFn: fetchShow,
  });
};
