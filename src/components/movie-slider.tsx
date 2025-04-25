"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";

interface Movie {
  id: number;
  title: string;
  description: string;
  image: string;
  trailerUrl: string | null;
}

interface MovieSliderProps {
  movies: Movie[];
}

export function MovieSlider({ movies }: MovieSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showingTrailer, setShowingTrailer] = useState(false);
  const currentMovie = movies[currentIndex];

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + movies.length) % movies.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const watchTrailer = () => {
    setShowingTrailer(true);
  };

  const goBack = () => {
    setShowingTrailer(false);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => goToNext(),
    onSwipedRight: () => goToPrevious(),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  if (showingTrailer) {
    return (
      <div className="relative h-screen w-full overflow-hidden bg-black">
        <button
          onClick={goBack}
          className="absolute top-6 left-6 z-50 flex items-center gap-2 bg-black/50 hover:bg-black/70 text-white px-4 py-2 rounded-full transition-colors"
          aria-label="Go back"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>

        {currentMovie.trailerUrl && (
          <iframe
            src={currentMovie.trailerUrl}
            title={`${currentMovie.title} trailer`}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
    );
  }

  return (
    <div
      className="relative h-screen w-full overflow-hidden"
      {...swipeHandlers}
    >
      <div className="absolute inset-0 w-full h-full transition-opacity duration-500">
        <Image
          src={currentMovie.image}
          alt={`${currentMovie.title} background`}
          fill
          priority
          className="object-cover"
        />
      </div>

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 60%, rgba(0,0,0,0) 100%)",
        }}
      ></div>

      <button
        onClick={goToPrevious}
        className="absolute left-0 top-0 bottom-0 w-16 md:w-24 flex items-center justify-center bg-gradient-to-r from-black/30 to-transparent z-10 transition-opacity hover:opacity-100 opacity-50"
        aria-label="Previous movie"
      >
        <ChevronLeft className="w-8 h-8 md:w-12 md:h-12 text-white" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-0 top-0 bottom-0 w-16 md:w-24 flex items-center justify-center bg-gradient-to-l from-black/30 to-transparent z-10 transition-opacity hover:opacity-100 opacity-50"
        aria-label="Next movie"
      >
        <ChevronRight className="w-8 h-8 md:w-12 md:h-12 text-white" />
      </button>

      <div className="absolute bottom-12 md:bottom-24 left-4 md:left-12 lg:left-24 max-w-[90%] md:max-w-xl z-20">
        <div className="p-4 md:p-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 md:mb-4">
            {currentMovie.title}
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-white/90 mb-4 md:mb-6 line-clamp-3 md:line-clamp-none">
            {currentMovie.description}
          </p>
          <div>
            {currentMovie.trailerUrl && (
              <Button
                size="lg"
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white"
                onClick={watchTrailer}
              >
                Watch Trailer
              </Button>
            )}
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 md:space-x-3 z-20">
        {movies.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
              index === currentIndex
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
