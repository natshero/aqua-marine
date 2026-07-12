import { SectionHeading } from "@/components/shared/section-heading";
import { siteConfig } from "@/data/site-config";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { MapPin, Clock, MessageCircle } from "lucide-react";

export function ContactSection() {
  return (
    <section className="py-20 md:py-28 bg-background border-t border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Fale Conosco" 
          subtitle="Estamos à disposição para ajudar com dúvidas, orçamentos ou para montar o kit perfeito para você."
        />

        <div className="max-w-4xl mx-auto bg-card rounded-3xl overflow-hidden shadow-lg border border-border/50">
          <div className="grid grid-cols-1 md:grid-cols-2">
            
            <div className="p-8 md:p-12 bg-secondary/30 flex flex-col justify-center">
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-6">
                Como podemos ajudar?
              </h3>
              
              <ul className="space-y-6 mb-8">
                <li className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-primary shrink-0 mr-4 shadow-sm">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">WhatsApp</h4>
                    <p className="text-sm text-muted-foreground">{siteConfig.whatsappNumber}</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-primary shrink-0 mr-4 shadow-sm">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Localização</h4>
                    <p className="text-sm text-muted-foreground">{siteConfig.city} - {siteConfig.state}</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-primary shrink-0 mr-4 shadow-sm">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Horário de Atendimento</h4>
                    <p className="text-sm text-muted-foreground">Segunda a Sexta, 9h às 18h</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="p-8 md:p-12 flex flex-col items-center text-center justify-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                <MessageCircle className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-heading font-medium text-foreground mb-4">
                Atendimento Rápido
              </h3>
              <p className="text-muted-foreground mb-8">
                A maneira mais rápida de falar conosco é através do WhatsApp. Respondemos o mais breve possível dentro do horário de atendimento.
              </p>
              <WhatsAppButton 
                message={`Olá! Gostaria de falar com a ${siteConfig.name}.`}
                size="lg"
                className="w-full sm:w-auto rounded-full"
              >
                Iniciar conversa
              </WhatsAppButton>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
