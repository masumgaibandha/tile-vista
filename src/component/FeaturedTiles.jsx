import Link from "next/link";
import TopTilesCard from "./TopTilesCard";

const FeaturedTiles = async () => {
  const res = await fetch("https://tile-vista.vercel.app/data.json", {
    next: { revalidate: 3600 },
  });
  const tiles = await res.json();
  const topTiles = tiles.slice(0, 8);

  return (
    <section className="my-16 container mx-auto px-4 sm:px-6">
      {/* Section header */}
      <div className="flex items-end justify-between mb-8">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="block w-6 h-px bg-amber-600" />
            <span className="text-amber-600 text-[11px] font-medium tracking-[3px] uppercase">
              Handpicked
            </span>
          </div>
          <h2 className="font-playfair text-3xl font-bold text-stone-900">
            Top Tiles
          </h2>
        </div>

        <Link
          href="/all-tiles"
          className="text-sm text-stone-400 hover:text-amber-600 transition-colors duration-200 flex items-center gap-1.5"
        >
          View all
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={"M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"}
            />
          </svg>
        </Link>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {topTiles.map((tile) => (
          <TopTilesCard key={tile.id} tile={tile} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedTiles;
