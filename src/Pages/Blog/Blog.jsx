import React from "react";
import { Article } from "./Article";
import Newsletter from "../../Components/HomePage/Newsletter";
import Footer from "../../Components/Footer";
import articlesData from "./Articles.json"; // Import JSON data
import "./Blog.css";

export const Blog = () => {
  return (
    <>
      <div className="bg-white w-full ">
        <div className="text-black text-9xl text-center">BLOG</div>
        <div className="ml-24 blog-res-1 flex mt-10">
          {articlesData.map((article, index) => (
            <Article
              key={index}
              img={article.img}
              title={article.title}
              text={article.text}
              author={article.author}
              duration={article.duration}
            />
          ))}
        </div>
      </div>
      <Newsletter />
      <Footer />
    </>
  );
};
