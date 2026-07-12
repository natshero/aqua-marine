import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  // Configuração básica do robots para SEO.
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    // Em produção, isso seria configurado via env variable,
    // mas usaremos um placeholder fixo que pode ser atualizado.
    sitemap: 'https://seusite.com.br/sitemap.xml',
  }
}
