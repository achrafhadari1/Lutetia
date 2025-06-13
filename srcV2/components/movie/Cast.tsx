import React from "react";

export const Cast = ({ name, character, profilePath }) => {
  return (
    <div className="brutalist-cast-card flex-shrink-0 w-64">
      <div className="brutalist-cast-image-container relative mb-4">
        <div className="brutalist-cast-image">
          {profilePath ? (
            <img
              src={`https://image.tmdb.org/t/p/original${profilePath}`}
              alt={name}
              className="w-full h-80 object-cover"
              style={{ filter: "grayscale(100%) contrast(120%)" }}
            />
          ) : (
            <div className="w-full h-80 bg-gray-800 flex items-center justify-center">
              No image
            </div>
          )}
        </div>
        <div className="absolute top-2 left-2 right-2 bottom-2 border border-black z-0"></div>
      </div>
      
      <div className="brutalist-cast-info">
        <div className="font-heading text-xl text-black mb-1">{name}</div>
        {character && (
          <div className="font-mono text-sm text-gray-700">as {character}</div>
        )}
      </div>
    </div>
  );
};
