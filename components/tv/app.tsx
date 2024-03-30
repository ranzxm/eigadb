import { TVData } from "@/lib/type/tv-types";
import {
  Credits,
  KeywordTV,
  LanguageList,
  TMDbConfiguration,
  WatchProviderID,
} from "@/lib/type/types";
import React from "react";
import Keywords from "./keywords";
import HeroTVApp from "./hero";
import Overview from "./overview";
import Genres from "./genres";
import Cast from "./cast";
import Informations from "./informations";

interface TVAppProps {
  data: {
    tv: TVData;
    config: TMDbConfiguration;
    watchProvider: WatchProviderID;
    credits: Credits;
    languages: LanguageList;
    keywords: KeywordTV;
  };
}

export default function TVApp({ data }: TVAppProps) {
  const tv = data.tv;
  const config = data.config;
  const genres = data.tv.genres;
  const credits = data.credits;
  const keywords = data.keywords;
  const languages = data.languages;
  const watchProvider = data.watchProvider;
  const overview = tv.overview;

  return (
    <div id="tvapp">
      <HeroTVApp tv={tv} config={config} watchProvider={watchProvider} />
      <div className="container mx-auto px-4 sm:px-0 grid grid-cols-1 sm:grid-cols-3 sm:gap-4">
        <div className="sm:col-span-2 w-full">
          <Overview text={overview} />
          <Genres data={genres} />
          <Cast credits={credits} config={config} />
        </div>
        <div className="w-full">
          <Informations tv={tv} credits={credits} languages={languages} />
          <Keywords data={keywords} />
        </div>
      </div>
    </div>
  );
}
