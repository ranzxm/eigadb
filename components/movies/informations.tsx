import { Credits, LanguageList, MovieDetails } from "@/lib/type/types";
import React from "react";
import TitleSection from "../title-section";
import { formatCurrency, formatDurationWatching, formatOriginalLanguage } from "@/lib/utils";

interface InformationsProps {
  movie: MovieDetails;
  credits: Credits;
  languages: LanguageList;
}
export default function Informations({ movie, credits, languages }: InformationsProps) {
  const director = credits.crew?.find((crew) => crew.job === "Director");
  const language = formatOriginalLanguage(movie.original_language, languages);
  const infos = [
    {
      id: "direcotr",
      title: "Director",
      value: director?.name,
    },
    {
      id: "status",
      title: "Status",
      value: movie.status,
    },
    {
      id: "original_language",
      title: "Original Language",
      value: language,
    },
    {
      id: "duration",
      title: "Duration",
      value: formatDurationWatching(movie.runtime),
    },
    {
      id: "budget",
      title: "Budget",
      value: formatCurrency(movie.budget),
    },
    {
      id: "revenue",
      title: "Revenue",
      value: formatCurrency(movie.revenue),
    },
  ];
  return (
    <section>
      <div className="flex flex-col">
        <TitleSection>Info</TitleSection>
        <div className="flex flex-col gap-4">
          {infos.map((info) => (
            <div id={info.id} key={info.id}>
              <h1 className="font-bold">{info.title}</h1>
              <p>{info.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
