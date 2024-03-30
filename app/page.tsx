import HomeApp from "@/components/home/app";
import {
  getGenres,
  getPopularMovies,
  getRandomMovie,
  getTMDBConfiguration,
  getTrendings,
} from "@/lib/data";

export const revalidate = 0;

export default async function Home() {
  const { movie: movieGenres, tv: tvGenres } = await getGenres();
  const popularMovies = await getPopularMovies();
  const randomMovie = await getRandomMovie();
  const config = await getTMDBConfiguration();
  const trendingDay = await getTrendings("day");
  const trendingWeek = await getTrendings("week");
  const data = {
    movie: {
      popular: popularMovies,
      random: randomMovie,
    },
    trending: {
      day: trendingDay,
      week: trendingWeek,
    },
    genres: {
      movie: movieGenres.genres,
      tv: tvGenres.genres,
    },
    config,
  };

  return <HomeApp data={data} />;
}
