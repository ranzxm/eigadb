"use client";

import React, { useEffect, useState } from "react";
import TitleSection from "../title-section";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/scrollbar";

import "./popular-movies.css";
import { TMDbConfiguration, ITrending } from "@/lib/type/types";
import { formatFloat } from "@/lib/utils";
import { StarIcon } from "lucide-react";
import LoadingTypeOne from "../loadings";

interface TrendingProps {
  data: {
    trending: {
      day: ITrending[];
      week: ITrending[];
    };
  };
  config: TMDbConfiguration;
}

export default function Trending({ data, config }: TrendingProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [time, setTime] = useState<"day" | "week">("day");
  const trending = data.trending[time];
  const imageBaseUrl = config.images.base_url;
  const posterSize = config.images.poster_sizes[2];

  const handleTimeChange = (type: "day" | "week") => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    setTime(type);
  };

  useEffect(() => {
    handleTimeChange(time);
  }, [time]);

  return (
    <section id="popular-movies" className="pb-4">
      <div className="flex items-center justify-between">
        <TitleSection>Trendings</TitleSection>
        <div id="timeselector">
          <button
            className={
              time === "day"
                ? "bg-cyan-800 text-white px-2 py-1 duration-300"
                : "px-2 py-1 bg-transparent"
            }
            onClick={() => handleTimeChange("day")}
          >
            Today
          </button>
          <button
            className={
              time === "week"
                ? "bg-cyan-800 text-white px-2 py-1 duration-300"
                : "px-2 py-1 bg-transparent"
            }
            onClick={() => handleTimeChange("week")}
          >
            This Week
          </button>
        </div>
      </div>
      <div id="swiper" className="w-full h-[300px]">
        {loading ? (
          <div className="w-full h-full flex items-center justify-center">
            <LoadingTypeOne />
          </div>
        ) : (
          <Swiper
            scrollbar={{
              hide: true,
            }}
            slidesPerView={2}
            breakpoints={{
              640: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 5,
              },
              1280: {
                slidesPerView: 6,
              },
            }}
            spaceBetween={16}
            modules={[Scrollbar]}
            className="mySwiper"
          >
            {trending.map((movie) => (
              <SwiperSlide
                key={movie.id}
                className="rounded-md overflow-hidden select-none relative"
              >
                <a href={`${movie.media_type}/${movie.id}`} className="w-full h-full">
                  <div
                    className="w-full h-full bg-center bg-cover"
                    style={{
                      backgroundImage: `url(${imageBaseUrl + posterSize + movie.poster_path})`,
                    }}
                  />
                  <div className="absolute top-0 left-3 bg-cyan-800 px-2 py-2 rounded-b-md">
                    <p className="text-white text-sm font-semibold flex flex-col items-center">
                      <StarIcon size={14} fill="orange" color="orange" />
                      {formatFloat(movie.vote_average)}
                    </p>
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
}
