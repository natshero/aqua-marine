"use client";

import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MobileNavigation } from "./mobile-navigation";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { useCart } from "@/contexts/cart-context";

const links = [
  { name: "Início", href: "/" },
  { name: "Velas", href: "/catalogo" },
  { name: "Sobre", href: "/#sobre" },
  { name: "Kits", href: "/#kits" },
  { name: "Cuidados", href: "/#cuidados" },
];

export function Header() {
  const { totalItems, setIsCartOpen } = useCart();

  return (
    <header className="sticky top-0 z-40 w-full bg-background/60 backdrop-blur-xl border-b border-border/20 shadow-sm transition-all duration-300">
      <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2 group">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-accent group-hover:scale-110 transition-transform duration-300"
            >
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 12 2 12 2C12 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
              <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 12 7 12 7C12 7 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" />
            </svg>
            <span className="font-heading font-semibold text-2xl tracking-tight text-foreground group-hover:text-primary transition-colors">
              {siteConfig.name}
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-4">
          <div className="hidden md:block">
            <WhatsAppButton
              message={`Olá! Gostaria de falar com a ${siteConfig.name}.`}
              variant="outline"
              size="sm"
              className="rounded-full"
            >
              Contato
            </WhatsAppButton>
          </div>

          <Button
            onClick={() => setIsCartOpen(true)}
            variant="default"
            size="sm"
            className="rounded-full relative px-4"
          >
            <ShoppingBag className="w-4 h-4 md:mr-2" />
            <span className="hidden md:inline">Sacola</span>
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-accent-foreground shadow-sm">
                {totalItems}
              </span>
            )}
          </Button>
        </div>

        {/* Mobile Navigation Component */}
        <MobileNavigation />
      </div>
    </header>
  );
}
