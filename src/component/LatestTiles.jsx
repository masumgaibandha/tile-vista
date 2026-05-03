import Marquee from "react-fast-marquee";
import TilesMarqueeCard from "./TilesMarqueeCard";

const LatestTiles = async () => {
  const res = await fetch("https://tile-vista.vercel.app/data.json", {
    next: { revalidate: 3600 },
  });
  const tiles = await res.json();

  return (
    <section className="my-16">
      {/* Section header */}
      <div className="container mx-auto px-4 sm:px-6 mb-8 text-center">
        <div className="flex items-center justify-center gap-3 mb-2">
          <span className="block w-6 h-px bg-amber-600" />
          <span className="text-amber-600 text-[11px] font-medium tracking-[3px] uppercase">
            New Arrivals
          </span>
          <span className="block w-6 h-px bg-amber-600" />
        </div>
        <h2 className="font-playfair text-3xl font-bold text-stone-900 mb-2">
          Latest Tiles
        </h2>
        <p className="text-stone-400 text-[15px] max-w-md mx-auto">
          Explore our newest tile collections for modern spaces.
        </p>
      </div>

      {/* Marquee */}
      <Marquee
        speed={45}
        pauseOnHover={true}
        gradient={true}
        gradientColor="#f5f4f0"
        gradientWidth={80}
      >
        {tiles.map((tile) => (
          <TilesMarqueeCard key={tile.id} tile={tile} />
        ))}
      </Marquee>
    </section>
  );
};

export default LatestTiles;
