import { SectionHeading } from "@/components/shared/section-heading";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { categories } from "@/data/categories";
import Link from "next/link";

export function CategoriesSection() {
  return (
    <section className="py-20 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal>
          <SectionHeading 
            title="Categorias" 
            subtitle="Encontre a família olfativa perfeita para o seu momento."
          />
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {categories.map((category) => (
              <Link 
                key={category.id} 
                href={`/catalogo?categoria=${category.id}`}
                className="group relative flex flex-col items-center justify-center p-6 bg-background rounded-2xl shadow-sm border border-border/50 hover:shadow-md transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="font-medium text-foreground text-center">{category.name}</h3>
                <span className="text-xs text-muted-foreground mt-1 group-hover:text-accent transition-colors">
                  Explorar
                </span>
              </Link>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
