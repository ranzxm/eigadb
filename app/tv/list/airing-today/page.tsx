import AiringTodayTVApp from "@/components/tv/list/airing-today/app";
import { getAiringTodayTV, getTMDBConfiguration } from "@/lib/data";
import React from "react";

interface AiringTodayPageProps {
  searchParams: {
    page: string;
  };
}

export async function generateMetadata() {
  return {
    title: "Airing Today TV Series",
  };
}

export default async function AiringTodayPage({ searchParams }: AiringTodayPageProps) {
  const page = Number(searchParams.page) || 1;
  const airingTodayTV = await getAiringTodayTV(page);
  const config = await getTMDBConfiguration();

  const data = {
    tv: airingTodayTV,
    config,
    page,
  };
  return <AiringTodayTVApp data={data} />;
}
