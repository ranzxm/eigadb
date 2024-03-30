"use client";

import { Credits, TMDbConfiguration } from "@/lib/type/types";
import React from "react";
import TitleSection from "../title-section";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface CastProps {
  credits: Credits;
  config: TMDbConfiguration;
}

export default function Cast({ credits, config }: CastProps) {
  const casts = credits.cast.slice(0, 10);
  const baseUrl = config.images.base_url;
  const profileSize = config.images.profile_sizes[2];

  return (
    <div>
      <TitleSection>Top Cast</TitleSection>
      <Swiper
        slidesPerView={4}
        breakpoints={{
          640: {
            slidesPerView: 5,
          },
          768: {
            slidesPerView: 7,
          },
        }}
        spaceBetween={10}
      >
        {casts.map((cast) => (
          <SwiperSlide key={cast.id} className="">
            <img
              src={
                cast.profile_path
                  ? `${baseUrl}${profileSize}${cast.profile_path}`
                  : "/null-profile.jpg"
              }
              alt={cast.name}
              className="rounded-sm"
            />
            <h1 className="font-semibold">{cast.name}</h1>
            <p className="opacity-80 text-sm">{cast.character}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
