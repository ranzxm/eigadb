import React from "react";
import "swiper/css";
import "./genre.css";
import { Genre as IGenre } from "@/lib/type/types";

interface GenreProps {
  data: {
    genre: {
      movie: IGenre[];
      tv: IGenre[];
    };
  };
}

export default function Genre({ data }: GenreProps) {
  const movieGenres = data.genre.movie;
  const tvGenres = data.genre.tv;
  return (
    <section id="genre">
      <div className="w-full text-center">
        <h1 className="text-2xl font-bold my-8">Genres</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4">
        <div className="w-full flex flex-col items-center space-y-4">
          <h1 className="font-bold text-lg border-b-4 border-cyan-800 w-max">Movie</h1>
          <div className="flex flex-wrap gap-4 justify-center">
            {movieGenres.map((genre) => (
              <div
                key={genre.id}
                className="border-2 border-cyan-800 md:text-base text-sm rounded-md hover:bg-cyan-800 duration-200"
              >
                <a href={`/genre/${genre.id}/movie`} className="w-full px-4 h-full py-2">
                  {genre.name}
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full flex flex-col items-center space-y-4">
          <h1 className="font-bold text-lg border-b-4 border-cyan-800 w-max">TV Series</h1>
          <div className="flex flex-wrap gap-4 justify-center">
            {tvGenres.map((genre) => (
              <div
                key={genre.id}
                className="border-2 border-cyan-800 md:text-base text-sm rounded-md hover:bg-cyan-800 duration-200"
              >
                <a href={`/genre/${genre.id}/tv`} className="w-full px-4 h-full py-2">
                  {genre.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
