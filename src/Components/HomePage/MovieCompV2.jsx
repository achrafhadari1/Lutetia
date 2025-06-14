import React from "react";
import { Link } from "react-router-dom";

export const MovieCompV2 = ({ movie }) => {
  // Extract genres as a comma separated string
  const genreNames = movie.genres.map(genre => genre.name).join(", ");
  
  return (
    <div className="brutalist-movie-card">
      <div className="brutalist-movie-image">
        <img 
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
          alt={movie.title}
          style={{ filter: "grayscale(100%) contrast(120%)" }}
          className="w-full object-cover aspect-[2/3]"
        />
      </div>
      
      <div className="brutalist-movie-details mt-6">
        <div className="brutalist-movie-meta font-mono text-sm uppercase tracking-wider mb-2">
          {genreNames} | {movie.runtime} MIN
        </div>
        
        {movie.logo ? (
          <img 
            src={movie.logo} 
            alt={movie.title} 
            className="brutalist-movie-logo h-16 mb-4 object-contain object-left"
          />
        ) : (
          <h3 className="brutalist-movie-title text-4xl mb-4 font-heading">{movie.title}</h3>
        )}
        
        <div className="brutalist-movie-director font-serif text-lg mb-4">
          A Film by {movie.director}
        </div>
        
        <p className="brutalist-movie-overview font-serif mb-6 line-clamp-3">
          {movie.overview}
        </p>
        
        <div className="brutalist-movie-showtimes grid grid-cols-3 gap-2 mb-6">
          {["16:30", "19:00", "21:45"].map((time, i) => (
            <div key={i} className="brutalist-time text-sm">
              {time}
            </div>
          ))}
        </div>
        
        <Link to={`/movie/${movie.id}`} className="brutalist-button-small">
          <span className="brutalist-button-inner-small">TICKETS</span>
        </Link>
      </div>
    </div>
  );
};
