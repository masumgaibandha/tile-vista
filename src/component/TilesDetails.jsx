import Image from "next/image";
import React from "react";

const TilesDetails = ({tile}) => {
  return (
    <div>
      <div className="max-w-5xl mx-auto p-6 grid md:grid-cols-2 gap-8">
       
        <div className="border rounded-xl p-2 relative aspect-square w-full">
          <Image
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            src={tile.image}
            alt="Ceramic Blue Tile"
            className="rounded-2xl object-cover"
          />
        </div>

      
        <div>
          <h2 className="text-3xl font-bold mb-4">{tile.title}</h2>

          <p className="mb-4 text-gray-600">
            {tile.description}
          </p>

          <div className="space-y-2">
            <p>
              <span className="font-semibold">Category:</span> {tile.category}
            </p>
            <p>
              <span className="font-semibold">Material:</span> {tile.material}
            </p>
            <p>
              <span className="font-semibold">Dimensions:</span> {tile.dimensions}
            </p>
            <p>
              <span className="font-semibold">Price:</span> ${tile.price}
            </p>
            <p>
              <span className="font-semibold">Stock:</span> {tile.inStock}
              <span className="text-green-600">Available</span>
            </p>
          </div>

          <button className="btn btn-primary mt-6">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default TilesDetails;
