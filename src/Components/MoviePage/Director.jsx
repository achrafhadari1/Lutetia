import React, { useEffect, useState } from "react";
import axios from "axios";

export const Director = ({ id }) => {
  const [director, setDirector] = useState(null);

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
      } catch (error) {
        console.error("Error fetching director information:", error);
      }
    };

    fetchDirector();
  }, [id]);

  if (!director) {
    return <div>Loading...</div>;
  }

  // Function to format the biography into paragraphs
  const formatBiography = (bio) => {
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
    <div className="w-full border-b-2">
      <div className="w-2/3 m-auto pt-32 pb-52 ">
        <div className=" text-left text-7xl font-semibold mb-24">
          About Director
        </div>
        <div className="flex w-full dir-res-1 gap-44">
          <div className="w-1/2">
            {director.biography ? (
              formatBiography(director.biography).map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))
            ) : (
              <p>No biography available for this director.</p>
            )}
          </div>
          <div className="relative">
            {director.profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/original${director.profile_path}`}
                alt={director.name}
              />
            ) : (
              <div>No image available</div>
            )}
            <div className="absolute top-1/3 dir-res-2 silk-font right-28 text-9xl w-full">
              {director.name.toUpperCase()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
