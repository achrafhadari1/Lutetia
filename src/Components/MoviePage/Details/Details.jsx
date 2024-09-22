import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { Cast } from "./Cast";

export const Details = ({ id }) => {
  const [movieDetails, setMovieDetails] = useState(null);
  const castContainerRef = useRef(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const [movieResponse, creditsResponse] = await Promise.all([
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
        ]);

        const movie = movieResponse.data;
        const genreNames = movie.genres.map((genre) => genre.name).join(", ");

        const cast = creditsResponse.data.cast.map((actor) => ({
          name: actor.name,
          character: actor.character,
          profilePath: actor.profile_path,
        }));

        const movieDetails = {
          originalLanguage: movie.original_language,
          genres: genreNames,
          releaseDate: movie.release_date,
          runtime: movie.runtime,
          posterPath: movie.poster_path,
          cast: cast,
        };
        console.log(movieDetails);
        setMovieDetails(movieDetails);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  const handleMouseDown = (e) => {
    const container = castContainerRef.current;
    container.isDown = true;
    container.startX = e.pageX - container.offsetLeft;
    container.scrollLeft = container.scrollLeft;
  };

  const handleMouseLeave = () => {
    const container = castContainerRef.current;
    container.isDown = false;
  };

  const handleMouseUp = () => {
    const container = castContainerRef.current;
    container.isDown = false;
  };

  const handleMouseMove = (e) => {
    const container = castContainerRef.current;
    if (!container.isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - container.startX) * 0.3; // Adjust this multiplier to slow down the dragging
    container.scrollLeft = container.scrollLeft - walk;
  };

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-between bg-white text-black">
      <div className="w-8/12 details-res-1">
        <div className="w-3/4 details-res-2 ml-auto mr-28">
          <div className="w-3/4 text-left mb-10 pt-10 text-7xl font-semibold">
            Details
          </div>
          <div className=" details-res-3 flex justify-between items-center">
            <div className="text-5xl font-medium">Original Language</div>
            {movieDetails.originalLanguage == "en" ? (
              <div className="text-xl">English</div>
            ) : (
              <div className="text-xl">{movieDetails.originalLanguage}</div>
            )}
          </div>
          <div className="flex justify-between items-center">
            <div className="text-5xl font-medium">Genre</div>
            <div className=" details-res-4 text-xl">{movieDetails.genres}</div>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-5xl font-medium">Release Date</div>
            <div className="text-xl">{movieDetails.releaseDate}</div>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-5xl font-medium">Runtime</div>
            <div className="text-xl">
              {Math.floor(movieDetails.runtime / 60)}h{" "}
              {movieDetails.runtime % 60}m
            </div>
          </div>
        </div>
        <div>
          <div className="w-3/4 ml-auto  mr-28 text-left mb-10 pt-10 text-7xl font-semibold">
            Cast
          </div>
          <div
            ref={castContainerRef}
            className="ml-14 flex w-full draggable"
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            {movieDetails.cast.map((actor) => (
              <Cast
                key={actor.name}
                name={actor.name}
                profilePath={actor.profilePath}
              />
            ))}
          </div>
        </div>
      </div>
      <img
        src={`https://image.tmdb.org/t/p/original${movieDetails.posterPath}`}
        alt=""
        className="w-1/3 z-20 relative poster-mv object-cover"
      />
    </div>
  );
};
