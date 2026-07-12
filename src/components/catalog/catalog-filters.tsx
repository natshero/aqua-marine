"use client";

import { CategoryItem } from "@/types/category";

interface CatalogFiltersProps {
  categories: CategoryItem[];
  activeCategory: string | null;
  onSelectCategory: (id: string | null) => void;
}

export function CatalogFilters({
  categories,
  activeCategory,
  onSelectCategory,
}: CatalogFiltersProps) {
  return (
    <div className="w-full mb-8 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 md:overflow-visible no-scrollbar">
      <div className="flex gap-2 md:flex-wrap w-max md:w-auto">
        <button
          onClick={() => onSelectCategory(null)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
            activeCategory === null
              ? "bg-primary text-primary-foreground shadow-sm"
              : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
          }`}
        >
          Todos
        </button>
        
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onSelectCategory(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
              activeCategory === category.id
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
}
