import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { Cast } from "./Cast";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const Details = ({ id }) => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(true);
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

        const cast = creditsResponse.data.cast
          .slice(0, 15) // Limit to first 15 cast members
          .map((actor) => ({
            id: actor.id,
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
          budget: movie.budget,
          revenue: movie.revenue,
          productionCompanies: movie.production_companies,
        };

        setMovieDetails(movieDetails);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movie details:", error);
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  // Scroll functions for cast slider
  const scrollLeft = () => {
    if (castContainerRef.current) {
      castContainerRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (castContainerRef.current) {
      castContainerRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  if (loading) {
    return (
      <div className="h-40 flex items-center justify-center">
        Loading movie details...
      </div>
    );
  }

  if (!movieDetails) {
    return (
      <div className="h-40 flex items-center justify-center">
        Movie details not available
      </div>
    );
  }

  // Format currency
  const formatCurrency = (amount) => {
    if (!amount) return "N/A";
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="brutalist-details bg-white text-black py-20">
      <div className="brutalist-container">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-7">
            <div className="brutalist-details-section">
              <h2 className="font-heading text-5xl tracking-wider mb-12 text-black">
                DETAILS
              </h2>

              <div className="brutalist-details-grid grid gap-6">
                <div className="brutalist-details-item border-t-2 border-black pt-4">
                  <div className="font-heading text-3xl mb-2">
                    ORIGINAL LANGUAGE
                  </div>
                  <div className="font-serif text-xl">
                    {movieDetails.originalLanguage === "en"
                      ? "English"
                      : movieDetails.originalLanguage}
                  </div>
                </div>

                <div className="brutalist-details-item border-t-2 border-black pt-4">
                  <div className="font-heading text-3xl mb-2">GENRE</div>
                  <div className="font-serif text-xl">
                    {movieDetails.genres}
                  </div>
                </div>

                <div className="brutalist-details-item border-t-2 border-black pt-4">
                  <div className="font-heading text-3xl mb-2">RELEASE DATE</div>
                  <div className="font-serif text-xl">
                    {movieDetails.releaseDate}
                  </div>
                </div>

                <div className="brutalist-details-item border-t-2 border-black pt-4">
                  <div className="font-heading text-3xl mb-2">RUNTIME</div>
                  <div className="font-serif text-xl">
                    {Math.floor(movieDetails.runtime / 60)}h{" "}
                    {movieDetails.runtime % 60}m
                  </div>
                </div>

                <div className="brutalist-details-item border-t-2 border-black pt-4">
                  <div className="font-heading text-3xl mb-2">BUDGET</div>
                  <div className="font-serif text-xl">
                    {formatCurrency(movieDetails.budget)}
                  </div>
                </div>

                <div className="brutalist-details-item border-t-2 border-black pt-4">
                  <div className="font-heading text-3xl mb-2">REVENUE</div>
                  <div className="font-serif text-xl">
                    {formatCurrency(movieDetails.revenue)}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-5">
            <div className="brutalist-poster-frame relative">
              <img
                src={`https://image.tmdb.org/t/p/original${movieDetails.posterPath}`}
                alt=""
                className="w-full relative z-10"
              />
              <div className="absolute top-4 left-4 right-4 bottom-4 border-2 border-black z-0"></div>
            </div>
          </div>

          <div className="col-span-12 mt-16">
            <h2 className="font-heading text-5xl tracking-wider mb-12 text-black">
              CAST
            </h2>

            <div className="brutalist-cast-container relative">
              <button
                onClick={scrollLeft}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 bg-black text-white p-2"
                aria-label="Scroll left"
              >
                <ArrowLeft size={24} />
              </button>

              <div
                ref={castContainerRef}
                className="brutalist-cast-scroll flex overflow-x-auto gap-4 pb-4 hide-scrollbar"
              >
                {movieDetails.cast.map((actor) => (
                  <Cast
                    key={actor.id}
                    name={actor.name}
                    character={actor.character}
                    profilePath={actor.profilePath}
                  />
                ))}
              </div>

              <button
                onClick={scrollRight}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 bg-black text-white p-2"
                aria-label="Scroll right"
              >
                <ArrowRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
