"use client";

import { useCart } from "@/contexts/cart-context";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { generateWhatsAppCartUrl } from "@/lib/whatsapp";
import Image from "next/image";

export function CartSheet() {
  const {
    isCartOpen,
    setIsCartOpen,
    items,
    removeItem,
    updateQuantity,
    totalPrice,
  } = useCart();

  const handleCheckout = () => {
    const url = generateWhatsAppCartUrl(items, totalPrice);
    window.open(url, "_blank");
  };

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent className="flex flex-col w-full sm:max-w-md bg-background border-l border-border/40 p-0 shadow-2xl overflow-hidden">
        <SheetHeader className="p-6 border-b border-border/30">
          <SheetTitle className="font-heading text-2xl flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-accent" />
            Sua Sacola
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <div className="w-16 h-16 rounded-full bg-secondary/30 text-muted-foreground flex items-center justify-center mb-4">
              <ShoppingBag className="w-8 h-8" />
            </div>
            <h3 className="font-heading font-medium text-lg mb-2">
              Sua sacola está vazia
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              Descubra nossas fragrâncias e encontre a sua favorita.
            </p>
            <Button
              onClick={() => setIsCartOpen(false)}
              className="rounded-full"
              variant="outline"
            >
              Continuar comprando
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-6 scrollbar-custom">
              <div className="flex flex-col gap-6">
                {items.map((item) => (
                  <div
                    key={item.candle.id}
                    className="flex gap-4 items-center group"
                  >
                    <div className="relative w-20 h-24 rounded-lg overflow-hidden bg-secondary">
                      <Image
                        src={item.candle.image}
                        alt={item.candle.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground">
                        {item.candle.name}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        {item.candle.price ? formatCurrency(item.candle.price) : "Sob consulta"}
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center border border-border/60 rounded-full px-2 py-1">
                          <button
                            onClick={() =>
                              updateQuantity(item.candle.id, item.quantity - 1)
                            }
                            disabled={item.quantity <= 1}
                            className="p-1 text-muted-foreground hover:text-foreground disabled:opacity-50 transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-sm w-6 text-center font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.candle.id, item.quantity + 1)
                            }
                            className="p-1 text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.candle.id)}
                          className="p-2 text-muted-foreground hover:text-destructive transition-colors ml-auto"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <SheetFooter className="border-t border-border/30 p-6 flex flex-col gap-4 bg-background">
              <div className="flex items-center justify-between font-heading text-lg font-medium">
                <span>Total</span>
                <span>{formatCurrency(totalPrice)}</span>
              </div>
              <Button
                onClick={handleCheckout}
                className="w-full rounded-full h-12 text-base font-medium shadow-sm hover:shadow transition-shadow"
              >
                Finalizar no WhatsApp
              </Button>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
