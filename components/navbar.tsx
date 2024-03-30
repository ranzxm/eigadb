"use client";

import React from "react";
import "./navbar.css";
import Dropdown from "./dropdown";
import { usePathname } from "next/navigation";

export default function Navbar() {
  if (typeof window !== "undefined") {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      const currentScrollPos = window.pageYOffset;
      const navbar = document.getElementById("navbar");
      if (navbar) {
        if (prevScrollpos > currentScrollPos) {
          navbar.style.transform = "translateY(0)";
        } else {
          navbar.style.transform = "translateY(-100%)";
        }
        prevScrollpos = currentScrollPos;
      }
    };
  }

  const options = {
    movie: [
      {
        value: "now-playing",
        label: "Now Playing",
        href: "/movie/list/now-playing",
      },
      {
        value: "popular",
        label: "Popular",
        href: "/movie/list/popular",
      },
      {
        value: "top-rated",
        label: "Top Rated",
        href: "/movie/list/top-rated",
      },
      {
        value: "upcoming",
        label: "Upcoming",
        href: "/movie/list/upcoming",
      },
    ],
    tv: [
      {
        value: "airing-today",
        label: "Airing Today",
        href: "/tv/list/airing-today",
      },
      {
        value: "on-the-air",
        label: "On The Air",
        href: "/tv/list/on-the-air",
      },
      {
        value: "popular",
        label: "Popular",
        href: "/tv/list/popular",
      },
      {
        value: "top-rated",
        label: "Top Rated",
        href: "/tv/list/top-rated",
      },
    ],
  };

  return (
    <React.Fragment>
      <nav
        id="navbar"
        className="fixed -top-[5px] w-full z-50 text-white transition-transform duration-200 transform"
      >
        <div className="h-14 bg-cyan-800 w-full drop-shadow-lg">
          <div className="container mx-auto px-4 sm:px-0 w-full flex items-center h-full">
            <div id="logo">
              <a href="/" className="select-none w-[110px]">
                <img src="/eigadblogo-white.png" alt="eigadblogo" />
              </a>
            </div>
            <div id="links" className="flex grow items-center justify-end gap-4 font-semibold">
              <div id="link" className="relative">
                <Dropdown options={options.movie} value="Movie" />
              </div>
              <div id="link" className="relative">
                <Dropdown options={options.tv} value="TV Series" />
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="spacer h-12"></div>
    </React.Fragment>
  );
}
