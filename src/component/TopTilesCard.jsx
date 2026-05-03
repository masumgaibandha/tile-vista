import Image from "next/image";
import Link from "next/link";

const categoryColors = {
  ceramic: "bg-blue-50   text-blue-700",
  marble: "bg-stone-100 text-stone-600",
  granite: "bg-zinc-100  text-zinc-600",
  wood: "bg-orange-50 text-orange-700",
  decorative: "bg-purple-50 text-purple-700",
  mosaic: "bg-teal-50   text-teal-700",
  stone: "bg-amber-50  text-amber-700",
  luxury: "bg-yellow-50 text-yellow-700",
};

const TopTilesCard = ({ tile }) => {
  const {
    id,
    title,
    description,
    image,
    category,
    price,
    material,
    dimensions,
    inStock,
  } = tile;
  const imgSrc = Array.isArray(image) ? image[0] : image;
  const badgeClass = categoryColors[category] ?? "bg-stone-100 text-stone-600";

  return (
    <div
      className="group bg-white rounded-2xl overflow-hidden border border-stone-200
                    hover:border-amber-200 hover:shadow-[0_8px_32px_rgba(180,83,9,0.1)]
                    transition-all duration-300 flex flex-col"
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={imgSrc}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Category badge */}
        <span
          className={`absolute top-3 left-3 z-10 text-[11px] font-medium tracking-wide
                          uppercase px-3 py-1 rounded-full ${badgeClass}
                          backdrop-blur-sm bg-opacity-90`}
        >
          {category}
        </span>

        {/* Out of stock */}
        {!inStock && (
          <div className="absolute inset-0 bg-stone-900/50 flex items-center justify-center z-10">
            <span
              className="bg-stone-900/80 text-stone-200 text-xs font-medium tracking-widest
                             uppercase px-4 py-2 rounded-full"
            >
              Out of Stock
            </span>
          </div>
        )}
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="text-stone-900 font-semibold text-[15px] leading-snug line-clamp-1">
            {title}
          </h3>
          <span className="text-amber-700 font-bold text-[15px] whitespace-nowrap">
            ${price.toFixed(2)}
          </span>
        </div>

        <p className="text-stone-400 text-[13px] leading-relaxed mb-4 line-clamp-2 flex-1">
          {description}
        </p>

        {/* Meta */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {[material, dimensions].map((tag) => (
            <span
              key={tag}
              className="bg-stone-100 text-stone-500 text-[11px] px-2.5 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <Link
          href={`/all-tiles/${id}`}
          className={`block w-full text-center text-sm font-medium py-2.5 rounded-xl
                      transition-all duration-200
                      ${
                        inStock
                          ? "bg-amber-600 hover:bg-amber-700 active:bg-amber-800 text-white shadow-sm"
                          : "bg-stone-100 text-stone-400 pointer-events-none cursor-not-allowed"
                      }`}
        >
          {inStock ? "View Details" : "Unavailable"}
        </Link>
      </div>
    </div>
  );
};

export default TopTilesCard;
