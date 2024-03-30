import { MovieResponse, TVShowResponse } from "@/lib/type/types";
import Link from "next/link";
import React from "react";

interface PaginationProps {
  mediaType: "tv" | "movie";
  query: string;
  currentPage: number;
  movies: MovieResponse;
  tv: TVShowResponse;
}

export default function Pagination({ mediaType, query, currentPage, movies, tv }: PaginationProps) {
  const totalPageMovie = movies.total_pages;
  const totalpageTV = tv.total_pages;
  return (
    <section id="pagination">
      {mediaType == "movie"
        ? totalPageMovie > 1 && (
            <div id="pagination" className="flex">
              {[...Array(totalPageMovie)].map((_, index) => (
                <Link
                  key={index}
                  className={`${
                    currentPage == index + 1 && "bg-cyan-800"
                  } px-3 py-1 border-cyan-800 border duration-200 text-sm sm:text-base hover:bg-cyan-800`}
                  href={`/search?query=${query}&page=${index + 1}`}
                >
                  {index + 1}
                </Link>
              ))}
            </div>
          )
        : totalpageTV > 1 && (
            <div id="pagination" className="flex">
              {[...Array(totalpageTV)].map((_, index) => (
                <Link
                  key={index}
                  className={`${
                    currentPage == index + 1 && "bg-cyan-800"
                  } px-3 py-1 border-cyan-800 border duration-200 text-sm sm:text-base hover:bg-cyan-800`}
                  href={`/search?query=${query}&page=${index + 1}`}
                >
                  {index + 1}
                </Link>
              ))}
            </div>
          )}
    </section>
  );
}
