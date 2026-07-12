import Image from "next/image";
import { SectionHeading } from "@/components/shared/section-heading";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";

export function GiftKitsSection() {
  return (
    <section id="kits" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 w-full max-w-lg mx-auto order-2 md:order-1">
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-lg border border-border/50">
              <div className="absolute inset-0 bg-muted flex items-center justify-center">
                <span className="text-muted-foreground font-medium">Imagem Kits Placeholder</span>
              </div>
              <Image
                src="https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&q=80&w=1000"
                alt="Kit de velas de presente"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          
          <div className="flex-1 order-1 md:order-2">
            <SectionHeading 
              title="Kits e Encomendas" 
              subtitle="O presente perfeito para quem você ama, ou para si mesmo."
              alignment="left"
            />
            
            <ul className="space-y-4 mb-8 text-muted-foreground">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                <p><strong>Datas Comemorativas:</strong> Surpreenda no Dia das Mães, Namorados, Natal e aniversários.</p>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                <p><strong>Lembrancinhas:</strong> Casamentos, batizados e eventos corporativos.</p>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                <p><strong>Personalização:</strong> Rótulos customizados com mensagens especiais.</p>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                <p><strong>Empresas:</strong> Brindes corporativos com a identidade da sua marca.</p>
              </li>
            </ul>
            
            <p className="text-sm text-muted-foreground/80 mb-8 p-4 bg-background border border-border/50 rounded-xl">
              * Detalhes, valores e prazos dependem de disponibilidade e orçamento prévio. Entre em contato para planejar o seu kit ideal.
            </p>
            
            <WhatsAppButton 
              message="Olá! Gostaria de saber mais sobre os kits de presente e encomendas personalizadas."
              size="lg"
              className="rounded-full"
            >
              Consultar opções de kits
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </section>
  );
}
