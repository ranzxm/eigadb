import { MovieResponse, TMDbConfiguration, TVShowResponse } from "@/lib/type/types";
import { formatDate } from "@/lib/utils";
import React from "react";
import Pagination from "./pagination";

interface MovieResultsByGenreProps {
  moviesResponse: MovieResponse;
  config: TMDbConfiguration;
  currentPage: number;
  genreId: number | undefined;
}

export default function MovieResultsByGenre({
  moviesResponse,
  config,
  currentPage,
  genreId,
}: MovieResultsByGenreProps) {
  const movies = moviesResponse.results;
  const baseUrl = config.images.base_url;
  const backdropSize = config.images.backdrop_sizes[2];
  const posterSize = config.images.poster_sizes[2];

  return (
    <section id="searchResults">
      <div className="container mx-auto px-4 sm:px-0 py-4">
        <div id="lists" className="space-y-4">
          {movies.map((item) => (
            <div
              key={item.id}
              className="w-full h-40 sm:h-56 bg-cyan-800 rounded-md overflow-hidden relative"
            >
              <div
                id="background"
                className="w-full h-full bg-center bg-cover relative"
                style={{
                  backgroundImage: `url(${baseUrl}${backdropSize}${item.backdrop_path})`,
                }}
              >
                <div className="w-full h-full bg-black bg-opacity-60"></div>
              </div>
              <div className="w-full h-full p-2 sm:p-4 absolute top-0 flex gap-2 sm:gap-4">
                <div id="poster" className="flex-none">
                  <a href={`/movie/${item.id}`} className="h-full">
                    <img
                      src={
                        item.poster_path
                          ? `${baseUrl}${posterSize}${item.poster_path}`
                          : "/error-image.jpg"
                      }
                      alt={item.title}
                      className="rounded-md h-full"
                    />
                  </a>
                </div>
                <div id="text" className="w-full h-full flex flex-col justify-between">
                  <div>
                    <a
                      href={`/movie/${item.id}`}
                      className="line-clamp-2 text-ellipsis text-lg sm:text-2xl font-bold hover:underline"
                    >
                      {item.title}
                    </a>
                    <p className="text-sm">{formatDate(item.release_date)}</p>
                  </div>
                  <p className="text-ellipsis text-sm sm:text-base line-clamp-3 sm:line-clamp-4">
                    {item.overview}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full py-4 flex justify-center">
          <Pagination currentPage={currentPage} movies={moviesResponse} genreId={genreId} />
        </div>
      </div>
    </section>
  );
}
