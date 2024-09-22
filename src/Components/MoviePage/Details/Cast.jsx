export const Cast = ({ name, profilePath }) => {
  return (
    <div className="relative w-64 h-96 object-cover flex-shrink-0 bg-rgba  text-white">
      {profilePath !== null ? (
        <>
          <img
            className="actor-image absolute w-full h-full z-0 mask-image"
            src={`https://image.tmdb.org/t/p/original${profilePath}`}
            alt={name}
          />
          <div className="effect-three z-20 w-full h-full flex justify-center pb-4 items-end relative">
            <a href="#" className="text-xl">
              {name}
            </a>
          </div>
        </>
      ) : (
        <>
          <img
            className="actor-image absolute w-full h-full z-0 mask-image"
            src={`https://live.staticflickr.com/65535/49402101732_1302c9a6fb_b.jpg`}
            alt={name}
          />
          <div className="effect-three z-20 w-full h-full flex justify-center pb-4 items-end relative">
            <a href="#" className="text-xl">
              {name}
            </a>
          </div>
        </>
      )}
    </div>
  );
};
