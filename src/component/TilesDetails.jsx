import Image from "next/image";
import Link from "next/link";

const TilesDetails = ({ tile: tilesDetails }) => {
  const {
    title,
    description,
    image,
    category,
    material,
    dimensions,
    price,
    inStock,
    currency = "USD",
  } = tilesDetails;

  const imgSrc = Array.isArray(image) ? image[0] : image;

  const meta = [
    { label: "Category", value: category },
    { label: "Material", value: material },
    { label: "Dimensions", value: dimensions },
    { label: "Currency", value: currency },
  ];

  return (
    <section className="container mx-auto px-4 sm:px-6 py-14">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Image panel */}
        <div
          className="relative aspect-square w-full rounded-2xl overflow-hidden
                        border border-stone-200 shadow-[0_4px_24px_rgba(0,0,0,0.07)]"
        >
          <Image
            src={imgSrc}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 hover:scale-105"
            priority
          />

          {/* Stock badge */}
          <span
            className={`absolute top-4 right-4 z-10 text-[11px] font-medium tracking-widest
                        uppercase px-3 py-1.5 rounded-full backdrop-blur-sm
                        ${
                          inStock
                            ? "bg-emerald-50/90 text-emerald-700 border border-emerald-200"
                            : "bg-red-50/90 text-red-600 border border-red-200"
                        }`}
          >
            {inStock ? "In Stock" : "Out of Stock"}
          </span>
        </div>

        {/* Details panel */}
        <div className="flex flex-col gap-6">
          {/* Category eyebrow */}
          <div className="flex items-center gap-3">
            <span className="block w-6 h-px bg-amber-600" />
            <span className="text-amber-600 text-[11px] font-medium tracking-[3px] uppercase">
              {category}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-playfair text-4xl font-bold text-stone-900 leading-tight">
            {title}
          </h1>

          {/* Description */}
          <p className="text-stone-500 text-[15px] leading-relaxed border-l-2 border-amber-200 pl-4">
            {description}
          </p>

          {/* Price */}
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold text-amber-700">
              ${Number(price).toFixed(2)}
            </span>
            <span className="text-stone-400 text-sm">/ per tile</span>
          </div>

          {/* Meta grid */}
          <div className="grid grid-cols-2 gap-3">
            {meta.map(({ label, value }) => (
              <div
                key={label}
                className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3"
              >
                <p className="text-[11px] text-stone-400 uppercase tracking-wider mb-1">
                  {label}
                </p>
                <p className="text-stone-800 font-medium text-sm capitalize">
                  {value}
                </p>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-stone-100" />

          {/* Actions */}
          <div className="flex gap-3">
            <button
              disabled={!inStock}
              className={`flex-1 py-3.5 rounded-xl text-sm font-semibold tracking-wide
                          transition-all duration-200 shadow-sm
                          ${
                            inStock
                              ? "bg-amber-600 hover:bg-amber-700 active:bg-amber-800 text-white hover:shadow-md"
                              : "bg-stone-100 text-stone-400 cursor-not-allowed"
                          }`}
            >
              {inStock ? "Buy Now" : "Unavailable"}
            </button>

            <Link
              href="/all-tiles"
              className="px-6 py-3.5 rounded-xl text-sm font-medium text-stone-600
                         border border-stone-200 hover:border-amber-300 hover:text-amber-700
                         hover:bg-amber-50 transition-all duration-200"
            >
              ← Back
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TilesDetails;
