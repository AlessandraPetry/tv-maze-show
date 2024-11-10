export type Image = {
  medium: string;
  original: string;
};

type Rating = {
  average: number;
};

export type ShowWithEpisodes = Show & {
  _embedded: {
    episodes: Episode[],
  };
};

export type Show = {
  id: number;
  name: string;
  type: string;
  language: string;
  genres: string[];
  premiered: string;
  ended: string;
  rating: Rating
  image: Image;
  summary: string;
}

export type Episode = {
  id: number;
  name: string;
  season: number;
  number: number;
  image: Image;
  summary: string;
};
