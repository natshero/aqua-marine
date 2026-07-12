import { SectionHeading } from "@/components/shared/section-heading";
import { Flame, Wind, Clock, AlertTriangle } from "lucide-react";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

const careInstructions = [
  {
    icon: Flame,
    title: "A primeira queima",
    description: "Deixe a vela queimar até que a cera derretida alcance a borda do frasco. Isso evita a formação de um \"túnel\" e garante o aproveitamento total da cera."
  },
  {
    icon: Wind,
    title: "Apare o pavio",
    description: "Sempre antes de reacender, apare o pavio em cerca de 5mm. Isso garante uma chama limpa, sem fumaça preta e aumenta a durabilidade da sua vela."
  },
  {
    icon: Clock,
    title: "Tempo de queima",
    description: "Recomendamos queimar a vela por no máximo 3 a 4 horas seguidas. Deixe esfriar completamente antes de acender novamente."
  },
  {
    icon: AlertTriangle,
    title: "Segurança",
    description: "Nunca deixe a vela acesa sem supervisão. Mantenha longe de crianças, animais, correntes de ar e objetos inflamáveis. Descarte quando restar 5mm de cera no fundo."
  }
];

export function CandleCareSection() {
  return (
    <section id="cuidados" className="py-20 md:py-28 bg-card border-y border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Cuidados com a sua Vela" 
          subtitle="Dicas importantes para uma queima limpa, segura e para prolongar a vida útil do seu produto."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 max-w-5xl mx-auto">
          {careInstructions.map((instruction, index) => {
            const Icon = instruction.icon;
            return (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-background border border-border/40 hover:shadow-sm transition-shadow h-full">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                      {instruction.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {instruction.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
