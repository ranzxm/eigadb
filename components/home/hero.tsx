"use client";

import { Movie, TMDbConfiguration } from "@/lib/type/types";
import SwiperHero from "./swiper-hero";
import { Search } from "lucide-react";
import React from "react";

interface HeroProps {
  data: Movie[];
  config: TMDbConfiguration;
}
export default function Hero({ data, config }: HeroProps) {
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleSearchQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.location.href = `/search?query=${searchQuery}`;
  };

  return (
    <section id="hero">
      <div className="relative h-[220px] duration-150 sm:h-[210px] w-full overflow-hidden">
        <SwiperHero data={data} config={config} />
        <div className="absolute top-0 w-full h-full bg-gradient-to-b z-10 from-black opacity-80"></div>
        <div className="absolute top-1 w-full h-full bg-gradient-to-t z-10 from-black"></div>
        <div className="absolute z-10 top-0 w-full h-full flex flex-col items-center justify-center">
          <div
            id="greetings"
            className="pb-4 px-4 sm:px-0 flex flex-col items-center justify-center text-center"
          >
            <h1 className="text-white text-3xl font-bold">Hello, World!</h1>
            <p className="text-white text-sm">
              Welcome to{" "}
              <span>
                <a href="#" className="inline hover:underline">
                  EigaDB
                </a>
              </span>
              . Here you can find all of the movies and TV series that you can enjoy.{" "}
            </p>
          </div>
          <div id="form-search">
            <form onSubmit={handleSubmit}>
              <div id="form-field" className="flex gap-2">
                <input
                  type="text"
                  placeholder="Search for movies and TV series"
                  onChange={handleSearchQuery}
                  className="p-2 rounded-full w-[300px] duration-150 md:w-[600px] text-center bg-transparent border-2 outline-none"
                />
                <button
                  type="submit"
                  className="bg-cyan-800 border-2 rounded-full w-12 h-12 flex items-center justify-center"
                >
                  <Search />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
