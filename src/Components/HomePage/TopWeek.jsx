import React, { useState, useEffect } from "react";
import axios from "axios";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { MovieComponent } from "./MovieComponent";
import { MovieCompV2 } from "./MovieCompV2";

const API_KEY = "716d704f44b5a3eff07788f36a04aed0"; // Replace with your TMDb API key

const movieIds = [933260, 1010639]; // Replace with your list of movie IDs

export const TopWeek = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const moviePromises = movieIds.map(async (movieId) => {
          const movieDetailsResponse = await axios.get(
            `https://api.themoviedb.org/3/movie/${movieId}`,
            {
              params: {
                api_key: API_KEY,
                language: "en-US",
              },
            }
          );

          const creditsResponse = await axios.get(
            `https://api.themoviedb.org/3/movie/${movieId}/credits`,
            {
              params: {
                api_key: API_KEY,
              },
            }
          );

          const imagesResponse = await axios.get(
            `https://api.themoviedb.org/3/movie/${movieId}/images`,
            {
              params: {
                api_key: API_KEY,
              },
            }
          );

          const director = creditsResponse.data.crew.find(
            (person) => person.job === "Director"
          );

          const englishLogo = imagesResponse.data.logos.find(
            (logo) => logo.iso_639_1 === "en"
          );

          const logo = englishLogo
            ? `https://image.tmdb.org/t/p/original${englishLogo.file_path}`
            : imagesResponse.data.logos.length > 0
            ? `https://image.tmdb.org/t/p/original${imagesResponse.data.logos[0].file_path}`
            : null;

          return {
            ...movieDetailsResponse.data,
            director: director ? director.name : "Unknown",
            logo: logo,
          };
        });

        const moviesWithDetails = await Promise.all(moviePromises);
        setMovies(moviesWithDetails);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="pb-7 z-20 relative ">
      <div className="flex justify-between">
        <div className="weekTitle w-5/6 m-auto ">PLAYING THIS WEEK</div>
      </div>
      <div
        className="moviesContainer mt-2 flex flex-col w-full gap-4"
        style={{ overflowX: "hidden", position: "relative" }}
      >
        {movies.map((movie, index) => (
          <div key={index} className="movieWrapper">
            <MovieCompV2 movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};
