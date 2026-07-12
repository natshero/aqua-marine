import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site-config";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 py-20 md:py-32 flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left z-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-medium text-foreground mb-6 leading-[1.1] max-w-2xl tracking-tight opacity-0 animate-fade-up delay-100">
            Aromas que transformam momentos em memórias
          </h1>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl opacity-0 animate-fade-up delay-200">
            {siteConfig.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto opacity-0 animate-fade-up delay-300">
            <Button render={<Link href="/catalogo" />} size="lg" className="rounded-full px-8 text-base">
              Conhecer as velas
            </Button>
            <WhatsAppButton
              message={`Olá! Vim pelo site e gostaria de fazer um pedido.`}
              variant="outline"
              size="lg"
              className="rounded-full px-8 text-base bg-background"
            >
              Fazer pedido
            </WhatsAppButton>
          </div>
        </div>
        
        <div className="flex-1 relative w-full max-w-md md:max-w-none aspect-[4/5] md:aspect-square z-10 rounded-3xl overflow-hidden shadow-xl border border-border/50 opacity-0 animate-fade-in delay-500">
          {/* O placeholder usa div. Quando a imagem real for adicionada, substituir por <Image /> */}
          <div className="absolute inset-0 bg-secondary/30 flex items-center justify-center">
            <span className="text-muted-foreground font-medium">Imagem Hero Placeholder</span>
          </div>
          <Image
            src="https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&q=80&w=1200"
            alt="Velas aromáticas artesanais"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
      
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] rounded-full bg-accent/15 blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl opacity-60 pointer-events-none" />
    </section>
  );
}
