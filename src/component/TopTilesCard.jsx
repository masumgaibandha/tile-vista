import Image from "next/image";
import Link from "next/link";
import React from "react";

const TopTilesCard = ({tile}) => {

  return (
    <div>
      <div className="card bg-base-100 shadow-sm border border-gray-200 rounded-2xl p-2">
        <figure className="relative aspect-square w-full">
          <Image
          className=" rounded-2xl object-cover "
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
          <Link href={`/all-tiles/${tile.id}`}><button className="btn btn-primary w-full">View Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default TopTilesCard;
