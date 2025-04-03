import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Play, X } from "lucide-react"; // Assuming you have lucide-react installed

export const MovieCompV2 = ({ movie }) => {
  const [showTrailer, setShowTrailer] = useState(false);

  const genres =
    movie?.genres?.map((genre) => genre.name).join(", ") || "Genre unavailable";
  const rating = movie?.vote_average
    ? Math.round(movie.vote_average * 10)
    : "N/A";
  const imdbRating = movie?.vote_average?.toFixed(1) || "N/A";
  const handlePlayTrailer = () => {
    if (movie?.videos?.data?.results?.length > 0) {
      setShowTrailer(true);
    } else {
      // You could add a toast notification here
      console.log("No trailer available");
    }
  };
  const trailer = movie?.videos?.data?.results?.find(
    (video) => video.site === "YouTube" && video.type === "Trailer"
  );

  console.log(movie);
  return (
    <div className="w-5/6 border-b-2 pb-4 border-white justify-around flex m-auto topWeekContainer">
      <div className="movie-info w-2/3 p-6 flex flex-col justify-between">
        <div>
          {movie.logo && (
            <div className="logo2">
              <img src={movie.logo} alt={`${movie.title} logo`} />
            </div>
          )}

          <div className="flex items-center gap-4 mb-2">
            <div className="flex items-center">
              <img
                src="rotten.png"
                alt="Rotten Tomatoes"
                className="w-4 h-4 mr-1"
              />
              <span className="font-semibold text-white">{rating}%</span>
            </div>
            <div className="flex items-center">
              <img src="imdb.png" alt="IMDB" className="w-10 h-4 mr-1" />
              <span className="font-semibold text-white">{imdbRating}</span>
            </div>
          </div>

          <div className="text-sm md:text-base font-medium mb-4 text-gray-300">
            {genres} | {movie.adult ? "18+" : "All ages"}
          </div>
          <p className="mb-6 text-gray-200 line-clamp-4 md:line-clamp-none">
            {movie.overview || "No description available."}
          </p>
          <div className="flex items-center gap-4 mb-4">
            <div
              onClick={handlePlayTrailer}
              className="video-wrapper cursor-pointer"
            >
              <div className="play-button"></div>
            </div>
            <div className="text-sm">Play Trailer</div>
          </div>

          <div className="button-4-lg mt-6">
            <div className="eff-4-lg"></div>
            <Link to={`/movie/${movie.id}`}>Check Our Schedule</Link>
          </div>
        </div>
      </div>

      <div className="moviePoster w-full">
        <img
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.title}
          className="object-contain"
          style={{
            height: "100%",
            width: "100%",
            padding: "0.7rem 0 0.7rem 0",
          }}
        />
      </div>
      {showTrailer && trailer && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden">
            <button
              onClick={() => setShowTrailer(false)}
              className="absolute top-4 right-4 z-10 bg-black/50 p-2 rounded-full hover:bg-black/80 transition-colors"
            >
              <X size={24} className="text-white" />
            </button>
            <iframe
              src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1`}
              title={`${movie.title} Trailer`}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};
