import { TMDbConfiguration, TVShow, TVShowResponse } from "@/lib/type/types";
import React from "react";
import HeadingGenre from "./heading";
import TVResultsByGenre from "./tv-results-by-genre";

interface GenreTVAppProps {
  data: {
    genreId: number | undefined;
    genreName: string | undefined;
    tv: TVShowResponse;
    config: TMDbConfiguration;
    randomTV: TVShow;
    page: number;
  };
}

export default function GenreTVApp({ data }: GenreTVAppProps) {
  const genreName = data.genreName;
  const genreId = data.genreId;
  const totalResults = data.tv.total_results;
  const tvResponse = data.tv;
  const randomTV = data.randomTV;
  const config = data.config;

  return (
    <div id="genretvapp">
      <HeadingGenre
        genreName={genreName}
        totalResults={totalResults}
        randomTV={randomTV}
        config={config}
      />
      <TVResultsByGenre
        tvResponse={tvResponse}
        config={config}
        currentPage={data.page}
        genreId={genreId}
      />
    </div>
  );
}
