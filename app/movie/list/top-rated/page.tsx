import TopRatedMovieApp from "@/components/movies/list/top-rated/app";
import { getTMDBConfiguration, getTopRatedMovies } from "@/lib/data";
import React from "react";

interface TopRatedPageProps {
  searchParams: {
    page: string;
  };
}

export async function generateMetadata() {
  return {
    title: "Top Rated Movies",
  };
}

export default async function TopRatedPage({ searchParams }: TopRatedPageProps) {
  const page = Number(searchParams.page) || 1;
  const topRatedMovies = await getTopRatedMovies(page);
  const config = await getTMDBConfiguration();

  const data = {
    movies: topRatedMovies,
    config,
    page,
  };
  return <TopRatedMovieApp data={data} />;
}
