import { Facebook, Github, Instagram, Twitter } from "lucide-react";
import React from "react";

export default function Footer() {
  const socialMedia = [
    {
      id: "facebook",
      link: "https://www.facebook.com/empoblastz/",
      icon: <Facebook size={20} className="group-hover/media:text-cyan-800" />,
    },
    {
      id: "github",
      link: "https://github.com/ranzxm",
      icon: <Github size={20} className="group-hover/media:text-cyan-800" />,
    },
    {
      id: "instagram",
      link: "https://www.instagram.com/frnssmmr",
      icon: <Instagram size={20} className="group-hover/media:text-cyan-800" />,
    },
    {
      id: "twitter",
      link: "https://twitter.com/frnssmmr",
      icon: <Twitter size={20} className="group-hover/media:text-cyan-800" />,
    },
  ];

  return (
    <section id="footer">
      <footer className="bg-cyan-800 w-full mt-10 py-4">
        <div className="container mx-auto px-4 sm:px-0 ">
          <div className="flex flex-col justify-between h-full">
            <div className="flex w-full items-center py-8">
              <div id="logo" className="flex-none w-28 select-none">
                <a href="/">
                  <img src="/eigadblogo-white.png" alt="" />
                </a>
                <div className="grow"></div>
              </div>
              <div id="nav" className="grow flex justify-end gap-8">
                <div id="movies">
                  <h1 className="text-lg font-bold">Movies</h1>
                  <ul>
                    <li>
                      <a href="/movie/list/now-playing">Now Playing</a>
                    </li>
                    <li>
                      <a href="/movie/list/popular">Popular</a>
                    </li>
                    <li>
                      <a href="/movie/list/top-rated">Top Rated</a>
                    </li>
                    <li>
                      <a href="/movie/list/upcoming">Upcoming</a>
                    </li>
                  </ul>
                </div>
                <div id="tv">
                  <h1 className="text-lg font-bold">TV Series</h1>
                  <ul>
                    <li>
                      <a href="/tv/list/airing-today">Airing Today</a>
                    </li>
                    <li>
                      <a href="/tv/list/on-the-air">On The Air</a>
                    </li>
                    <li>
                      <a href="/tv/list/popular">Popular</a>
                    </li>
                    <li>
                      <a href="/tv/list/top-rated">Top Rated</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div id="socialmedia" className="flex gap-4 mb-6 w-full justify-center">
              {socialMedia.map((item) => (
                <div id="media" key={item.id}>
                  <a
                    href={item.link}
                    target="_blank"
                    className="group/media w-11 h-11 bg-black flex items-center justify-center"
                  >
                    {item.icon}
                  </a>
                </div>
              ))}
            </div>
            <p className="text-center text-white">© 2023 EigaDB. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </section>
  );
}
