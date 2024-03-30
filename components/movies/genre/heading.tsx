import { Movie, TMDbConfiguration } from "@/lib/type/types";
import { formatNumber } from "@/lib/utils";
import React from "react";

interface HeadingGenreProps {
  genreName: string | undefined;
  totalResults: number;
  randomMovie: Movie;
  config: TMDbConfiguration;
}

export default function HeadingGenre({
  genreName,
  totalResults,
  randomMovie,
  config,
}: HeadingGenreProps) {
  const baseUrl = config.images.base_url;
  const backdropSize = config.images.backdrop_sizes[2];
  const randomMovieUrl =
    randomMovie.backdrop_path && `${baseUrl}${backdropSize}${randomMovie.backdrop_path}`;

  return (
    <section id="headinggenre">
      <div>
        <div
          className="w-full h-20 bg-center bg-cover relative"
          style={{
            backgroundImage: `url(${randomMovieUrl})`,
          }}
        >
          <div id="head" className="absolute w-full h-full top-0 z-10">
            <div className="container mx-auto px-4 sm:px-0 w-full h-full">
              <div className="h-full flex items-center justify-between">
                <h1 className="text-3xl font-bold">{genreName}</h1>
                <h2 className="text-xl font-bold opacity-60">
                  {formatNumber(totalResults)} movies
                </h2>
              </div>
            </div>
          </div>
          <div className="absolute top-0 bg-cyan-800/50 w-full h-full" />
        </div>
      </div>
    </section>
  );
}
