import React from "react";
import "./Blog.css";

export const Article = ({ img, title, text, author, duration }) => {
  return (
    <div className="card flex flex-col justify-between">
      <div className="card-header">
        <div>read</div>
      </div>
      <div className="card-image">
        <img src={img} alt="Artwork" />
      </div>
      <div className="card-body">
        <h2 className="text-black hover:underline cursor-pointer">{title}</h2>
        <p>{text}</p>
      </div>
      <div className="card-footer">
        <span>Text: {author}</span>
        <span>Duration: {duration}</span>
      </div>
    </div>
  );
};
