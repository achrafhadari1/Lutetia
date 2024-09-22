import React from "react";
import { Item } from "./Item";
import { GrNext } from "react-icons/gr";

export const Merch = () => {
  const items = [
    {
      imageUrl:
        "https://static.vecteezy.com/system/resources/previews/008/847/298/non_2x/isolated-black-tote-bag-free-png.png",
      title: "Tote Bag",
      subtitle: '"Lutetia"',
      price: "$5",
    },
    {
      imageUrl:
        "https://www.pngall.com/wp-content/uploads/5/Black-Coffee-Mug-PNG-Free-Download.png",
      title: "T-Shirt",
      subtitle: '"Design A"',
      price: "$10",
    },
    {
      imageUrl:
        "https://static.vecteezy.com/system/resources/previews/024/490/719/original/black-water-bottles-free-png.png",
      title: "Cap",
      subtitle: '"Brand B"',
      price: "$7",
    },
  ];

  return (
    <div className="bg-gray-200 text-black flex flex-col">
      <div className="flex justify-between">
        <div className="text-4xl w-1/6 text-center font-medium pt-8 pl-12">
          MERCH
        </div>
        <GrNext className="mt-8 mr-12  text-4xl  text-center" />
      </div>
      <div className="flex responsive-merch-1 justify-evenly">
        {items.map((item, index) => (
          <Item
            key={index}
            imageUrl={item.imageUrl}
            title={item.title}
            subtitle={item.subtitle}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};
