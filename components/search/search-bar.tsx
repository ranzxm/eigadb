"use client";

import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

interface SearchBarProps {
  query: string;
}

export default function SearchBar({ query }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = React.useState(query);
  const router = useRouter();

  const handleSearchQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.location.href = `/search?query=${searchQuery}`;
  };

  return (
    <section id="search-bar">
      <div className="container mx-auto px-4 sm:px-0 w-full">
        <form onSubmit={handleSubmit}>
          <div
            id="boxinput"
            className="w-full flex my-4 gap-2 py-2 border-2 rounded-full overflow-hidden px-2"
          >
            <div id="searchbutton">
              <button
                type="submit"
                className="flex-none w-8 h-8 flex items-center justify-center bg-cyan-800 rounded-full"
                onSubmit={() => console.log("kalapa")}
              >
                <SearchIcon size={16} />
              </button>
            </div>
            <input
              type="text"
              className="w-full outline-none rounded-r-full bg-transparent"
              onChange={handleSearchQuery}
              placeholder={`search of "${query}"`}
            />
          </div>
        </form>
      </div>
    </section>
  );
}
