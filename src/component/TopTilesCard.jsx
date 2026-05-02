import Image from "next/image";
import React from "react";

const TopTilesCard = ({tile}) => {

  return (
    <div>
      <div className="card bg-base-100 shadow-sm">
        <figure>
          <Image
          className="h-68 w-80 rounded-2xl object-cover"
            width={300}
            height={300}
            src={tile.image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{tile.title}</h2>
          <p>{tile.description}</p>
          <div className="flex justify-between items-center">
            <span className="font-bold">$ {tile.price}</span>
            <span className="font-bold">{tile.category}</span>
          </div>
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default TopTilesCard;
