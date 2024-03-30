"use client";

import { MovieResponse, TMDbConfiguration } from "@/lib/type/types";
import React from "react";
import TitleSection from "../title-section";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { formatFloat } from "@/lib/utils";
import { Star } from "lucide-react";

interface RecommendationProps {
  data: MovieResponse;
  config: TMDbConfiguration;
}
export default function Recommendation({ data, config }: RecommendationProps) {
  const baseUrl = config.images.base_url;
  const backdropSize = config.images.backdrop_sizes[2];
  return (
    <section id="recommendations">
      <TitleSection>Recommendations</TitleSection>
      {data.total_results == 0 ? (
        <h1>We cannot provide a recommendation based on that movie yet.</h1>
      ) : (
        <Swiper
          slidesPerView={2}
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
          }}
          spaceBetween={10}
        >
          {data.results.map((movie) => (
            <SwiperSlide key={movie.id}>
              <a href={`/movie/${movie.id}`}>
                <img
                  src={baseUrl + backdropSize + movie.backdrop_path}
                  alt={movie.title}
                  className="rounded-md"
                />
                <div className="flex gap-2">
                  <p className="text-sm grow">{movie.title}</p>
                  <p className="text-sm flex h-max items-center gap-1">
                    <Star size={14} color="orange" fill="orange" />
                    {formatFloat(movie.vote_average)}
                  </p>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
}
