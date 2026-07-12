"use client";

import { useState, useMemo, Suspense } from "react";
import { SectionHeading } from "@/components/shared/section-heading";
import { CatalogFilters } from "@/components/catalog/catalog-filters";
import { CandleGrid } from "@/components/catalog/candle-grid";
import { candles } from "@/data/candles";
import { categories } from "@/data/categories";

function CatalogContent() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredCandles = useMemo(() => {
    if (!activeCategory) return candles;
    return candles.filter((candle) => candle.category === activeCategory);
  }, [activeCategory]);

  return (
    <main className="flex-1 flex flex-col py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Nosso Catálogo" 
          subtitle="Explore todas as nossas fragrâncias e encontre a vela perfeita para o seu momento."
        />

        <div className="mt-8">
          <CatalogFilters 
            categories={categories}
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />
          
          <div className="mt-8">
            <CandleGrid candles={filteredCandles} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default function CatalogPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Carregando catálogo...</div>}>
      <CatalogContent />
    </Suspense>
  );
}
