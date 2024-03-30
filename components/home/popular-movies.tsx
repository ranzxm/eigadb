import React from "react";
import TitleSection from "../title-section";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/scrollbar";

import "./popular-movies.css";
import { Movie, TMDbConfiguration } from "@/lib/type/types";
import { formatFloat } from "@/lib/utils";
import { StarIcon } from "lucide-react";

interface PopularMoviesProps {
  data: Movie[];
  config: TMDbConfiguration;
}

export default function PopularMovies({ data, config }: PopularMoviesProps) {
  const imageBaseUrl = config.images.base_url;
  const posterSize = config.images.poster_sizes[2];

  return (
    <section id="popular-movies" className="pb-4">
      <TitleSection>Popular Movies</TitleSection>
      <div id="swiper">
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
          className="swiperPopularMovies"
        >
          {data.map((movie) => (
            <SwiperSlide key={movie.id} className="rounded-md overflow-hidden select-none relative">
              <a href={`movie/${movie.id}`} className="w-full h-full">
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
      </div>
    </section>
  );
}
