import React from "react";
import { GrNext } from "react-icons/gr";
import Footer from "../Components/Footer";
import Newsletter from "../Components/HomePage/Newsletter";

const merchItems = [
  {
    imageUrl:
      "https://static.vecteezy.com/system/resources/previews/008/847/298/non_2x/isolated-black-tote-bag-free-png.png",
    title: "Tote Bag",
    subtitle: '"Lutetia"',
    price: "10$",
  },
  {
    imageUrl:
      "https://static.vecteezy.com/system/resources/previews/024/490/719/original/black-water-bottles-free-png.png",
    title: "Water Bottle",
    subtitle: '"Lutetia"',
    price: "10$",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/7991269/pexels-photo-7991269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Post Card",
    subtitle: '"Lutetia"',
    price: "10$",
  },
  {
    imageUrl:
      "https://www.pngall.com/wp-content/uploads/5/Black-Coffee-Mug-PNG-Free-Download.png",
    title: "Mug",
    subtitle: '"Lutetia"',
    price: "10$",
  },
  {
    imageUrl:
      "https://png.pngtree.com/png-clipart/20230607/ourmid/pngtree-black-t-shirt-mockup-new-model-realistic-png-image_7122610.png",
    title: "T-Shirt",
    subtitle: '"Lutetia"',
    price: "10$",
  },
  {
    imageUrl:
      "https://static.vecteezy.com/system/resources/previews/008/847/298/non_2x/isolated-black-tote-bag-free-png.png",
    title: "Tote Bag",
    subtitle: '"Lutetia"',
    price: "10$",
  },
];

export const Shop = () => {
  return (
    <>
      <div className="bg-black text-white min-h-screen p-10">
        {/* Header */}
        <h1 className="text-[6rem] text-center font-semibold mb-16">
          Support Your Local Cinemas
        </h1>

        {/* Filter Section */}

        {/* Merch Grid */}
        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-6">
          {merchItems.map((item, index) => (
            <div
              key={index}
              className=" flex   flex-col justify-center m-12 h-1/2  "
            >
              <div className=" btn-hover btn-3 hover-border-5">
                <img
                  className="merch-image  bg-[#D9D9D9] "
                  src={item.imageUrl}
                  alt={item.title}
                />
              </div>
              <div className="flex justify-around">
                <div>
                  <div>{item.title}</div>
                  <div>{item.subtitle}</div>
                </div>
                <div>
                  <div>{item.price}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Newsletter />
      <Footer />
    </>
  );
};

export default Shop;
