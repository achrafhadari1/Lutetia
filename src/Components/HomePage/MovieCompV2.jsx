import React from "react";
import { Link } from "react-router-dom";

export const MovieCompV2 = ({ movie }) => {
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
              <span className="font-semibold">{movie.vote_average * 10}% </span>
            </div>
            <div className="flex items-center">
              <img src="imdb.png" alt="IMDB" className="w-10 h-4 mr-1" />
              <span className="font-semibold">{movie.vote_average}</span>
            </div>
          </div>

          <div className="text-lg font-light mb-2">
            {movie.genres.map((genre) => genre.name).join(", ")} |{" "}
            {movie.adult ? "18+" : "All ages"}
          </div>
          <p className="mb-4">{movie.overview}</p>

          <div className="flex items-center gap-4 mb-4">
            <div className="video-wrapper cursor-pointer">
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
    </div>
  );
};
