"use client";

const CategoryPage = ({ categories, selected, onSelect }) => {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onSelect("all")}
        className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200
          ${selected === "all"
            ? "bg-amber-600 text-white shadow-sm"
            : "bg-white border border-stone-200 text-stone-500 hover:border-amber-300 hover:text-amber-700 hover:bg-amber-50"
          }`}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onSelect(category.name.toLowerCase())}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200
            ${selected === category.name.toLowerCase()
              ? "bg-amber-600 text-white shadow-sm"
              : "bg-white border border-stone-200 text-stone-500 hover:border-amber-300 hover:text-amber-700 hover:bg-amber-50"
            }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryPage;
