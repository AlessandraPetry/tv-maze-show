import { Episode, Show } from '@/types';
import { createStore } from 'zustand/vanilla'

type SeasonEpisode = Pick<Episode, 'id' | 'name'>;
type SeasonEpisodesReturn = Record<number, SeasonEpisode[]>

export type Store = {
  episodes: Episode[];
  show?: Show;
  setEpisodes: (episodes: Episode[]) => void;
  setShow: (show: Show) => void;
  getEpisode: (episodeId: number) => Episode | undefined;
  getSeasonEpisodes: () => SeasonEpisodesReturn;
}

export const useStore = createStore<Store>((set, get) => ({
  episodes: [],
  show: undefined,
  setEpisodes: (episodes) => set(() => ({ episodes })),
  setShow: (show) => set(() => ({ show })),
  getEpisode: (episodeId: number) => {
    return get().episodes.find(episode => episode.id === episodeId)
  },
  getSeasonEpisodes: () => {
    const seasonEpisodes =  get().episodes.reduce((acc, episode) => {
      const { season } = episode;
      if (!acc[season]) {
        acc[season] = [];
      }
      acc[season].push({id: episode.id, name: episode.name});
      return acc;
    }, {} as SeasonEpisodesReturn);
    return seasonEpisodes;
  }
}));
