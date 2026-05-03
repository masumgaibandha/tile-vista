const LoadingPage = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-stone-50 gap-6">
      {/* Animated tile grid */}
      <div className="grid grid-cols-3 gap-1.5">
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className={`w-5 h-5 rounded-sm bg-amber-600 animate-pulse`}
            style={{ animationDelay: `${i * 100}ms` }}
          />
        ))}
      </div>

      {/* Brand */}
      <div className="flex flex-col items-center gap-1">
        <span className="text-stone-800 font-semibold text-base tracking-wide">
          Tile<span className="text-amber-600">Vista</span>
        </span>
        <div className="flex items-center gap-1.5">
          <span className="block w-4 h-px bg-amber-600 animate-pulse" />
          <span className="text-stone-400 text-[11px] tracking-[3px] uppercase">
            Loading
          </span>
          <span className="block w-4 h-px bg-amber-600 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
