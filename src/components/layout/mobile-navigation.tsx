"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site-config";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";

const links = [
  { name: "Início", href: "/" },
  { name: "Velas", href: "/catalogo" },
  { name: "Sobre", href: "/#sobre" },
  { name: "Kits", href: "/#kits" },
  { name: "Cuidados", href: "/#cuidados" },
];

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(true)}
        aria-label="Abrir menu"
        className="text-foreground"
      >
        <Menu className="h-6 w-6" />
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex flex-col pt-20 px-6 animate-slide-in-right">
          <Button
            variant="ghost"
            size="icon"
            onClick={closeMenu}
            className="absolute top-4 right-4 text-foreground"
            aria-label="Fechar menu"
          >
            <X className="h-6 w-6" />
          </Button>

          <div className="flex flex-col items-center gap-10 text-3xl font-heading mt-10">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
            
            <WhatsAppButton 
              message={`Olá! Vim pelo site da ${siteConfig.name} e gostaria de tirar algumas dúvidas.`}
              className="mt-8 rounded-full"
            >
              Falar conosco
            </WhatsAppButton>
          </div>
        </div>
      )}
    </div>
  );
}
