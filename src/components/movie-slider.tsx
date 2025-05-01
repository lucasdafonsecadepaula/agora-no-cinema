"use client";

import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
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
  const [direction, setDirection] = useState(0);
  const currentMovie = movies[currentIndex];

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
  };

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + movies.length) % movies.length
    );
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
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
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          initial={{ opacity: 0, x: direction * 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction * -100 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={currentMovie.image}
            alt={`${currentMovie.title} background`}
            fill
            priority
            placeholder="blur"
            blurDataURL={currentMovie.image}
            sizes="100vw"
            quality={90}
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

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

      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="absolute bottom-12 md:bottom-24 left-4 md:left-12 lg:left-24 max-w-[90%] md:max-w-xl z-20"
        >
          <div className="p-4 md:p-6">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2 md:mb-4">
              {currentMovie.title}
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/90 mb-3 md:mb-4 lg:mb-6 line-clamp-2 sm:line-clamp-3 md:line-clamp-none">
              {currentMovie.description}
            </p>
            <div>
              {currentMovie.trailerUrl && (
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base"
                  onClick={watchTrailer}
                >
                  Assistir o Trailer
                </Button>
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-2 sm:bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-1.5 sm:space-x-2 md:space-x-3 z-20">
        {movies.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 rounded-full transition-all ${
              index === currentIndex
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </div>
  );
}
