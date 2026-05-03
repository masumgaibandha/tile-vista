import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-stone-50 text-center px-4">
      {/* Tile grid decoration */}
      <div className="grid grid-cols-4 gap-1.5 mb-10 opacity-20">
        {[...Array(16)].map((_, i) => (
          <div
            key={i}
            className={`w-8 h-8 rounded-sm ${
              i % 5 === 0
                ? "bg-amber-600"
                : i % 3 === 0
                  ? "bg-stone-400"
                  : "bg-stone-200"
            }`}
          />
        ))}
      </div>

      {/* 404 */}
      <div className="relative mb-4">
        <span className="text-[120px] md:text-[160px] font-extrabold text-stone-100 leading-none select-none">
          404
        </span>
        <span className="absolute inset-0 flex items-center justify-center text-5xl md:text-7xl font-extrabold text-stone-800 leading-none">
          404
        </span>
      </div>

      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-3">
        <span className="block w-6 h-px bg-amber-600" />
        <span className="text-amber-600 text-[11px] font-medium tracking-[3px] uppercase">
          Page Not Found
        </span>
        <span className="block w-6 h-px bg-amber-600" />
      </div>

      {/* Title */}
      <h2 className="font-playfair text-2xl md:text-4xl font-bold text-stone-900 mb-3">
        This tile is missing from our collection
      </h2>

      {/* Description */}
      <p className="text-stone-400 text-[15px] leading-relaxed max-w-sm mb-8">
        The page you are looking for might have been removed, renamed, or is
        temporarily unavailable.
      </p>

      {/* Actions */}
      <div className="flex items-center gap-3">
        <Link
          href="/"
          className="bg-amber-600 hover:bg-amber-700 active:bg-amber-800 text-white text-sm font-semibold px-7 py-3 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
        >
          Back to Home
        </Link>
        <Link
          href="/all-tiles"
          className="text-sm font-medium text-stone-500 border border-stone-200 hover:border-amber-300 hover:text-amber-700 hover:bg-amber-50 px-6 py-3 rounded-full transition-all duration-200"
        >
          Browse Tiles
        </Link>
      </div>

      {/* Bottom tile decoration */}
      <div className="grid grid-cols-8 gap-1 mt-16 opacity-10">
        {[...Array(24)].map((_, i) => (
          <div
            key={i}
            className={`w-6 h-6 rounded-sm ${
              i % 4 === 0
                ? "bg-amber-600"
                : i % 2 === 0
                  ? "bg-stone-400"
                  : "bg-stone-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default NotFoundPage;
