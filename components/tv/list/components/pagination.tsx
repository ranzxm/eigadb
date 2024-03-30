import { TVShowResponse } from "@/lib/type/types";
import Link from "next/link";
import React from "react";

interface PaginationProps {
  currentPage: number;
  tv: TVShowResponse;
  slug: string;
}

export default function Pagination({ currentPage, tv, slug }: PaginationProps) {
  const totalPageTV = tv.total_pages;
  return (
    <section id="pagination">
      {totalPageTV > 1 && (
        <div id="pagination" className="flex">
          {[...Array(totalPageTV > 10 ? 10 : totalPageTV)].map((_, index) => (
            <Link
              key={index}
              className={`${
                currentPage == index + 1 && "bg-cyan-800"
              } px-3 py-1 border-cyan-800 border duration-200 text-sm sm:text-base hover:bg-cyan-800`}
              href={`/tv/list/${slug}?page=${index + 1}`}
            >
              {index + 1}
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
