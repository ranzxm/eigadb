import MovieApp from "@/components/movies/app";
import {
  getCredits,
  getKeywords,
  getLanguages,
  getMovie,
  getMovieRecommendations,
  getTMDBConfiguration,
  getWatchProvider,
} from "@/lib/data";
import { Keywords } from "@/lib/type/types";
import React from "react";

export const revalidate = 3600;

interface MoviePageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: MoviePageProps) {
  try {
    const movieDetails = await getMovie(params.id);
    const releaseYear = movieDetails.release_date.slice(0, 4);
    const title = movieDetails.title;
    return {
      title: `${title} (${releaseYear})`,
    };
  } catch (error) {
    return {
      title: `Page Not Found`,
    };
  }
}

export default async function MoviePage({ params }: MoviePageProps) {
  const movieDetails = await getMovie(params.id);
  const movieRecommendations = await getMovieRecommendations(params.id);
  const credits = await getCredits("movie", params.id);
  const languages = await getLanguages();
  const keywords = await getKeywords("movie", params.id);
  const config = await getTMDBConfiguration();
  const watchProvider = await getWatchProvider("movie", params.id);

  const data = {
    movie: movieDetails,
    credits,
    keywords: keywords as Keywords,
    languages,
    recommendations: movieRecommendations,
    watchProvider,
    config,
  };
  return <MovieApp data={data} />;
}
