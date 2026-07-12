"use client";

import Image from "next/image";
import { Candle } from "@/types/candle";
import { formatCurrency } from "@/lib/utils";
import { ProductBadge } from "./product-badge";
import { useCart } from "@/contexts/cart-context";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

interface CandleCardProps {
  candle: Candle;
}

export function CandleCard({ candle }: CandleCardProps) {
  const { addItem } = useCart();

  return (
    <div className="group flex flex-col h-full bg-card rounded-2xl border border-border/40 overflow-hidden hover:shadow-md transition-all duration-300">
      <div className="relative aspect-[4/5] overflow-hidden bg-muted/20">
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

        <div className="flex flex-col mt-auto pt-4 border-t border-border/50 gap-4">
          <div className="flex items-center justify-between">
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
              variant="ghost"
              showIcon={false}
              className="rounded-full px-4 text-xs h-8 text-muted-foreground hover:text-foreground"
            >
              Dúvidas?
            </WhatsAppButton>
          </div>

          <Button 
            onClick={(e) => {
              e.preventDefault();
              addItem(candle);
            }}
            disabled={!candle.available}
            className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-11"
          >
            <ShoppingBag className="w-4 h-4 mr-2" />
            {candle.available ? "Adicionar à Sacola" : "Esgotado"}
          </Button>
        </div>
      </div>
    </div>
  );
}
