import React, { useEffect, useState } from "react";
import axios from "axios";

export const Director = ({ id }) => {
  const [director, setDirector] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDirector = async () => {
      try {
        const apiKey = "716d704f44b5a3eff07788f36a04aed0";
        const creditsResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/credits`,
          {
            params: {
              api_key: apiKey,
            },
          }
        );

        const directorData = creditsResponse.data.crew.find(
          (person) => person.job === "Director"
        );

        if (directorData) {
          const personResponse = await axios.get(
            `https://api.themoviedb.org/3/person/${directorData.id}`,
            {
              params: {
                api_key: apiKey,
              },
            }
          );

          setDirector(personResponse.data);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching director information:", error);
        setLoading(false);
      }
    };

    fetchDirector();
  }, [id]);

  if (loading) {
    return <div className="h-40 flex items-center justify-center">Loading director information...</div>;
  }

  if (!director) {
    return <div className="h-40 flex items-center justify-center">Director information not available</div>;
  }

  // Function to format the biography into paragraphs
  const formatBiography = (bio) => {
    if (!bio) return [];
    const sentences = bio.split(". ");
    let paragraphs = [];
    for (let i = 0; i < sentences.length; i += 3) {
      paragraphs.push(
        sentences.slice(i, i + 3).join(". ") +
          (i + 3 < sentences.length ? "." : "")
      );
    }
    return paragraphs;
  };

  return (
    <div className="brutalist-director relative bg-black py-20">
      <div className="brutalist-container">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 mb-8">
            <div className="flex items-center">
              <div className="h-[1px] flex-grow bg-white"></div>
              <h2 className="text-5xl px-8 font-heading tracking-widest">THE DIRECTOR</h2>
              <div className="h-[1px] flex-grow bg-white"></div>
            </div>
          </div>
          
          <div className="col-span-7 col-start-1">
            <div className="brutalist-director-bio">
              <div className="font-serif text-lg">
                {formatBiography(director.biography).length > 0 ? (
                  formatBiography(director.biography).map((paragraph, index) => (
                    <p key={index} className="mb-8">
                      {paragraph}
                    </p>
                  ))
                ) : (
                  <p>No biography available for this director.</p>
                )}
              </div>
            </div>
          </div>
          
          <div className="col-span-4 col-start-9">
            <div className="brutalist-director-image-container relative">
              <div className="brutalist-history-image">
                {director.profile_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/original${director.profile_path}`}
                    alt={director.name}
                    className="w-full"
                    style={{ filter: "grayscale(100%) contrast(120%)" }}
                  />
                ) : (
                  <div className="h-96 bg-gray-800 flex items-center justify-center">
                    No image available
                  </div>
                )}
                <div className="brutalist-image-border"></div>
              </div>
              
              <div className="brutalist-director-name font-heading text-6xl tracking-widest mt-8">
                {director.name.toUpperCase()}
              </div>
              
              <div className="font-mono text-sm uppercase tracking-wider mt-4">
                {director.birthday && `Born: ${director.birthday}`}
                {director.place_of_birth && ` • ${director.place_of_birth}`}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
