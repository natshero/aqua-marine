import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site-config";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-heading mb-4 text-foreground">
        Página não encontrada
      </h2>
      <p className="text-muted-foreground mb-8 max-w-md">
        Desculpe, não conseguimos encontrar a página que você está procurando em {siteConfig.name}.
      </p>
      <Button render={<Link href="/" />} className="rounded-full">
        Voltar para o início
      </Button>
    </div>
  );
}
