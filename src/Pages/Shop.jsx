import React, { useEffect, useState } from "react";
import { ShoppingCart, X } from "lucide-react";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

export const Shop = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  const merchandise = [
    {
      id: 1,
      name: "LUTETIA FILM FESTIVAL POSTER",
      price: 45,
      category: "posters",
      image:
        "https://images.pexels.com/photos/6474494/pexels-photo-6474494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      name: "CINEMA ARCHITECTURE BOOK",
      price: 75,
      category: "books",
      image:
        "https://images.pexels.com/photos/3747139/pexels-photo-3747139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      name: "DIRECTOR'S CUT T-SHIRT",
      price: 35,
      category: "apparel",
      image:
        "https://images.pexels.com/photos/5384423/pexels-photo-5384423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      name: "BRUTALIST CINEMA MUG",
      price: 25,
      category: "accessories",
      image:
        "https://images.pexels.com/photos/1566308/pexels-photo-1566308.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 5,
      name: "AUTEUR THEORY TOTE BAG",
      price: 30,
      category: "accessories",
      image:
        "https://images.pexels.com/photos/5662862/pexels-photo-5662862.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 6,
      name: "VINTAGE FILM CAMERA PIN",
      price: 15,
      category: "accessories",
      image:
        "https://images.pexels.com/photos/821738/pexels-photo-821738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  const filteredItems =
    activeFilter === "all"
      ? merchandise
      : merchandise.filter((item) => item.category === activeFilter);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (id) => {
    const itemIndex = cart.findIndex((item) => item.id === id);
    if (itemIndex >= 0) {
      const newCart = [...cart];
      newCart.splice(itemIndex, 1);
      setCart(newCart);
    }
  };

  const cartTotal = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="brutalist-merch">
      {/* Architectural Grid Overlay */}
      <div className="grid-overlay"></div>

      {/* Cart Button */}
      <div
        className="fixed right-8 top-24 z-50 bg-white text-black p-4 cursor-pointer flex items-center gap-2"
        onClick={() => setCartOpen(true)}
      >
        <ShoppingCart size={24} />
        <span className="font-mono">{cart.length}</span>
      </div>

      {/* Cart Sidebar */}
      {cartOpen && (
        <div className="fixed right-0 top-0 bottom-0 w-96 bg-white text-black z-50 p-8 overflow-auto">
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-heading text-3xl">CART</h3>
            <X
              size={24}
              className="cursor-pointer"
              onClick={() => setCartOpen(false)}
            />
          </div>

          {cart.length === 0 ? (
            <div className="font-mono text-center py-8">Your cart is empty</div>
          ) : (
            <>
              {cart.map((item, index) => (
                <div key={index} className="border-b border-black pb-4 mb-4">
                  <div className="flex justify-between">
                    <div className="font-heading">{item.name}</div>
                    <X
                      size={16}
                      className="cursor-pointer"
                      onClick={() => removeFromCart(item.id)}
                    />
                  </div>
                  <div className="font-mono mt-2">${item.price}</div>
                </div>
              ))}

              <div className="mt-8 pt-4 border-t border-black">
                <div className="flex justify-between mb-8">
                  <div className="font-heading text-xl">TOTAL</div>
                  <div className="font-heading text-xl">${cartTotal}</div>
                </div>

                <div className="brutalist-button-small w-full text-center">
                  <span className="brutalist-button-inner-small block">
                    CHECKOUT
                  </span>
                </div>
              </div>
            </>
          )}
        </div>
      )}

      {/* Hero Section */}
      <div className="brutalist-merch-hero relative pt-32 pb-16 bg-black">
        <div className="brutalist-container">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-8 col-start-3">
              <div className="uppercase tracking-widest text-sm font-mono border-l-2 border-white pl-4 mb-6">
                LUTETIA STORE
              </div>
              <h1 className="font-heading text-8xl tracking-wider mb-8">
                MERCHANDISE
              </h1>
              <div className="border-t border-b border-white py-4 mb-8 uppercase tracking-widest text-center font-mono">
                CURATED CINEMA COLLECTIBLES
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Merch Section */}
      <div className="brutalist-merch-grid py-16 bg-black">
        <div className="concrete-divider"></div>
        <div className="brutalist-container">
          <div className="grid grid-cols-12 gap-8">
            {/* Filters */}
            <div className="col-span-12 mb-12">
              <div className="flex justify-center gap-8 font-mono">
                {["all", "posters", "books", "apparel", "accessories"].map(
                  (filter) => (
                    <div
                      key={filter}
                      className={`brutalist-filter cursor-pointer uppercase ${
                        activeFilter === filter ? "border-b-2 border-white" : ""
                      }`}
                      onClick={() => setActiveFilter(filter)}
                    >
                      {filter}
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Merch Items */}
            {filteredItems.map((item) => (
              <div key={item.id} className="col-span-4 mb-16">
                <div className="brutalist-merch-item">
                  <div className="brutalist-history-image mb-6">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-[400px] object-cover"
                      style={{ filter: "grayscale(100%) contrast(120%)" }}
                    />
                    <div className="brutalist-image-border"></div>
                  </div>
                  <h3 className="font-heading text-2xl mb-2">{item.name}</h3>
                  <div className="font-mono text-sm mb-4">${item.price}</div>
                  <div
                    className="brutalist-button-small cursor-pointer"
                    onClick={() => addToCart(item)}
                  >
                    <span className="brutalist-button-inner-small">
                      ADD TO CART
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Shop;
