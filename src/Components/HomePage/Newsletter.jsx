import React from "react";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <div className="flex newsletter-responsive-1 align-baseline justify-between w-2/3 m-auto ">
        <h1>Join Our Newsletter</h1>
        <form className="newsletter-form">
          <input type="email" placeholder="Your Email" />
          <button type="submit">➔</button>
        </form>
      </div>
      <div className="flex align-baseline justify-between w-2/3 m-auto">
        <p>
          Welcome to our cinema newsletter, your passport to the captivating
          world of movies! Get ready for exclusive film reviews,
          behind-the-scenes insights, and updates on special events and
          screenings. Join our community of cinephiles as we share trivia, fun
          facts, and recommendations about the latest releases and timeless
          classics. Subscribe now and embark on a cinematic journey filled with
          excitement, entertainment, and endless possibilities!
        </p>
        <div className="w-1/2"></div>
      </div>
    </div>
  );
};

export default Newsletter;
