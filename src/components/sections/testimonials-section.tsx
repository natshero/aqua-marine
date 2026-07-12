import { SectionHeading } from "@/components/shared/section-heading";
import { Star } from "lucide-react";

// Placeholder de depoimentos
const testimonials = [
  {
    id: 1,
    name: "Maria S.",
    text: "As velas são incríveis! O aroma preenche a sala inteira e a embalagem é linda. Já comprei para presentear e fez muito sucesso.",
  },
  {
    id: 2,
    name: "Ana Carolina",
    text: "Melhor vela que já comprei. Queima super limpa, não faz fumaça e o cheiro de lavanda realmente acalma o ambiente.",
  },
  {
    id: 3,
    name: "Juliana T.",
    text: "O cuidado com a embalagem é impecável. Dá pra sentir o carinho em cada detalhe. O atendimento foi ótimo também!",
  }
];

export function TestimonialsSection() {
  if (testimonials.length === 0) return null;

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="O que dizem sobre nós" 
          subtitle="O carinho dos nossos clientes é o que nos move a entregar sempre o melhor."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="flex flex-col p-8 rounded-3xl bg-secondary/20 border border-secondary/30 relative"
            >
              <div className="flex gap-1 mb-4 text-primary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              
              <blockquote className="flex-grow text-muted-foreground italic mb-6">
                &quot;{testimonial.text}&quot;
              </blockquote>
              
              <div className="font-medium text-foreground">
                — {testimonial.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
