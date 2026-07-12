import Image from "next/image";
import { SectionHeading } from "@/components/shared/section-heading";
import { siteConfig } from "@/data/site-config";

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-center">
          
          <div className="flex-1 w-full max-w-lg">
            <SectionHeading 
              title="A Essência da Nossa Marca" 
              alignment="left"
            />
            
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                A <strong>{siteConfig.name}</strong> nasceu do desejo de transformar a atmosfera da sua casa através da perfumaria de ambiente. Acreditamos que os aromas têm o poder de eternizar momentos, despertar memórias afetivas e criar um refúgio de aconchego no seu dia a dia.
              </p>
              <p>
                Cada vela é derramada à mão, uma a uma, em um processo artesanal focado nos mínimos detalhes. Da escolha cuidadosa dos aromas e essências premium até a elaboração das embalagens, tudo é feito com intenção e carinho.
              </p>
              <p>
                Nosso propósito é proporcionar mais do que apenas uma vela bonita: queremos entregar uma verdadeira experiência sensorial que abrace o seu lar.
              </p>
            </div>
          </div>

          <div className="flex-1 w-full relative">
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl rotate-3 relative border-8 border-background">
              <div className="absolute inset-0 bg-muted flex items-center justify-center">
                <span className="text-muted-foreground font-medium">Imagem Sobre Placeholder</span>
              </div>
              <Image
                src="https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&q=80&w=1000"
                alt="Produção artesanal de velas"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            
            {/* Elemento decorativo */}
            <div className="absolute -bottom-8 -left-8 bg-secondary rounded-full p-8 hidden md:block">
              <p className="font-heading font-semibold text-secondary-foreground text-center">
                Feito<br/>à mão
              </p>
            </div>
          </div>

        </div>
      </div>
      
      {/* Background decorativo */}
      <div className="absolute top-1/2 -right-64 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
    </section>
  );
}
