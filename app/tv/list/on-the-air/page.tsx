import OnTheAirTVApp from "@/components/tv/list/on-the-air/app";
import { getOnTheAirTV, getTMDBConfiguration } from "@/lib/data";
import React from "react";

interface OnTheAirPageProps {
  searchParams: {
    page: string;
  };
}

export async function generateMetadata() {
  return {
    title: "On The Air TV Series",
  };
}

export default async function OnTheAirPage({ searchParams }: OnTheAirPageProps) {
  const page = Number(searchParams.page) || 1;
  const onTheAirTV = await getOnTheAirTV(page);
  const config = await getTMDBConfiguration();

  const data = {
    tv: onTheAirTV,
    config,
    page,
  };
  return <OnTheAirTVApp data={data} />;
}
