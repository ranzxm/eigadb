import { MovieResponse, TMDbConfiguration } from "@/lib/type/types";
import React from "react";
import Heading from "../components/heading";
import ResultsMovieList from "../components/results";

interface TopRatedMovieAppProps {
  data: {
    movies: MovieResponse;
    config: TMDbConfiguration;
    page: number;
  };
}

export default function TopRatedMovieApp({ data }: TopRatedMovieAppProps) {
  const randomMovie = data.movies.results[Math.floor(Math.random() * data.movies.results.length)];
  const totalResults = data.movies.total_results;
  const movieResponse = data.movies;
  const currentPage = data.page;
  const config = data.config;

  return (
    <div id="top-ratedmovieapp">
      <Heading
        title="Top Rated on Movie"
        randomMovie={randomMovie}
        totalResults={totalResults}
        config={config}
      />
      <ResultsMovieList
        moviesResponse={movieResponse}
        currentPage={currentPage}
        config={config}
        slug="top-rated"
      />
    </div>
  );
}
