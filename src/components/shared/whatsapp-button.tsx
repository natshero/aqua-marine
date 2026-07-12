import { Button } from "@/components/ui/button";
import { createWhatsAppUrl } from "@/lib/whatsapp";
import { siteConfig } from "@/data/site-config";
import { MessageCircle } from "lucide-react";
import type { ButtonProps } from "@/components/ui/button";

interface WhatsAppButtonProps extends ButtonProps {
  message: string;
  showIcon?: boolean;
  children?: React.ReactNode;
}

export function WhatsAppButton({
  message,
  showIcon = true,
  children,
  className,
  ...props
}: WhatsAppButtonProps) {
  const href = createWhatsAppUrl(siteConfig.whatsappNumber, message);

  return (
    <Button
      render={<a href={href} target="_blank" rel="noopener noreferrer" />}
      className={className}
      {...props}
    >
      {showIcon && <MessageCircle className="w-4 h-4 mr-2" />}
      {children || "Falar no WhatsApp"}
    </Button>
  );
}
