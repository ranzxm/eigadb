import {
  Credits,
  Keywords as IKeywords,
  LanguageList,
  MovieDetails,
  WatchProviderID,
  MovieResponse,
  TMDbConfiguration,
} from "@/lib/type/types";
import React from "react";
import HeroMovieApp from "./hero";
import Cast from "./cast";
import Overview from "./overview";
import Informations from "./informations";
import Keywords from "./keywords";
import Genres from "./genres";
import Recommendation from "./recommendations";

interface MovieAppProps {
  data: {
    movie: MovieDetails;
    config: TMDbConfiguration;
    credits: Credits;
    keywords: IKeywords;
    recommendations: MovieResponse;
    watchProvider: WatchProviderID;
    languages: LanguageList;
  };
}
export default function MovieApp({ data }: MovieAppProps) {
  const movie = data.movie;
  const genres = data.movie.genres;
  const keywords = data.keywords;
  const recommendations = data.recommendations;
  const languages = data.languages;
  const config = data.config;
  const credits = data.credits;
  const overview = data.movie.overview;
  const watchProvider = data.watchProvider;

  return (
    <div id="movieapp">
      <HeroMovieApp movie={movie} config={config} watchProvider={watchProvider} />
      <div className="container mx-auto px-4 sm:px-0 grid grid-cols-1 sm:grid-cols-3 sm:gap-4">
        <div className="sm:col-span-2 w-full">
          <Overview text={overview} />
          <Genres data={genres} />
          <Cast credits={credits} config={config} />
          <Recommendation data={recommendations} config={config} />
        </div>
        <div className="w-full">
          <Informations movie={movie} credits={credits} languages={languages} />
          <Keywords data={keywords} />
        </div>
      </div>
    </div>
  );
}
