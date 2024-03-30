type TVCreator = {
  id: number;
  credit_id: string;
  name: string;
  gender: number;
  profile_path: string | null;
};

type TVGenre = {
  id: number;
  name: string;
};

type TVLastEpisode = {
  id: number;
  name: string;
  overview: string;
  vote_average: number;
  vote_count: number;
  air_date: string;
  episode_number: number;
  episode_type: string;
  production_code: string;
  runtime: number;
  season_number: number;
  show_id: number;
  still_path: string | null;
};

type TVNextEpisode = {
  id: number;
  name: string;
  overview: string;
  vote_average: number;
  vote_count: number;
  air_date: string;
  episode_number: number;
  episode_type: string;
  production_code: string;
  runtime: number;
  season_number: number;
  show_id: number;
  still_path: string | null;
};

type TVNetwork = {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
};

type TVProductionCompany = {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
};

type TVSeason = {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string | null;
  season_number: number;
  vote_average: number;
};

type TVLanguage = {
  english_name: string;
  iso_639_1: string;
  name: string;
};

type TVProductionCountry = {
  iso_3166_1: string;
  name: string;
};

export type TVData = {
  adult: boolean;
  backdrop_path: string | null;
  created_by: TVCreator[];
  episode_run_time: number[];
  first_air_date: string;
  genres: TVGenre[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: TVLastEpisode;
  name: string;
  next_episode_to_air: TVNextEpisode;
  networks: TVNetwork[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  production_companies: TVProductionCompany[];
  production_countries: TVProductionCountry[];
  seasons: TVSeason[];
  spoken_languages: TVLanguage[];
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
};
