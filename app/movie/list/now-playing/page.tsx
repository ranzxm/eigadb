import NowPlayingMovieApp from "@/components/movies/list/now-playing/app";
import { getNowPlayingMovies, getTMDBConfiguration } from "@/lib/data";
import React from "react";

interface NowPlayingPageProps {
  searchParams: {
    page: string;
  };
}

export async function generateMetadata() {
  return {
    title: "Now Playing Movies",
  };
}

export default async function NowPlayingPage({ searchParams }: NowPlayingPageProps) {
  const page = Number(searchParams.page) || 1;
  const nowPlayingMovies = await getNowPlayingMovies(page);
  const config = await getTMDBConfiguration();

  const data = {
    movies: nowPlayingMovies,
    config,
    page,
  };
  return <NowPlayingMovieApp data={data} />;
}
