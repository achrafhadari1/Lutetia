import React from "react";

export const Item = ({ imageUrl, title, subtitle, price }) => {
  return (
    <div className="w-2/5 flex flex-col justify-center m-12 h-1/2  ">
      <div className=" btn-hover btn-3 hover-border-5">
        <img className="merch-image " src={imageUrl} alt={title} />
      </div>
      <div className="flex justify-around">
        <div>
          <div>{title}</div>
          <div>{subtitle}</div>
        </div>
        <div>
          <div>{price}</div>
        </div>
      </div>
    </div>
  );
};
