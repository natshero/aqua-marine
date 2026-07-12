import Image from "next/image";
import { Candle } from "@/types/candle";
import { formatCurrency } from "@/lib/utils";
import { ProductBadge } from "./product-badge";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";

interface CandleCardProps {
  candle: Candle;
}

export function CandleCard({ candle }: CandleCardProps) {
  return (
    <div className="group flex flex-col h-full bg-card rounded-2xl border border-border/40 overflow-hidden hover:shadow-md transition-all duration-300">
      <div className="relative aspect-square overflow-hidden bg-muted/20">
        {candle.new && <ProductBadge label="Novo" variant="new" />}
        {candle.featured && !candle.new && <ProductBadge label="Destaque" variant="featured" />}
        {candle.customizable && !candle.new && !candle.featured && (
          <ProductBadge label="Personalizável" variant="custom" />
        )}
        
        <Image
          src={candle.image}
          alt={candle.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Hover Overlay & Button */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
          <WhatsAppButton 
            message={`Olá! Quero comprar a vela ${candle.name}.`}
            size="default"
            variant="default"
            className="rounded-full px-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out shadow-lg"
          >
            Comprar Agora
          </WhatsAppButton>
        </div>
        
        {!candle.available && (
          <div className="absolute inset-0 bg-background/60 flex items-center justify-center backdrop-blur-[2px]">
            <span className="bg-background px-4 py-2 rounded-full text-sm font-medium border border-border shadow-sm">
              Esgotado
            </span>
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <div className="mb-2">
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            {candle.category}
          </span>
          <h3 className="text-xl font-heading font-medium text-foreground mt-1 line-clamp-1">
            {candle.name}
          </h3>
        </div>
        
        <p className="text-muted-foreground text-sm line-clamp-2 mb-4 flex-grow">
          {candle.shortDescription}
        </p>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
          <div className="flex flex-col">
            {candle.size && (
              <span className="text-xs text-muted-foreground">{candle.size}</span>
            )}
            <span className="font-medium text-foreground">
              {candle.price ? formatCurrency(candle.price) : "Sob consulta"}
            </span>
          </div>
          
          <WhatsAppButton 
            message={`Olá! Gostaria de saber mais sobre a vela ${candle.name}.`}
            size="sm"
            variant={candle.available ? "default" : "outline"}
            showIcon={false}
            className="rounded-full px-4"
          >
            {candle.available ? "Pedir" : "Avisar"}
          </WhatsAppButton>
        </div>
      </div>
    </div>
  );
}
