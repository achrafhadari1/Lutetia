import React, { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import Footer from "../../Components/Footer";
import { Link } from "react-router-dom";

export const Blog = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: "THE EVOLUTION OF ARCHITECTURAL CINEMA SPACES",
      excerpt:
        "How the design of movie theaters has transformed our relationship with film over the last century, from grand movie palaces to brutalist monuments.",
      author: "Sophia Laurent",
      date: "June 10, 2025",
      category: "ARCHITECTURE",
      image:
        "https://images.pexels.com/photos/2563339/pexels-photo-2563339.jpeg",
      featured: true,
    },
    {
      id: 2,
      title: "DIRECTORS TO WATCH: THE NEW WAVE OF EXPERIMENTAL CINEMA",
      excerpt:
        "We spotlight five emerging directors who are pushing the boundaries of conventional filmmaking with their unconventional approaches to narrative and form.",
      author: "Jean-Michel Dupont",
      date: "June 7, 2025",
      category: "FILM THEORY",
      image:
        "https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg",
    },
    {
      id: 3,
      title: "FILM RESTORATION: PRESERVING CINEMATIC HERITAGE",
      excerpt:
        "Behind the scenes with the technicians and artists who work tirelessly to restore and preserve classic films for future generations.",
      author: "Claire Fontaine",
      date: "May 28, 2025",
      category: "PRESERVATION",
      image:
        "https://images.pexels.com/photos/2510428/pexels-photo-2510428.jpeg",
    },
    {
      id: 4,
      title: "THE SOUND OF SILENCE: EXPLORING MODERN SILENT FILMS",
      excerpt:
        "How contemporary filmmakers are revisiting the silent film format to create powerful visual storytelling without dialogue.",
      author: "Thomas Noir",
      date: "May 15, 2025",
      category: "FILM ANALYSIS",
      image:
        "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg",
    },
    {
      id: 5,
      title: "INTERVIEW: CINEMATOGRAPHER LUCAS DEBOIS",
      excerpt:
        "Award-winning cinematographer Lucas Debois discusses his approach to visual storytelling and his collaborations with leading directors.",
      author: "Marie Clément",
      date: "May 3, 2025",
      category: "INTERVIEW",
      image:
        "https://images.pexels.com/photos/2346001/pexels-photo-2346001.jpeg",
    },
  ];

  return (
    <div className="brutalist-blog">
      {/* Architectural Grid Overlay */}
      <div className="grid-overlay"></div>

      {/* Hero Section */}
      <div className="brutalist-blog-hero relative pt-32 pb-16 bg-black">
        <div className="brutalist-container">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-8 col-start-3">
              <div className="uppercase tracking-widest text-sm font-mono border-l-2 border-white pl-4 mb-6">
                LUTETIA JOURNAL
              </div>
              <h1 className="font-heading text-8xl tracking-wider mb-8">
                BLOG
              </h1>
              <div className="border-t border-b border-white py-4 mb-8 uppercase tracking-widest text-center font-mono">
                CINEMA THEORY, CULTURE & CRITICISM
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Post */}
      {blogPosts
        .filter((post) => post.featured)
        .map((post) => (
          <div
            key={post.id}
            className="brutalist-featured-post py-16 bg-black relative"
          >
            <div className="concrete-divider"></div>
            <div className="brutalist-container">
              <div className="grid grid-cols-12 gap-8">
                <div className="col-span-8">
                  <div className="brutalist-history-image relative mb-8">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-[600px] object-cover"
                      style={{ filter: "grayscale(100%) contrast(120%)" }}
                    />
                    <div className="brutalist-image-border"></div>
                  </div>
                </div>

                <div className="col-span-4">
                  <div className="font-mono text-sm mb-4">{post.category}</div>
                  <h2 className="font-heading text-5xl mb-6">{post.title}</h2>
                  <div className="font-mono text-sm mb-6">
                    By {post.author} • {post.date}
                  </div>
                  <p className="font-serif text-xl mb-8">{post.excerpt}</p>
                  <div className="brutalist-button-small">
                    <span className="brutalist-button-inner-small">
                      READ MORE
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

      {/* Blog Grid */}
      <div className="brutalist-blog-grid py-16 bg-black">
        <div className="concrete-divider right"></div>
        <div className="brutalist-container">
          <div className="grid grid-cols-12 gap-12">
            <div className="col-span-12 mb-8">
              <h2 className="font-heading text-5xl tracking-wider">
                LATEST ARTICLES
              </h2>
            </div>

            {blogPosts
              .filter((post) => !post.featured)
              .map((post) => (
                <div key={post.id} className="col-span-6">
                  <div className="brutalist-blog-card">
                    <div className="brutalist-movie-image mb-6">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-[400px] object-cover"
                        style={{ filter: "grayscale(100%) contrast(120%)" }}
                      />
                    </div>
                    <div className="font-mono text-sm mb-2">
                      {post.category}
                    </div>
                    <h3 className="font-heading text-3xl mb-4">{post.title}</h3>
                    <div className="font-mono text-sm mb-4">
                      By {post.author} • {post.date}
                    </div>
                    <p className="font-serif mb-6">{post.excerpt}</p>
                    <div className="flex items-center font-mono text-sm cursor-pointer hover:underline">
                      READ FULL ARTICLE{" "}
                      <ArrowRight className="ml-2" size={16} />
                    </div>
                  </div>
                </div>
              ))}

            <div className="col-span-12 mt-12 text-center">
              <div className="brutalist-button inline-block">
                <span className="brutalist-button-inner">
                  VIEW ALL ARTICLES
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
