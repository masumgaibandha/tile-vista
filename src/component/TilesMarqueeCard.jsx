import Image from "next/image";

const categoryColors = {
  ceramic: "bg-blue-50 text-blue-700",
  marble: "bg-stone-100 text-stone-600",
  granite: "bg-zinc-100 text-zinc-600",
  wood: "bg-orange-50 text-orange-700",
  decorative: "bg-purple-50 text-purple-700",
  mosaic: "bg-teal-50 text-teal-700",
  stone: "bg-amber-50 text-amber-700",
  luxury: "bg-yellow-50 text-yellow-700",
};

const TilesMarqueeCard = ({ tile }) => {
  const { title, description, image, category, price, inStock } = tile;
  const imgSrc = Array.isArray(image) ? image[0] : image;
  const badgeClass = categoryColors[category] ?? "bg-stone-100 text-stone-600";

  return (
    <div className="mx-3 w-60 flex-shrink-0">
      <div
        className="group bg-white rounded-2xl overflow-hidden border border-stone-200
                      hover:border-amber-200 hover:shadow-[0_8px_28px_rgba(180,83,9,0.10)]
                      transition-all duration-300 flex flex-col h-[320px]"
      >
        {/* Image — fixed height */}
        <div className="relative w-full h-44 flex-shrink-0 overflow-hidden">
          <Image
            src={imgSrc}
            alt={title}
            fill
            sizes="240px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Category badge */}
          <span
            className={`absolute top-3 left-3 z-10 text-[10px] font-medium tracking-wide uppercase px-2.5 py-1 rounded-full ${badgeClass}`}
          >
            {category}
          </span>

          {/* Out of stock */}
          {!inStock && (
            <div className="absolute inset-0 bg-stone-900/50 flex items-center justify-center z-10">
              <span className="bg-stone-900/80 text-stone-200 text-[10px] font-medium tracking-widest uppercase px-3 py-1.5 rounded-full">
                Out of Stock
              </span>
            </div>
          )}
        </div>

        {/* Body — fills remaining space */}
        <div className="p-4 flex flex-col flex-1 overflow-hidden">
          <div className="flex items-start justify-between gap-2 mb-1.5">
            <h3 className="text-stone-900 font-semibold text-[14px] leading-snug line-clamp-1">
              {title}
            </h3>
            <span className="text-amber-700 font-bold text-[14px] whitespace-nowrap">
              ${Number(price).toFixed(2)}
            </span>
          </div>

          <p className="text-stone-400 text-[12px] leading-relaxed line-clamp-2">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TilesMarqueeCard;
