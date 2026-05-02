import Image from "next/image";
import React from "react";
import TopTilesCard from "./TopTilesCard";

const FeaturedTiles = async () => {
  const res = await fetch("https://tile-vista.vercel.app/data.json");
  const tiles = await res.json();
  const topTiles = tiles.slice(0,8)

  return (
    <div className="my-6">
      <h2 className="text-2xl font-bold">Top Tiles</h2>
      <div className="my-6 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {
            topTiles.map(tile => <TopTilesCard key={tile.id} tile={tile}></TopTilesCard>)
        }
      </div>
    </div>
  );
};

export default FeaturedTiles;
