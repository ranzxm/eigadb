import GenreMovieApp from "@/components/movies/genre/app";
import { getDiscoverMovieByGenre, getGenres, getTMDBConfiguration } from "@/lib/data";
import { randomNumber } from "@/lib/utils";
import React from "react";

export const revalidate = 3600;

interface GenreMoviePageProps {
  params: {
    id: string;
  };
  searchParams: {
    page?: string;
  };
}

export const generateMetadata = async ({ params }: GenreMoviePageProps) => {
  const { movie: movieGenres } = await getGenres();
  const findGenre = movieGenres.genres.find((genre) => genre.id === Number(params.id));

  return {
    title: `${findGenre?.name}`,
  };
};

export default async function GenreMoviePage({ params, searchParams }: GenreMoviePageProps) {
  const { movie: movieGenres } = await getGenres();
  const findGenre = movieGenres.genres.find((genre) => genre.id === Number(params.id));
  const movies = await getDiscoverMovieByGenre(params.id, Number(searchParams.page) || 1);

  // GET RANDOM MOVIE
  const randomPage = randomNumber(1, 500);
  const randomDiscoverMovieByPage = await getDiscoverMovieByGenre(params.id, randomPage);
  const randomMovie =
    randomDiscoverMovieByPage.results[Math.floor(Math.random() * movies.results.length)];

  const config = await getTMDBConfiguration();

  const data = {
    genreId: findGenre?.id,
    genreName: findGenre?.name,
    movies,
    config,
    randomMovie,
    page: Number(searchParams.page) || 1,
  };

  return <GenreMovieApp data={data} />;
}
