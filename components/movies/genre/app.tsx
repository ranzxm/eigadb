import { Movie, MovieResponse, TMDbConfiguration } from "@/lib/type/types";
import React from "react";
import HeadingGenre from "./heading";
import MovieResultsByGenre from "./movie-results-by-genre";

interface GenreMovieAppProps {
  data: {
    genreId: number | undefined;
    genreName: string | undefined;
    movies: MovieResponse;
    config: TMDbConfiguration;
    randomMovie: Movie;
    page : number
  };
}

export default function GenreMovieApp({ data }: GenreMovieAppProps) {
  const genreName = data.genreName;
  const genreId = data.genreId
  const totalResults = data.movies.total_results;
  const moviesResponse = data.movies;
  const randomMovie = data.randomMovie;
  const config = data.config;

  return (
    <div id="genremovieapp">
      <HeadingGenre
        genreName={genreName}
        totalResults={totalResults}
        randomMovie={randomMovie}
        config={config}
      />
      <MovieResultsByGenre moviesResponse={moviesResponse} config={config} currentPage={data.page} genreId={genreId}/>
    </div>
  );
}
