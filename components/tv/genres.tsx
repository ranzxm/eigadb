import { Genre as IGenre } from "@/lib/type/types";
import React from "react";
import TitleSection from "../title-section";

interface GenresProps {
  data: IGenre[];
}

export default function Genres({ data }: GenresProps) {
  return (
    <section id="genres">
      <TitleSection>Genres</TitleSection>
      <div className="flex flex-wrap gap-2">
        {data.map((genre) => (
          <a
            href="#"
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
