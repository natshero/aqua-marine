export function createWhatsAppUrl(phone: string, message: string): string {
  const normalizedPhone = phone.replace(/\D/g, "");
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${normalizedPhone}?text=${encodedMessage}`;
}

import { Candle } from "@/types/candle";
import { CartItem } from "@/contexts/cart-context";
import { siteConfig } from "@/data/site-config";
import { formatCurrency } from "./utils";

export function generateWhatsAppUrl(candle: Candle): string {
  const message = `Olá! Tenho interesse na vela *${candle.name}* (${formatCurrency(candle.price ?? 0)}). Poderia me passar mais informações?`;
  return createWhatsAppUrl(siteConfig.whatsappNumber, message);
}

export function generateWhatsAppCartUrl(items: CartItem[], total: number): string {
  let message = `Olá! Gostaria de finalizar um pedido da *${siteConfig.name}*:\n\n`;
  
  items.forEach(item => {
    message += `▪ ${item.quantity}x ${item.candle.name} - ${formatCurrency((item.candle.price ?? 0) * item.quantity)}\n`;
  });
  
  message += `\n*Total estimado:* ${formatCurrency(total)}\n\n`;
  message += `Como podemos prosseguir com o pagamento e entrega?`;
  
  return createWhatsAppUrl(siteConfig.whatsappNumber, message);
}
