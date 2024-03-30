import { MovieResponse, TMDbConfiguration } from "@/lib/type/types";
import React from "react";
import HeadingNowPlayingMovies from "./heading";
import NowPlayingResults from "./results-now-playing";

interface NowPlayingMovieAppProps {
  data: {
    movies: MovieResponse;
    config: TMDbConfiguration;
    page: number;
  };
}

export default function NowPlayingMovieApp({ data }: NowPlayingMovieAppProps) {
  const randomMovie = data.movies.results[Math.floor(Math.random() * data.movies.results.length)];
  const totalResults = data.movies.total_results;
  const movieResponse = data.movies;
  const currentPage = data.page;
  const config = data.config;

  return (
    <div id="nowplayingmovieapp">
      <HeadingNowPlayingMovies
        title="Now Playing on Movie"
        randomMovie={randomMovie}
        totalResults={totalResults}
        config={config}
      />
      <NowPlayingResults
        moviesResponse={movieResponse}
        currentPage={currentPage}
        config={config}
        slug="now_playing"
      />
    </div>
  );
}
