"use client";

import { MovieResponse, TMDbConfiguration, TVShowResponse } from "@/lib/type/types";
import React from "react";
import SearchBar from "./search-bar";
import Navigation from "./navigation";
import SearchResults from "./search-results";

interface SearchAppProps {
  data: {
    movies: MovieResponse;
    tv: TVShowResponse;
    config: TMDbConfiguration;
    query: string;
    page: number;
  };
}

export default function SearchApp({ data }: SearchAppProps) {
  const [mediaType, setMediaType] = React.useState<"movie" | "tv">("movie");
  const dataNavigation = {
    movie: data.movies,
    tv: data.tv,
  };

  return (
    <div className="serachapp">
      <SearchBar query={data.query} />
      <Navigation
        mediaType={mediaType}
        setMediaType={setMediaType}
        data={dataNavigation}
        currentPage={data.page}
        query={data.query}
      />
      <SearchResults data={data} mediaType={mediaType} setMediaType={setMediaType} />
    </div>
  );
}
