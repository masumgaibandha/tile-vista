"use client";

import { useState, useMemo } from "react";

import { BiSearch, BiX } from "react-icons/bi";
import TopTilesCard from "./TopTilesCard";
import CategoryPage from "./CategoryPage";

const AllTilesClient = ({ tiles, categories }) => {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("all");

  const filtered = useMemo(() => {
    return tiles.filter((tile) => {
      const matchesSearch = tile.title
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesCategory =
        selected === "all" || tile.category.toLowerCase() === selected;
      return matchesSearch && matchesCategory;
    });
  }, [tiles, search, selected]);

  return (
    <section className="container mx-auto px-4 sm:px-6 py-14">
      {/* Page header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="block w-6 h-px bg-amber-600" />
          <span className="text-amber-600 text-[11px] font-medium tracking-[3px] uppercase">
            Collection
          </span>
        </div>
        <h1 className="font-playfair text-4xl font-bold text-stone-900">
          All Tiles
        </h1>
        <p className="text-stone-400 text-[15px] mt-2">
          Explore our full range of premium tiles
        </p>
      </div>

      {/* Search bar */}
      <div className="relative max-w-xl mb-6">
        <BiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 text-lg pointer-events-none" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search tiles by name..."
          className="w-full pl-11 pr-10 py-3 text-sm text-stone-800 bg-white border border-stone-200 rounded-2xl outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 placeholder:text-stone-300 shadow-sm transition-all duration-200"
        />
        {search && (
          <button
            onClick={() => setSearch("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 transition-colors"
          >
            <BiX className="text-lg" />
          </button>
        )}
      </div>

      {/* Category filter */}
      <div className="mb-8">
        <CategoryPage
          categories={categories}
          selected={selected}
          onSelect={setSelected}
        />
      </div>

      {/* Results count */}
      <p className="text-stone-400 text-sm mb-6">
        Showing{" "}
        <span className="text-stone-700 font-semibold">{filtered.length}</span>{" "}
        {filtered.length === 1 ? "tile" : "tiles"}
        {search && (
          <span>
            {" "}
            for <span className="text-amber-600 font-medium">"{search}"</span>
          </span>
        )}
        {selected !== "all" && (
          <span>
            {" "}
            in{" "}
            <span className="text-amber-600 font-medium capitalize">
              {selected}
            </span>
          </span>
        )}
      </p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map((tile) => (
            <TopTilesCard key={tile.id} tile={tile} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-24 gap-4">
          <div className="grid grid-cols-3 gap-1.5 opacity-20">
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className={`w-6 h-6 rounded-sm ${i % 3 === 0 ? "bg-amber-600" : "bg-stone-300"}`}
              />
            ))}
          </div>
          <p className="text-stone-400 text-sm">
            No tiles found for your search
          </p>
          <button
            onClick={() => {
              setSearch("");
              setSelected("all");
            }}
            className="text-amber-600 hover:text-amber-700 text-sm font-medium transition-colors"
          >
            Clear filters
          </button>
        </div>
      )}
    </section>
  );
};

export default AllTilesClient;
