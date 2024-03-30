import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "./swiper-hero.css";

import { EffectFade, Autoplay } from "swiper/modules";
import { Movie, TMDbConfiguration } from "@/lib/type/types";

interface SwiperHeroProps {
  data: Movie[];
  config: TMDbConfiguration;
}

export default function SwiperHero({ data, config }: SwiperHeroProps) {
  const imageBaseUrl = config.images.base_url;
  const backdropSize = config.images.backdrop_sizes[2];

  return (
    <Swiper
      pagination={true}
      modules={[EffectFade, Autoplay]}
      autoplay={{
        delay: 3000,
      }}
      loop
      effect="fade"
      className="mySwiper blur-sm"
    >
      {data.slice(0, 5).map((movie) => (
        <SwiperSlide key={movie.id}>
          <div
            className="w-full h-full bg-cover bg-no-repeat bg-center"
            style={{
              backgroundImage: `url(${imageBaseUrl}${backdropSize}${movie.backdrop_path})`,
            }}
          ></div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
