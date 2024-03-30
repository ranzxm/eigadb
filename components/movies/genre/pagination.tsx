import { MovieResponse, TVShowResponse } from "@/lib/type/types";
import Link from "next/link";
import React from "react";

interface PaginationProps {
  currentPage: number;
  movies: MovieResponse;
  genreId: number | undefined;
}

export default function Pagination({ currentPage, movies, genreId }: PaginationProps) {
  const totalPageMovie = movies.total_pages;
  return (
    <section id="pagination">
      {totalPageMovie > 1 && (
        <div id="pagination" className="flex">
          {[...Array(totalPageMovie > 10 ? 10 : totalPageMovie)].map((_, index) => (
            <Link
              key={index}
              className={`${
                currentPage == index + 1 && "bg-cyan-800"
              } px-3 py-1 border-cyan-800 border duration-200 text-sm sm:text-base hover:bg-cyan-800`}
              href={`/genre/${genreId}/movie?page=${index + 1}`}
            >
              {index + 1}
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
