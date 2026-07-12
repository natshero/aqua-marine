import { Sparkles, Leaf, HeartHandshake, ShieldCheck } from "lucide-react";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { SectionHeading } from "@/components/shared/section-heading";

const benefits = [
  {
    icon: HeartHandshake,
    title: "Produção Artesanal",
    description: "Cada vela é feita à mão com cuidado e dedicação em cada etapa do processo."
  },
  {
    icon: Sparkles,
    title: "Experiência Sensorial",
    description: "Aromas exclusivos selecionados para despertar sentimentos e criar atmosfera."
  },
  {
    icon: Leaf,
    title: "Escolha de Ingredientes",
    description: "Selecionamos os melhores componentes para garantir uma queima limpa e duradoura."
  },
  {
    icon: ShieldCheck,
    title: "Cuidado e Qualidade",
    description: "Testamos exaustivamente cada formulação para entregar o melhor produto final."
  }
];

export function BenefitsSection() {
  return (
    <section className="py-20 bg-primary text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal>
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4">
              Por que escolher nossas velas?
            </h2>
            <p className="text-primary-foreground/80">
              Produção consciente e ingredientes selecionados para proporcionar 
              a melhor experiência olfativa.
            </p>
          </div>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {benefits.map((benefit, index) => (
            <ScrollReveal key={index} delay={index * 150} className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-primary-foreground/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                <benefit.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-medium mb-3">{benefit.title}</h3>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
