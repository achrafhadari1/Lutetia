import React, { useState, useEffect } from "react";
import axios from "axios";

export const NextWeek = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [nextSlide, setNextSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slides, setSlides] = useState([]);
  const genreMap = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Science Fiction",
    10770: "TV Movie",
    53: "Thriller",
    10752: "War",
    37: "Western",
  };

  const filmIds = [1023922, 578]; // Define your film IDs here

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const moviePromises = filmIds.map(async (id) => {
          const [
            movieResponse,
            creditsResponse,
            videosResponse,
            imagesResponse,
          ] = await Promise.all([
            axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
              params: {
                api_key: "716d704f44b5a3eff07788f36a04aed0",
                language: "en-US",
              },
            }),
            axios.get(`https://api.themoviedb.org/3/movie/${id}/credits`, {
              params: {
                api_key: "716d704f44b5a3eff07788f36a04aed0",
              },
            }),
            axios.get(`https://api.themoviedb.org/3/movie/${id}/videos`, {
              params: {
                api_key: "716d704f44b5a3eff07788f36a04aed0",
              },
            }),
            axios.get(`https://api.themoviedb.org/3/movie/${id}/images`, {
              params: {
                api_key: "716d704f44b5a3eff07788f36a04aed0",
              },
            }),
          ]);

          const movie = movieResponse.data;
          const director = creditsResponse.data.crew.find(
            (person) => person.job === "Director"
          );

          const englishLogo = imagesResponse.data.logos.find(
            (logo) => logo.iso_639_1 === "en"
          );
          const logo = englishLogo
            ? `https://image.tmdb.org/t/p/original${englishLogo.file_path}`
            : null;

          const trailerKey =
            videosResponse.data.results.length > 0
              ? videosResponse.data.results[
                  videosResponse.data.results.length - 1
                ].key
              : null;

          const genres = movie.genres.map((genre) => genre.name);

          return {
            imageUrl: `https://image.tmdb.org/t/p/original${imagesResponse.data.backdrops[0].file_path}`,
            imageUrlVideo:
              imagesResponse.data.backdrops.length > 1
                ? `https://image.tmdb.org/t/p/original${imagesResponse.data.backdrops[1].file_path}`
                : `https://image.tmdb.org/t/p/original${imagesResponse.data.backdrops[0].file_path}`,
            videoSrc: trailerKey
              ? `https://www.youtube.com/embed/${trailerKey}?controls=0`
              : null,
            logoSrc: logo,
            originalTitle: movie.original_title,
            description: `${genres.slice(0, 1).join(", ")} film by ${
              director ? director.name : "Unknown"
            } ${new Date(movie.release_date).getFullYear()}`,
          };
        });

        const moviesWithDetails = await Promise.all(moviePromises);
        setSlides(moviesWithDetails);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  const handleSlideChange = (index) => {
    if (index !== currentSlide) {
      setNextSlide(index);
      setIsTransitioning(true);

      setTimeout(() => {
        setCurrentSlide(index);
        setIsTransitioning(false);
      }, 500);
    }
  };

  return (
    <div className="relative" style={{ overflow: "hidden" }}>
      {slides.length > 0 && (
        <img
          style={{
            filter: "blur(4px)",
            zIndex: "-1",
            position: "absolute",
            top: 0,
            left: 0,
          }}
          className={`absolute w-full h-full object-cover ${
            isTransitioning ? "fade-out" : ""
          }`}
          src={slides[currentSlide].imageUrl}
          alt=""
        />
      )}
      {isTransitioning && slides.length > 0 && (
        <img
          style={{
            zIndex: "-2",
            opacity: "0.5",
            position: "absolute",
            top: 0,
            left: 0,
            filter: "blur(4px)",
          }}
          className="absolute w-full h-full object-cover fade-in"
          src={slides[nextSlide].imageUrl}
          alt=""
        />
      )}
      <div className="font-bold text-5xl pt-10 text-center w-full">
        COMING SOON
      </div>
      <div
        className={`flex justify-center gap-20 w-full pt-24 pl-28 pr-7 coming_soon ${
          isTransitioning ? "slide-in-left " : ""
        }`}
      >
        {slides.length > 0 && (
          <div
            className={`w-1/2 h-80 relative bg-black ${
              isTransitioning ? "slide-in-left " : ""
            }`}
          >
            <img
              className={`w-full h-full opacity-45 object-cover video-image ${
                isTransitioning ? "slide-in-left " : ""
              }`}
              src={slides[currentSlide].imageUrlVideo}
              alt=""
            />
            <div className="flex absolute top-6 right-6 items-center gap-4 mb-4">
              <div className="video-wrapper w-14 h-14 cursor-pointer">
                <div className="play-button w-6 h-6 ml-1"></div>
              </div>
            </div>
          </div>
        )}
        <div className="w-1/2 flex flex-col justify-evenly">
          {slides.length > 0 && (
            <div>
              {slides[currentSlide].logoSrc ? (
                <img
                  src={slides[currentSlide].logoSrc}
                  className="w-4/5 nw-res-1"
                  alt=""
                />
              ) : (
                <div className="text-8xl font-bold">
                  {slides[currentSlide].originalTitle}
                </div>
              )}
            </div>
          )}
          {slides.length > 0 && (
            <div className="text-3xl pr-24 nextMovieName">
              <div>{slides[currentSlide].director}</div>
              <div className="pt-regular">
                {slides[currentSlide].description}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="circles-slider-next flex justify-center">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`circle-slider-next ${
              currentSlide === index ? "active" : ""
            }`}
            onClick={() => handleSlideChange(index)}
          >
            {currentSlide === index && <div className="innerCircle"></div>}
          </div>
        ))}
      </div>
    </div>
  );
};
