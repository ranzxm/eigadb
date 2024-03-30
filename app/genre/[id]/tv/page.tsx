import GenreTVApp from "@/components/tv/genres/app";
import { getDiscoverTVByGenre, getGenres, getTMDBConfiguration } from "@/lib/data";
import { randomNumber } from "@/lib/utils";
import React from "react";

export const revalidate = 3600;

interface GenreTVPageProps {
  params: {
    id: string;
  };
  searchParams: {
    page?: string;
  };
}

export const generateMetadata = async ({ params }: GenreTVPageProps) => {
  const { tv: tvGenre } = await getGenres();
  const findGenre = tvGenre.genres.find((genre) => genre.id === Number(params.id));

  return {
    title: `${findGenre?.name}`,
  };
};

export default async function GenreTVPage({ params, searchParams }: GenreTVPageProps) {
  const { tv: tvGenre } = await getGenres();
  const findGenre = tvGenre.genres.find((genre) => genre.id === Number(params.id));
  const tv = await getDiscoverTVByGenre(params.id, Number(searchParams.page) || 1);

  // GET RANDOM TV
  const randomPage = randomNumber(1, 500);
  const randomDiscoverTVByPage = await getDiscoverTVByGenre(params.id, randomPage);
  const randomTV = randomDiscoverTVByPage.results[Math.floor(Math.random() * tv.results.length)];

  const config = await getTMDBConfiguration();

  const data = {
    genreId: findGenre?.id,
    genreName: findGenre?.name,
    tv,
    config,
    randomTV,
    page: Number(searchParams.page) || 1,
  };

  return <GenreTVApp data={data} />;
}
