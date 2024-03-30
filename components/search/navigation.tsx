import { MovieResponse, TVShowResponse } from "@/lib/type/types";
import Link from "next/link";
import React, { useEffect } from "react";

interface NavigationProps {
  setMediaType: React.Dispatch<React.SetStateAction<"tv" | "movie">>;
  mediaType: "tv" | "movie";
  data: {
    movie: MovieResponse;
    tv: TVShowResponse;
  };
  currentPage: number;
  query: string;
}

export default function Navigation({
  setMediaType,
  mediaType,
  data,
  query,
  currentPage,
}: NavigationProps) {
  const totalResultsMovie = data.movie.total_results;
  const totalResultsTV = data.tv.total_results;
  const totalPageMovie = data.movie.total_pages;
  const totalpageTV = data.tv.total_pages;

  const handleActiveMedia = () => {
    if (totalResultsMovie > 0) {
      return setMediaType("movie");
    } else if (totalResultsTV > 0) {
      return setMediaType("tv");
    }
  };

  useEffect(() => {
    handleActiveMedia();
    console.log(currentPage);
  }, []);

  return (
    <section id="navigation">
      <div className="container mx-auto px-4 sm:px-0">
        <div className={`w-full flex items-center justify-between gap-2`}>
          <div id="navigationmedia" className="grow">
            <div className="flex gap-2 justify-end">
              <button
                className={`${
                  mediaType == "movie" && totalResultsMovie > 0 && "bg-cyan-800"
                } px-3 py-1 border-cyan-800 border duration-200 text-sm sm:text-base disabled:opacity-70`}
                onClick={() => setMediaType("movie")}
                disabled={totalResultsMovie == 0 || data.movie.total_pages < currentPage}
              >
                Movies ({totalResultsMovie})
              </button>
              <button
                className={`${
                  mediaType == "tv" && totalResultsTV > 0 && "bg-cyan-800"
                } px-3 py-1 border-cyan-800 border duration-200 text-sm sm:text-base disabled:opacity-70`}
                onClick={() => setMediaType("tv")}
                disabled={totalResultsTV == 0 || data.tv.total_pages < currentPage}
              >
                TV Series ({totalResultsTV})
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
