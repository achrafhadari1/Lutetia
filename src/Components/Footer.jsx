import React from "react";

const Footer = () => {
  return (
    <footer className="footer border-t-2 flex flex-col  border-white">
      <div className="effect-three footer-links flex justify-between pl-24 pr-24 items-center mb-24">
        <div className="text-7xl">Lutetia</div>
        <a href="#seances">Seances</a>
        <a href="#prices">Prices</a>
        <a href="#history">History</a>
        <a href="#events">Events</a>
      </div>
      <div className="flex footer-responsive-1 justify-between pl-24 pr-24">
        <div className="effect-three  footer-socials flex  ">
          <a
            href="https://twitter.com/Lutetia"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3"
          >
            <img
              className="w-6 h-6 object-cover"
              src="/Letterboxd_24.png"
              alt=""
            />
            @Lutetia
          </a>
          <a
            href="https://twitter.com/Lutetia"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3"
          >
            <img className="w-6 h-6 object-cover" src="/insta.png" alt="" />
            @Lutetia
          </a>{" "}
          <a
            href="https://twitter.com/Lutetia"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3"
          >
            <img className="w-6 h-6 object-cover" src="/x.png" alt="" />
            @Lutetia
          </a>
        </div>
        <div className="footer-policies flex effect-three ">
          <a href="#privacy-policy">Privacy Policy</a>
          <a href="#cookie-policy">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
