import { SectionHeading } from "@/components/shared/section-heading";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { CandleGrid } from "@/components/catalog/candle-grid";
import { candles } from "@/data/candles";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FeaturedProductsSection() {
  const featuredCandles = candles.filter(c => c.featured).slice(0, 3);

  if (featuredCandles.length === 0) return null;

  return (
    <section className="py-20 md:py-28 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal>
          <SectionHeading 
            title="Destaques da Nossa Coleção" 
            subtitle="As fragrâncias mais amadas e escolhidas para criar momentos inesquecíveis."
          />
        </ScrollReveal>
        
        <ScrollReveal delay={200}>
          <CandleGrid candles={featuredCandles} />
        </ScrollReveal>
        
        <ScrollReveal delay={400}>
          <div className="mt-12 text-center flex justify-center">
            <Button render={<Link href="/catalogo" />} variant="outline" size="lg" className="rounded-full group">
              Ver catálogo completo
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
