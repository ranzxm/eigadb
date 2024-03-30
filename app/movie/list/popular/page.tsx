import PopularMovieApp from "@/components/movies/list/popular/app";
import { getPopularMovies, getTMDBConfiguration } from "@/lib/data";
import React from "react";

interface PopularPageProps {
  searchParams: {
    page: string;
  };
}

export async function generateMetadata() {
  return {
    title: "Popular Movies",
  };
}

export default async function PopularPage({ searchParams }: PopularPageProps) {
  const page = Number(searchParams.page) || 1;
  const popularMovies = await getPopularMovies(page);
  const config = await getTMDBConfiguration();

  const data = {
    movies: popularMovies,
    config,
    page,
  };
  return <PopularMovieApp data={data} />;
}
