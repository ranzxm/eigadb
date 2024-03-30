import { TMDbConfiguration, TVShowResponse } from "@/lib/type/types";
import React from "react";
import Heading from "../components/heading";
import ResultTVList from "../components/results";

interface TopRatedTVAppProps {
  data: {
    tv: TVShowResponse;
    config: TMDbConfiguration;
    page: number;
  };
}

export default function TopRatedTVApp({ data }: TopRatedTVAppProps) {
  const randomTV = data.tv.results[Math.floor(Math.random() * data.tv.results.length)];
  const totalResults = data.tv.total_results;
  const tvResponse = data.tv;
  const currentPage = data.page;
  const config = data.config;

  return (
    <div id="topratedtvapp">
      <Heading
        title="Top Rated on TV Series"
        randomTV={randomTV}
        totalResults={totalResults}
        config={config}
      />
      <ResultTVList
        tvResponse={tvResponse}
        currentPage={currentPage}
        config={config}
        slug="top-rated"
      />
    </div>
  );
}
