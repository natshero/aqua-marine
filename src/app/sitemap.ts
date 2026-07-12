import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  // Em um projeto real, a base url viria de variável de ambiente.
  const baseUrl = 'https://seusite.com.br'

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/catalogo`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]
}
