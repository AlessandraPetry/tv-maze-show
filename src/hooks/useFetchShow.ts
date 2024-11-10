import { ShowWithEpisodes } from '@/types';
import { useQuery } from '@tanstack/react-query';

export const fetchShow = async (): Promise<ShowWithEpisodes> => {
  const response = await fetch('https://api.tvmaze.com/shows/6771?embed=episodes');
  if (!response.ok) {
    throw new Error('Failed to fetch episodes');
  }
  return response.json();
};

export const useFetchShow = (enabled = true) => {
  return useQuery<ShowWithEpisodes, Error>({
    queryKey: ["show"],
    queryFn: fetchShow,
    enabled,
  });
};
