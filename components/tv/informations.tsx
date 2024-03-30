import { Credits, LanguageList } from "@/lib/type/types";
import React from "react";
import TitleSection from "../title-section";
import { formatDurationWatching, formatOriginalLanguage } from "@/lib/utils";
import { TVData } from "@/lib/type/tv-types";

interface InformationsProps {
  tv: TVData;
  credits: Credits;
  languages: LanguageList;
}
export default function Informations({ tv, credits, languages }: InformationsProps) {
  const language = formatOriginalLanguage(tv.original_language, languages);
  const infos = [
    {
      id: "original_name",
      title: "Original Name",
      value: tv.original_name,
    },
    {
      id: "status",
      title: "Status",
      value: tv.status,
    },
    {
      id: "original_language",
      title: "Original Language",
      value: language,
    },
    {
      id: "runtime_of_episode",
      title: "Runtime of Episode",
      value: formatDurationWatching(tv.episode_run_time[0]),
    },
    {
      id: "type",
      title: "Type",
      value: tv.type,
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
