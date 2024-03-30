"use client";

import {
  Genre as IGenre,
  MovieDetails,
  MovieResponse,
  TMDbConfiguration,
  TrendingResponse,
} from "@/lib/type/types";
import Hero from "./hero";
import RandomMovie from "./random-movie";
import PopularMovies from "./popular-movies";
import Trending from "./trending";
import Genre from "./genre";

interface HomeAppProps {
  data: {
    movie: {
      popular: MovieResponse;
      random: MovieDetails;
    };
    trending: {
      day: TrendingResponse;
      week: TrendingResponse;
    };
    genres: {
      movie: IGenre[];
      tv: IGenre[];
    };
    config: TMDbConfiguration;
  };
}

export default function HomeApp({ data }: HomeAppProps) {
  const genres = data.genres;
  const popular = data.movie.popular.results;
  const randomMovie = data.movie.random;
  const config = data.config;
  const trendingDay = data.trending.day.results;
  const trendingWeek = data.trending.week.results;
  return (
    <div id="homeapp">
      <Hero data={popular} config={config} />
      <div className="container mx-auto px-4 sm:px-0 space-y-4">
        <RandomMovie randomMovie={randomMovie} config={config} />

        <Trending
          data={{
            trending: {
              week: trendingWeek,
              day: trendingDay,
            },
          }}
          config={config}
        />
        <PopularMovies data={popular} config={config} />
        <Genre
          data={{
            genre: genres,
          }}
        />
      </div>
    </div>
  );
}
