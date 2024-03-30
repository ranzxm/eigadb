import PopularTVApp from "@/components/tv/list/popular/app";
import { getPopularTV, getTMDBConfiguration } from "@/lib/data";
import React from "react";

interface PopularPageProps {
  searchParams: {
    page: string;
  };
}

export async function generateMetadata() {
  return {
    title: "Popular TV Series",
  };
}

export default async function PopularPage({ searchParams }: PopularPageProps) {
  const page = Number(searchParams.page) || 1;
  const popularTV = await getPopularTV(page);
  const config = await getTMDBConfiguration();

  const data = {
    tv: popularTV,
    config,
    page,
  };
  return <PopularTVApp data={data} />;
}
