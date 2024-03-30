import { KeywordTV } from "@/lib/type/types";
import React from "react";
import TitleSection from "../title-section";

interface KeywordsProps {
  data: KeywordTV;
}

export default function Keywords({ data }: KeywordsProps) {
  return (
    <section id="keywords">
      <TitleSection>Keywords</TitleSection>
      <div className="flex flex-wrap gap-2">
        {data.results.map((keyword) => (
          <a href="#" key={keyword.id}>
            <span className="text-sm bg-cyan-800 rounded px-2 py-1">{keyword.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
