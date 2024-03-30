import SearchApp from "@/components/search/app";
import { getSearchQuery, getTMDBConfiguration } from "@/lib/data";
import React from "react";

export const generateMetadata = ({ searchParams }: { searchParams: { query: string } }) => {
  return {
    title: `${searchParams.query}`,
  };
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { query: string; page?: string };
}) {
  const { movies, tv } = await getSearchQuery(searchParams.query, Number(searchParams.page) || 1);
  const config = await getTMDBConfiguration();

  const data = {
    movies,
    tv,
    config,
    query: searchParams.query,
    page: Number(searchParams.page) || 1,
  };

  return <SearchApp data={data} />;
}
