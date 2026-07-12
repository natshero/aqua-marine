import Image from "next/image";
import { siteConfig } from "@/data/site-config";
import { Button } from "@/components/ui/button";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const instagramImages = [
  "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&q=80&w=600"
];

export function InstagramSection() {
  return (
    <section className="py-20 md:py-28 bg-muted/20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
            <InstagramIcon className="w-6 h-6" />
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-4">
            Acompanhe no Instagram
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mb-8">
            Bastidores da produção artesanal, novos aromas e inspirações para deixar sua casa ainda mais aconchegante.
          </p>
          <Button render={<a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer" />} variant="default" className="rounded-full">
            Seguir a marca
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12 max-w-6xl mx-auto">
          {instagramImages.map((src, idx) => (
            <a 
              key={idx}
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square rounded-2xl overflow-hidden group block shadow-sm border border-border/40"
            >
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                <InstagramIcon className="w-8 h-8 text-white" />
              </div>
              <Image
                src={src}
                alt={`Instagram image ${idx + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
