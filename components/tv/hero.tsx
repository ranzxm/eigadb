import { WatchProviderID, TMDbConfiguration } from "@/lib/type/types";
import { TVData } from "@/lib/type/tv-types";
import React from "react";
import "./hero.css";
import { formatFloat } from "@/lib/utils";
import { StarIcon } from "lucide-react";

interface HeroTVAppProps {
  tv: TVData;
  config: TMDbConfiguration;
  watchProvider: WatchProviderID;
}

export default function HeroTVApp({ tv, config, watchProvider }: HeroTVAppProps) {
  const baseUrl = config.images.base_url;
  const backdropSize = config.images.backdrop_sizes[2];
  const posterSize = config.images.poster_sizes[3];
  const providerSize = config.images.logo_sizes[0];
  const posterUrl = `${baseUrl}${posterSize}${tv.poster_path}`;
  const backdropUrl = `${baseUrl}${backdropSize}${tv.backdrop_path}`;
  const availableProvider =
    watchProvider && (watchProvider.flatrate || watchProvider.rent || watchProvider.buy);
  const providerName = watchProvider && availableProvider[0].provider_name;
  const providerPath = watchProvider && availableProvider[0].logo_path;
  const providerUrl = `${baseUrl}${providerSize}${providerPath}`;
  const tagline = tv.tagline || "Unknown Tagline";
  const releaseYear = tv.first_air_date?.slice(0, 4);

  return (
    <section id="herotv">
      <div className="w-full h-[595px] relative bg-cyan-800">
        <div
          className="w-full h-full bg-center bg-cover"
          style={{
            backgroundImage: `url(${backdropUrl})`,
          }}
        >
          <div className="w-full h-full bg-gradient-to-t translate-y-1 from-black"></div>
        </div>
        <div id="tvinfo" className="w-full bottom-0 absolute">
          <div className="container mx-auto px-4 sm:px-0 flex flex-col items-center ">
            <div
              id="posterimage"
              className="group/posterpath w-44 sm:w-60 rounded-md overflow-hidden relative duration-200"
            >
              <img src={posterUrl} alt={tv.name} className="w-full" />
              {watchProvider && (
                <div className="absolute -bottom-16 group-hover/posterpath:bottom-0 duration-200 w-full bg-cyan-800">
                  <a href={watchProvider.link} className="flex items-center">
                    <img src={providerUrl} alt="" />
                    <p className="grow text-center text-sm">Watch on {providerName}</p>
                  </a>
                </div>
              )}
            </div>
            <h1 className="text-xl font-semibold text-center mt-4">
              {tv.name} <span className="font-normal opacity-80">({releaseYear})</span>
            </h1>
            <p className="italic opacity-80 text-sm text-center">❝{tagline}❞</p>
            <p className="flex items-center gap-1">
              <span>
                <StarIcon size={16} fill="orange" color="orange" />
              </span>
              {formatFloat(tv.vote_average)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
