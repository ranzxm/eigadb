import TopRatedTVApp from "@/components/tv/list/top-rated/app";
import { getTMDBConfiguration, getTopRatedTV } from "@/lib/data";
import React from "react";

interface TopRatedPageProps {
  searchParams: {
    page: string;
  };
}

export async function generateMetadata() {
  return {
    title: "Top Rated TV Series",
  };
}

export default async function TopRatedPage({ searchParams }: TopRatedPageProps) {
  const page = Number(searchParams.page) || 1;
  const topRatedTV = await getTopRatedTV(page);
  const config = await getTMDBConfiguration();

  const data = {
    tv: topRatedTV,
    config,
    page,
  };
  return <TopRatedTVApp data={data} />;
}
