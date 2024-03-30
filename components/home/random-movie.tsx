import { Movie, MovieDetails, TMDbConfiguration } from "@/lib/type/types";
import TitleSection from "../title-section";
import { formatDurationWatching } from "@/lib/utils";

interface RandomMovieProps {
  randomMovie: MovieDetails;
  config: TMDbConfiguration;
}

export default function RandomMovie({ config, randomMovie }: RandomMovieProps) {
  const baseUrl = config.images.base_url;
  const backdropSize = config.images.backdrop_sizes[2];

  return (
    <section id="random-movie">
      <TitleSection>Random Movie</TitleSection>
      <div
        className="relative h-[300px] bg-cyan-800 w-[100%] bg-cover bg-center bg-no-repeat rounded-md"
        style={{
          backgroundImage: `url(${baseUrl}${backdropSize}${randomMovie.backdrop_path})`,
        }}
      >
        <div className="w-full h-full bg-black bg-opacity-60"></div>
        <div
          id="movie-info"
          className="absolute top-0 w-full h-full p-4 overflow-hidden flex flex-col justify-end text-wrap"
        >
          <p className="text-ellipsis line-clamp-2">
            <a
              href={`movie/${randomMovie.id}`}
              className="text-white uppercase text-2xl font-bold hover:underline"
            >
              {randomMovie.title}
            </a>
          </p>
          <p className="opacity-90 text-ellipsis line-clamp-3">{randomMovie.overview}</p>
          <div className="pt-3 text-sm flex gap-2 flex-wrap">
            <span>{randomMovie.release_date.slice(0, 4)}</span> •{" "}
            <span>
              <ul className="flex gap-1">
                {randomMovie.genres.map((genre) => (
                  <li key={genre.id}>
                    <a href={`genre/${genre.id}/movie`} className="hover:underline">
                      {genre.name}
                    </a>
                  </li>
                ))}
              </ul>
            </span>
            • <span>{formatDurationWatching(randomMovie.runtime)}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
