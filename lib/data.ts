import { TVData } from "./type/tv-types";
import {
  Credits,
  GenresData,
  Keywords,
  LanguageList,
  MovieDetails,
  WatchProviderID,
  MovieResponse,
  TMDbConfiguration,
  TrendingResponse,
  KeywordTV,
  TVShowResponse,
} from "./type/types";
import axios from "axios";

// MOVIE

export const getMovie = async (movieId: string) => {
  try {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${movieId}`,
      params: { language: "en-US" },
      headers: {
        accept: "application/json",
        Authorization: process.env.API_KEY_TOKEN_AUTH,
      },
    };

    const res = await axios.request(options);
    const response = res.data as MovieDetails;
    return response;
  } catch (error) {
    throw new Error("[X-0000002] Failed to fetch data");
  }
};

export const getMovieRecommendations = async (movieId: string) => {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${movieId}/recommendations`,
    params: { language: "en-US", page: "1" },
    headers: {
      accept: "application/json",
      Authorization: process.env.API_KEY_TOKEN_AUTH,
    },
  };

  const res = await axios.request(options);
  return res.data as MovieResponse;
};

export const getRandomMovie = async () => {
  const { movie: genres } = await getGenres();
  const randomPage = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
  const randomGenre = genres.genres[Math.floor(Math.random() * genres.genres.length)];

  const optionDiscover = {
    method: "GET",
    url: "https://api.themoviedb.org/3/discover/movie",
    params: {
      include_adult: "false",
      include_video: "false",
      language: "en-US",
      page: randomPage.toString(),
      sort_by: "popularity.desc",
      with_genres: randomGenre.id.toString(),
    },
    headers: {
      accept: "application/json",
      Authorization: process.env.API_KEY_TOKEN_AUTH,
    },
  };

  const responseDiscover = await axios.request(optionDiscover);
  const movies = responseDiscover.data as MovieResponse;
  const randomMovie = movies.results[Math.floor(Math.random() * movies.results.length)];

  const optionDetails = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${randomMovie.id}`,
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization: process.env.API_KEY_TOKEN_AUTH,
    },
  };

  const responseDetails = await axios.request(optionDetails);
  const randomMovieDetails = responseDetails.data as MovieDetails;
  return randomMovieDetails;
};

// TV

export const getTVSeries = async (tvSeriesId: string) => {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/tv/${tvSeriesId}`,
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization: process.env.API_KEY_TOKEN_AUTH,
    },
  };

  const res = await axios.request(options);
  const response = res.data as TVData;
  return response;
};

export const getGenres = async () => {
  const options = (type: "movie" | "tv") => {
    return {
      method: "GET",
      url: `https://api.themoviedb.org/3/genre/${type}/list`,
      params: { language: "en" },
      headers: {
        accept: "application/json",
        Authorization: process.env.API_KEY_TOKEN_AUTH,
      },
    };
  };

  try {
    const responseMovie = await axios.request(options("movie"));
    const responseTV = await axios.request(options("tv"));
    return {
      movie: responseMovie.data as GenresData,
      tv: responseTV.data as GenresData,
    };
  } catch (error) {
    throw new Error("[X-0000005] Failed to fetch data");
  }
};

export const getTMDBConfiguration = async () => {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/configuration",
    headers: {
      accept: "application/json",
      Authorization: process.env.API_KEY_TOKEN_AUTH,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data as TMDbConfiguration;
  } catch (error) {
    throw new Error("[X-1000001] Failed to fetch data");
  }
};

export const getTrendings = async (type: "day" | "week") => {
  const options = () => {
    return {
      method: "GET",
      url: "https://api.themoviedb.org/3/trending/all/" + type,
      params: { language: "en-US" },
      headers: {
        accept: "application/json",
        Authorization: process.env.API_KEY_TOKEN_AUTH,
      },
    };
  };
  try {
    if (type == "day") {
      const res = await axios.request(options());
      const response: TrendingResponse = res.data;
      return response;
    } else {
      const res = await axios.request(options());
      const response: TrendingResponse = res.data;
      return response;
    }
  } catch (error) {
    throw new Error("[X-0000006] Failed to fetch data");
  }
};

export const getCredits = async (type: "movie" | "tv", id: string) => {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/${type}/${id}/credits`,
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization: process.env.API_KEY_TOKEN_AUTH,
    },
  };

  const res = await axios.request(options);
  const response = res.data as Credits;
  return response;
};

export const getKeywords = async (type: "movie" | "tv", id: string) => {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/${type}/${id}/keywords`,
    headers: {
      accept: "application/json",
      Authorization: process.env.API_KEY_TOKEN_AUTH,
    },
  };

  const res = await axios.request(options);
  if (type == "movie") {
    return res.data as Keywords;
  } else if ((type = "tv")) {
    return res.data as KeywordTV;
  }
};

export const getLanguages = async () => {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/configuration/languages",
    headers: {
      accept: "application/json",
      Authorization: process.env.API_KEY_TOKEN_AUTH,
    },
  };

  const res = await axios.request(options);
  return res.data as LanguageList;
};

export const getWatchProvider = async (type: "tv" | "movie", id: string) => {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/${type}/${id}/watch/providers`,
    headers: {
      accept: "application/json",
      Authorization: process.env.API_KEY_TOKEN_AUTH,
    },
  };
  const res = await axios.request(options);
  const response: any = res.data;
  const provider = response.results.ID as WatchProviderID;
  return provider;
};

// SEARCH

export const getSearchQuery = async (query: string, page = 1) => {
  const movieOptions = {
    method: "GET",
    url: "https://api.themoviedb.org/3/search/movie",
    params: { query, include_adult: "false", language: "en-US", page },
    headers: {
      accept: "application/json",
      Authorization: process.env.API_KEY_TOKEN_AUTH,
    },
  };
  const tvOptions = {
    method: "GET",
    url: "https://api.themoviedb.org/3/search/tv",
    params: { query, include_adult: "false", language: "en-US", page },
    headers: {
      accept: "application/json",
      Authorization: process.env.API_KEY_TOKEN_AUTH,
    },
  };

  const resMovies = await axios.request(movieOptions);
  const resTV = await axios.request(tvOptions);

  return {
    movies: resMovies.data as MovieResponse,
    tv: resTV.data as TVShowResponse,
  };
};

// DISCOVER

// DISCOVER BY GENRE

export const getDiscoverMovieByGenre = async (genreId: string, page = 1) => {
  try {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/discover/movie",
      params: {
        include_adult: "false",
        include_video: "false",
        language: "en-US",
        page,
        sort_by: "popularity.desc",
        with_genres: genreId,
      },
      headers: {
        accept: "application/json",
        Authorization: process.env.API_KEY_TOKEN_AUTH,
      },
    };

    const res = await axios.request(options);
    return res.data as MovieResponse;
  } catch (error) {
    throw new Error("[X-0000007] Failed to fetch data");
  }
};

export const getDiscoverTVByGenre = async (genreId: string, page = 1) => {
  try {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/discover/tv",
      params: {
        include_adult: "false",
        include_video: "false",
        language: "en-US",
        page,
        sort_by: "popularity.desc",
        with_genres: genreId,
      },
      headers: {
        accept: "application/json",
        Authorization: process.env.API_KEY_TOKEN_AUTH,
      },
    };

    const res = await axios.request(options);
    return res.data as TVShowResponse;
  } catch (error) {
    throw new Error("[X-0000008] Failed to fetch data");
  }
};

// MOVIE LISTING

export const getNowPlayingMovies = async (page = 1) => {
  try {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/movie/now_playing",
      params: { language: "en-US", page },
      headers: {
        accept: "application/json",
        Authorization: process.env.API_KEY_TOKEN_AUTH,
      },
    };

    const res = await axios.request(options);
    return res.data as MovieResponse;
  } catch (error) {
    throw new Error("[X-0000009] Failed to fetch data");
  }
};

export const getUpcomingMovies = async (page = 1) => {
  try {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/movie/upcoming",
      params: { language: "en-US", page },
      headers: {
        accept: "application/json",
        Authorization: process.env.API_KEY_TOKEN_AUTH,
      },
    };

    const res = await axios.request(options);
    return res.data as MovieResponse;
  } catch (error) {
    throw new Error("[X-0000010] Failed to fetch data");
  }
};

export const getPopularMovies = async (page = 1) => {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/popular",
    params: { language: "en-US", page },
    headers: {
      accept: "application/json",
      Authorization: process.env.API_KEY_TOKEN_AUTH,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data as MovieResponse;
  } catch (error) {
    throw new Error("[X-0000001] Failed to fetch data");
  }
};

export const getTopRatedMovies = async (page = 1) => {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/top_rated",
    params: { language: "en-US", page },
    headers: {
      accept: "application/json",
      Authorization: process.env.API_KEY_TOKEN_AUTH,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data as MovieResponse;
  } catch (error) {
    throw new Error("[X-00000014] Failed to fetch data");
  }
};

// TV SERIES LISTING

export const getAiringTodayTV = async (page = 1) => {
  try {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/tv/airing_today",
      params: { language: "en-US", page },
      headers: {
        accept: "application/json",
        Authorization: process.env.API_KEY_TOKEN_AUTH,
      },
    };

    const res = await axios.request(options);
    return res.data as TVShowResponse;
  } catch (error) {
    throw new Error("[X-4000001] Failed to fetch data");
  }
};

export const getOnTheAirTV = async (page = 1) => {
  try {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/tv/on_the_air",
      params: { language: "en-US", page },
      headers: {
        accept: "application/json",
        Authorization: process.env.API_KEY_TOKEN_AUTH,
      },
    };

    const res = await axios.request(options);
    return res.data as TVShowResponse;
  } catch (error) {
    throw new Error("[X-4000002] Failed to fetch data");
  }
};

export const getPopularTV = async (page = 1) => {
  try {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/tv/popular",
      params: { language: "en-US", page },
      headers: {
        accept: "application/json",
        Authorization: process.env.API_KEY_TOKEN_AUTH,
      },
    };

    const res = await axios.request(options);
    return res.data as TVShowResponse;
  } catch (error) {
    throw new Error("[X-4000003] Failed to fetch data");
  }
};

export const getTopRatedTV = async (page = 1) => {
  try {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/tv/top_rated",
      params: { language: "en-US", page },
      headers: {
        accept: "application/json",
        Authorization: process.env.API_KEY_TOKEN_AUTH,
      },
    };

    const res = await axios.request(options);
    return res.data as TVShowResponse;
  } catch (error) {
    throw new Error("[X-4000004] Failed to fetch data");
  }
};
