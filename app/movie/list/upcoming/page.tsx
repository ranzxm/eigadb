import UpcomingMovieApp from "@/components/movies/list/upcoming/app";
import { getTMDBConfiguration, getUpcomingMovies } from "@/lib/data";
import React from "react";

interface UpcomingPageProps {
  searchParams: {
    page: string;
  };
}

export async function generateMetadata() {
  return {
    title: "Upcoming Movies",
  };
}

export default async function UpcomingPage({ searchParams }: UpcomingPageProps) {
  const page = Number(searchParams.page) || 1;
  const upcomingMovies = await getUpcomingMovies(page);
  const config = await getTMDBConfiguration();

  const data = {
    movies: upcomingMovies,
    config,
    page,
  };
  return <UpcomingMovieApp data={data} />;
}
