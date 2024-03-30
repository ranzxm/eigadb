import { Genre } from "@/lib/type/types";
import React from "react";
import TitleSection from "../title-section";

interface GenresProps {
  data: Genre[];
}

export default function Genres({ data }: GenresProps) {
  return (
    <section id="genres">
      <TitleSection>Genres</TitleSection>
      <div className="flex flex-wrap gap-2">
        {data.map((genre) => (
          <a
            href={`/genre/${genre.id}/movie`}
            key={genre.id}
            className=" border-cyan-800 border-2 rounded px-2 py-1 hover:bg-cyan-800 duration-200"
          >
            {genre.name}
          </a>
        ))}
      </div>
    </section>
  );
}
