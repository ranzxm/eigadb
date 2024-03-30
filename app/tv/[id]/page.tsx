import TVApp from "@/components/tv/app";
import {
  getCredits,
  getKeywords,
  getLanguages,
  getTMDBConfiguration,
  getTVSeries,
  getWatchProvider,
} from "@/lib/data";
import { KeywordTV } from "@/lib/type/types";
import React from "react";

interface TVPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: TVPageProps) {
  const detailTVSeries = await getTVSeries(params.id);
  const releaseYear = detailTVSeries.first_air_date.slice(0, 4);
  const finishYear = detailTVSeries.last_air_date.slice(0, 4);
  const title = detailTVSeries.name;
  return {
    title: `${title} (TV Series ${releaseYear}-${finishYear})`,
  };
}

export default async function TVPage({ params }: TVPageProps) {
  const detailTVSeries = await getTVSeries(params.id);
  const watchProvider = await getWatchProvider("tv", params.id);
  const credits = await getCredits("tv", params.id);
  const languages = await getLanguages();
  const keywords = await getKeywords("tv", params.id);
  const config = await getTMDBConfiguration();

  const data = {
    tv: detailTVSeries,
    credits,
    config,
    keywords: keywords as KeywordTV,
    languages,
    watchProvider,
  };
  return <TVApp data={data} />;
}
