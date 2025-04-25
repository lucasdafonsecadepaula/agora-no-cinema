/* eslint-disable @typescript-eslint/no-explicit-any */
import { MovieSlider } from "@/components/movie-slider";

interface Movie {
  id: number;
  title: string;
  description: string;
  image: string;
  trailerUrl: string | null;
}

// This function will be called at build time and revalidated periodically
async function getMovies(): Promise<Movie[]> {
  try {
    const today = new Date();
    const minDate = new Date(today);
    minDate.setDate(today.getDate() - 15);
    const maxDate = new Date(today);
    maxDate.setDate(today.getDate() + 15);

    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=true&language=pt-BR&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte=${
        minDate.toISOString().split("T")[0]
      }&release_date.lte=${maxDate.toISOString().split("T")[0]}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN}`,
          accept: "application/json",
        },
        next: { revalidate: 86400 }, // Revalidate once per day
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch movies");
    }

    const data = await response.json();
    const firstFiveMovies = data.results.slice(0, 5);

    const moviesWithVideos = await Promise.all(
      // I could create a type for the response, but I think it's better to add something
      // like zod and validate the response, then we can have better logging and error handling
      // but for now, let's just use any
      // and keep it simple
      firstFiveMovies.map(async (movie: any) => {
        const videosResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${movie.id}/videos?language=pt-BR`,
          {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN}`,
              accept: "application/json",
            },
          }
        );

        if (!videosResponse.ok) {
          throw new Error(`Failed to fetch videos for movie ${movie.id}`);
        }

        const videosData = await videosResponse.json();
        const trailer = videosData.results.find(
          (video: any) =>
            (video.type === "Trailer" || video.type === "Teaser") &&
            video.site === "YouTube"
        );

        return {
          id: movie.id,
          title: movie.title,
          description: movie.overview,
          image: movie.backdrop_path
            ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
            : "/placeholder.svg",
          trailerUrl: trailer
            ? `https://www.youtube.com/embed/${trailer.key}?autoplay=1&cc_lang_pref=br&showinfo=0`
            : null,
        };
      })
    );

    return moviesWithVideos;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
}

export default async function DisneyPlusLanding() {
  const movies = await getMovies();

  return <MovieSlider movies={movies} />;
}
