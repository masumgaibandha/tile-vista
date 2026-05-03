import Link from "next/link";
import Image from "next/image";

const tiles = [
  {
    src: "https://as1.ftcdn.net/v2/jpg/01/90/67/44/1000_F_190674414_cbSpItC3svzcCXH1qUOAZg5aEjuWGEXj.jpg",
    alt: "Ceramic Blue",
    className: "col-span-2",
  },
  {
    src: "https://image.made-in-china.com/202f0j00cFCqeRKESykM/Luxury-Interior-600X1200mm-Living-Room-White-and-Gold-Marble-Floor-Tile.webp",
    alt: "Luxury Gold",
    className: "row-span-2",
  },
  {
    src: "https://gemstonesinc.ca/wp-content/uploads/2019/11/Black-Galaxy-840x537.jpg",
    alt: "Granite Black",
    className: "",
  },
  {
    src: "https://img.magnific.com/free-photo/black-white-plate-geometric-pattern-floor-minimalist-design_169016-25290.jpg?semt=ais_hybrid&w=740&q=80",
    alt: "Geometric",
    className: "",
  },
  {
    src: "https://rflandscapeproducts.co.uk/wp-content/uploads/2024/01/Crema-Beige.jpg",
    alt: "Glossy Beige",
    className: "",
  },
  {
    src: "https://img.magnific.com/free-photo/wooden_1127-2950.jpg?semt=ais_hybrid&w=740&q=80",
    alt: "Wood Texture",
    className: "",
  },
  {
    src: "https://www.novoceram.com/wp-content/uploads/sites/4/2023/07/azimut-froid-600x400.jpg",
    alt: "Matte Grey",
    className: "",
  },
];

const Banner = () => {
  return (
    <section className="container mx-auto rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 min-h-[420px] lg:min-h-[580px]">
      {/* Left — content */}
      <div
        className="bg-[#1a1208] px-8 sm:px-12 lg:px-14 py-12 lg:py-16 flex flex-col justify-center relative z-10
                      lg:after:content-[''] lg:after:absolute lg:after:top-0 lg:after:right-0 lg:after:bottom-0
                      lg:after:w-10 lg:after:bg-[#1a1208] lg:after:[clip-path:polygon(0_0,0_100%,100%_100%)] lg:after:z-10"
      >
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-4 lg:mb-5">
          <span className="block w-7 h-px bg-amber-600" />
          <span className="text-amber-600 text-[11px] font-medium tracking-[3px] uppercase">
            Premium Collection
          </span>
        </div>

        {/* Heading */}
        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.15] text-stone-50 mb-4 lg:mb-5">
          Find Tiles That <em className="text-amber-500 not-italic">Define</em>{" "}
          Your Space
        </h1>

        {/* Description */}
        <p className="text-[#a89880] text-sm lg:text-[15px] leading-relaxed mb-7 lg:mb-9 max-w-sm">
          From classic marble to bold geometric designs — discover handpicked
          premium tiles for every aesthetic.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/all-tiles"
            className="bg-amber-600 hover:bg-amber-700 active:bg-amber-800 text-white text-sm font-medium
                       px-6 lg:px-8 py-3 lg:py-3.5 rounded-full transition-colors duration-200 shadow-md"
          >
            Browse All Tiles →
          </Link>
          <Link
            href="/all-tiles"
            className="text-[#a89880] hover:text-stone-200 text-sm flex items-center gap-2 transition-colors duration-200"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <circle cx="11" cy="11" r="8" />
              <path d={"m21 21-4.35-4.35"} />
            </svg>
            Filter by style
          </Link>
        </div>

        {/* Stats */}
        <div className="flex gap-6 lg:gap-8 mt-8 lg:mt-12 pt-6 lg:pt-8 border-t border-[#2e2010]">
          {[
            { num: "10+", label: "Categories" },
            { num: "200+", label: "Premium tiles" },
            { num: "100%", label: "Satisfaction" },
          ].map(({ num, label }) => (
            <div key={label}>
              <div className="font-playfair text-xl lg:text-2xl font-bold text-stone-50">
                {num}
              </div>
              <div className="text-xs text-[#6b5a47] mt-1 tracking-wide">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right — tile mosaic (hidden on mobile) */}
      <div className="relative overflow-hidden hidden lg:block">
        <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#1a1208] to-transparent z-10 pointer-events-none" />
        <div className="grid grid-cols-3 grid-rows-3 h-full gap-[3px]">
          {tiles.map((tile) => (
            <div
              key={tile.alt}
              className={`relative overflow-hidden ${tile.className}`}
            >
              <Image
                src={tile.src}
                alt={tile.alt}
                fill
                sizes="(max-width: 1024px) 0vw, 20vw"
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile-only image strip */}
      <div className="relative h-48 sm:h-64 lg:hidden overflow-hidden">
        <Image
          src={tiles[0].src}
          alt="Featured tile"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1208]/60 to-transparent" />
      </div>
    </section>
  );
};

export default Banner;
