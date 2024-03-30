// MOVIE

export type Movie = {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type MovieResponse = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

type ProductionCompany = {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
};

type ProductionCountry = {
  iso_3166_1: string;
  name: string;
};

type SpokenLanguage = {
  english_name: string;
  iso_639_1: string;
  name: string;
};

export type MovieDetails = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
  } | null;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

// CONFIGURATIONS

type ImageConfiguration = {
  base_url: string;
  secure_base_url: string;
  backdrop_sizes: string[];
  logo_sizes: string[];
  poster_sizes: string[];
  profile_sizes: string[];
  still_sizes: string[];
};

type ChangeKeys = string[];

export type TMDbConfiguration = {
  images: ImageConfiguration;
  change_keys: ChangeKeys;
};

// GENRE

export type Genre = {
  id: number;
  name: string;
};

export type GenresData = {
  genres: Genre[];
};

// trending
export interface ITrending {
  adult: boolean;
  backdrop_path: string | null;
  id: number;
  name?: string;
  title?: string;
  original_language: string;
  original_name?: string;
  original_title?: string;
  overview: string;
  poster_path: string | null;
  media_type: "movie" | "tv";
  genre_ids: number[];
  popularity: number;
  first_air_date?: string;
  release_date?: string;
  vote_average: number;
  vote_count: number;
  origin_country?: string[];
  video?: boolean;
}

export interface TrendingResponse {
  page: number;
  results: ITrending[];
  total_pages: number;
  total_results: number;
}

// CREDITS

type CastMember = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
};

type CrewMember = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  credit_id: string;
  department: string;
  job: string;
};

export type Credits = {
  id: number;
  cast: CastMember[];
  crew: CrewMember[];
};

// Keywords

export type Keyword = {
  id: number;
  name: string;
};

export type Keywords = {
  id: number;
  keywords: Keyword[];
};

export type KeywordTV = {
  id: number;
  results: Keyword[];
};

// Languages

type Language = {
  iso_639_1: string;
  english_name: string;
  name: string;
};

export type LanguageList = Language[];

// Watch Provider

type WatchProvider = {
  logo_path: string;
  provider_id: number;
  provider_name: string;
  display_priority: number;
};

export type WatchProviderID = {
  link: string;
  flatrate: WatchProvider[];
  rent: WatchProvider[];
  buy: WatchProvider[];
};

// TV SHOWs

export type TVShow = {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  first_air_date: string;
  name: string;
  vote_average: number;
  vote_count: number;
};

export type TVShowResponse = {
  page: number;
  results: TVShow[];
  total_pages: number;
  total_results: number;
};
