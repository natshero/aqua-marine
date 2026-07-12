import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-20 pb-10 border-t border-primary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-2xl tracking-tight text-primary-foreground flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent shrink-0">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 12 2 12 2C12 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
                <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 12 7 12 7C12 7 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" />
              </svg>
              {siteConfig.name}
            </h3>
            <p className="text-primary-foreground/70 text-sm max-w-xs leading-relaxed">
              {siteConfig.description}
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="font-medium text-lg mb-4 text-primary-foreground/90">Navegação</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li>
                <Link href="/" className="hover:text-primary-foreground transition-colors">Início</Link>
              </li>
              <li>
                <Link href="/catalogo" className="hover:text-primary-foreground transition-colors">Catálogo</Link>
              </li>
              <li>
                <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-medium text-lg mb-4 text-primary-foreground/90">Clube VIP</h4>
            <p className="text-primary-foreground/70 text-sm mb-4">
              Junte-se ao nosso clube VIP e receba 10% off na sua primeira vela {siteConfig.name}.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Seu melhor e-mail" 
                className="bg-primary-foreground/10 border border-primary-foreground/20 rounded-full px-4 py-2 text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-accent w-full"
                required
              />
              <Button type="button" variant="secondary" className="rounded-full shrink-0">
                Participar
              </Button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/50">
          <p>© {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.</p>
          <p>Desenvolvido com sofisticação.</p>
        </div>
      </div>
    </footer>
  );
}
