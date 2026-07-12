# Project Instructions — Site de Velas Aromáticas

## 1. Regra principal

Antes de escrever qualquer código, criar qualquer componente, escolher qualquer padrão visual ou instalar qualquer dependência, leia integralmente todos os arquivos de instruções e skills disponíveis na pasta `docs`.

É obrigatório seguir rigorosamente as skills relacionadas a:

- shadcn/ui
- UI/UX Pro Max
- Frontend Design
- React
- Next.js
- TypeScript
- Tailwind CSS
- Acessibilidade
- SEO
- Performance
- Responsividade
- Design System

Caso exista conflito entre este documento e alguma skill da pasta `docs`, siga esta ordem de prioridade:

1. Requisitos funcionais e de negócio deste documento.
2. Skills específicas da pasta `docs`.
3. Documentação oficial das tecnologias utilizadas.
4. Boas práticas gerais.

Não ignore as skills, não implemente uma solução genérica e não substitua os padrões definidos nelas por preferências próprias.

---

## 2. Objetivo do projeto

Criar um site institucional e catálogo digital para uma marca de velas aromáticas artesanais.

O site não será inicialmente uma loja virtual.

Não haverá:

- Carrinho de compras.
- Checkout.
- Pagamento online.
- Login.
- Cadastro de usuários.
- Painel administrativo.
- Backend próprio.
- Banco de dados.
- Controle de estoque em tempo real.

O objetivo principal do site é:

- Apresentar a marca.
- Mostrar os tipos de velas disponíveis.
- Apresentar aromas, categorias, tamanhos e características.
- Divulgar kits, presentes e encomendas personalizadas.
- Gerar confiança.
- Direcionar o visitante para o WhatsApp.
- Direcionar o visitante para o Instagram.
- Facilitar vendas locais e pedidos pela internet.

O site deve funcionar como uma combinação de:

- Landing page.
- Catálogo digital.
- Apresentação institucional.
- Canal de aquisição de clientes.
- Página de apoio para Instagram, Google e QR Codes.

---

## 3. Stack obrigatória

Utilize:

- Next.js com App Router.
- React.
- TypeScript em modo estrito.
- Tailwind CSS.
- shadcn/ui.
- Lucide React.
- ESLint.
- Prettier, caso já esteja configurado no projeto.
- Next.js Image para imagens.
- Next.js Metadata API para SEO.

Não utilize bibliotecas adicionais sem necessidade real.

Antes de instalar uma dependência:

1. Verifique se o recurso já existe no Next.js.
2. Verifique se o recurso já existe no shadcn/ui.
3. Verifique se pode ser resolvido com React, TypeScript e Tailwind.
4. Justifique tecnicamente a necessidade da nova dependência.

Evite:

- Bibliotecas de animação pesadas.
- Bibliotecas de estado global sem necessidade.
- CSS-in-JS.
- Componentes duplicados.
- Dependências para funcionalidades simples.
- Uso excessivo de JavaScript no cliente.

---

## 4. Arquitetura e renderização

Priorize Server Components.

Use Client Components apenas quando houver necessidade real, como:

- Filtros interativos do catálogo.
- Menu mobile.
- Carrossel, caso seja realmente necessário.
- Botões com comportamento dinâmico.
- Interações que dependam do navegador.
- Estado local do usuário.

Não transforme a aplicação inteira em Client Component.

Não adicione `"use client"` em componentes que apenas renderizam conteúdo estático.

O site deve priorizar:

- HTML gerado no servidor.
- Baixo volume de JavaScript enviado ao navegador.
- Boa performance.
- Boa indexação.
- Carregamento rápido.
- Imagens otimizadas.
- Componentes pequenos e reutilizáveis.

---

## 5. Estrutura inicial sugerida

Utilize uma organização semelhante a:

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── sitemap.ts
│   ├── robots.ts
│   ├── not-found.tsx
│   └── catalogo/
│       └── page.tsx
├── components/
│   ├── ui/
│   ├── layout/
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   └── mobile-navigation.tsx
│   ├── sections/
│   │   ├── hero-section.tsx
│   │   ├── featured-products-section.tsx
│   │   ├── categories-section.tsx
│   │   ├── gift-kits-section.tsx
│   │   ├── about-section.tsx
│   │   ├── benefits-section.tsx
│   │   ├── candle-care-section.tsx
│   │   ├── testimonials-section.tsx
│   │   ├── instagram-section.tsx
│   │   └── contact-section.tsx
│   ├── catalog/
│   │   ├── candle-card.tsx
│   │   ├── candle-grid.tsx
│   │   ├── catalog-filters.tsx
│   │   ├── category-filter.tsx
│   │   └── product-badge.tsx
│   └── shared/
│       ├── section-heading.tsx
│       ├── whatsapp-button.tsx
│       ├── social-link.tsx
│       └── empty-state.tsx
├── data/
│   ├── candles.ts
│   ├── categories.ts
│   ├── testimonials.ts
│   └── site-config.ts
├── lib/
│   ├── utils.ts
│   ├── whatsapp.ts
│   ├── formatters.ts
│   └── seo.ts
├── types/
│   ├── candle.ts
│   ├── category.ts
│   └── site.ts
└── assets/
    └── images/
```

A estrutura pode ser ajustada se alguma skill da pasta `docs` definir um padrão melhor.

Evite criar pastas vazias ou abstrações sem uso imediato.

---

## 6. Páginas iniciais

Crie inicialmente:

### Página inicial

Rota:

```text
/
```

A página inicial deve apresentar a marca e destacar os principais produtos.

### Catálogo

Rota:

```text
/catalogo
```

O catálogo deve exibir todos os produtos disponíveis e permitir filtros simples por categoria.

Não é necessário criar uma página individual para cada produto na primeira versão.

Entretanto, a arquitetura deve permitir futuramente rotas como:

```text
/catalogo/[slug]
```

---

## 7. Estrutura da página inicial

A página inicial deve conter as seguintes seções, nesta ordem aproximada:

1. Header.
2. Hero.
3. Produtos em destaque.
4. Categorias de aromas.
5. Benefícios ou diferenciais da marca.
6. Kits para presentes.
7. Sobre a marca.
8. Encomendas personalizadas.
9. Cuidados com as velas.
10. Depoimentos.
11. Instagram.
12. Contato.
13. Footer.

A ordem pode ser ajustada quando houver justificativa de UX, desde que a página mantenha uma narrativa clara.

---

## 8. Header

O header deve conter:

- Logotipo ou nome da marca.
- Links para as principais seções.
- Link para o catálogo.
- Botão de contato pelo WhatsApp.
- Menu mobile acessível.

Links sugeridos:

- Início.
- Velas.
- Kits.
- Sobre.
- Cuidados.
- Contato.

Regras:

- O header deve ser simples.
- Pode ser fixo ou sticky, desde que não prejudique a experiência.
- O estado ativo deve ser perceptível.
- O menu mobile deve funcionar por teclado.
- Não use navegação excessivamente complexa.

---

## 9. Hero

O hero deve transmitir:

- A proposta da marca.
- Sensação de aconchego.
- Produto artesanal.
- Bem-estar.
- Presentes especiais.
- Identidade visual elegante.

Conteúdo inicial sugerido:

### Título

```text
Aromas que transformam momentos em memórias
```

### Texto

```text
Velas aromáticas artesanais criadas para trazer aconchego, personalidade e bem-estar para cada ambiente.
```

### Ações

- Conhecer as velas.
- Fazer pedido pelo WhatsApp.

O hero deve conter uma fotografia de alta qualidade de uma vela acesa ou composição de produtos.

Evite sliders automáticos no hero.

---

## 10. Catálogo de produtos

O catálogo deve ser gerado a partir de dados centralizados.

Não escreva os produtos diretamente dentro dos componentes.

Crie um tipo semelhante a:

```ts
export type CandleCategory =
  | "floral"
  | "doce"
  | "citrico"
  | "amadeirado"
  | "refrescante"
  | "especial";

export interface Candle {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description?: string;
  category: CandleCategory;
  fragranceNotes?: string[];
  size?: string;
  burnTime?: string;
  price?: number;
  image: string;
  gallery?: string[];
  featured: boolean;
  available: boolean;
  new?: boolean;
  customizable?: boolean;
}
```

Crie dados iniciais de demonstração em:

```text
src/data/candles.ts
```

Inclua pelo menos seis produtos fictícios e claramente identificados como conteúdo inicial editável.

Sugestões:

- Lavanda e Baunilha.
- Canela e Maçã.
- Flor de Algodão.
- Capim-Limão.
- Cedro e Âmbar.
- Café e Caramelo.

Os dados devem ser fáceis de substituir posteriormente.

---

## 11. Cards de produtos

Cada card deve apresentar:

- Imagem.
- Nome.
- Categoria ou família olfativa.
- Descrição curta.
- Tamanho, quando disponível.
- Tempo de queima, quando disponível.
- Preço ou texto “a partir de”, quando disponível.
- Estado de disponibilidade.
- Badge de lançamento, destaque ou personalização, quando aplicável.
- Botão para pedir pelo WhatsApp.

O card deve ser:

- Responsivo.
- Acessível.
- Visualmente consistente.
- Fácil de escanear.
- Otimizado para imagens.
- Sem excesso de informações.

O botão do WhatsApp deve montar uma mensagem contextual com o nome do produto.

Exemplo:

```text
Olá! Gostaria de saber mais sobre a vela Lavanda e Baunilha.
```

---

## 12. Filtros do catálogo

Na primeira versão, implemente filtros simples por categoria.

Categorias sugeridas:

- Todos.
- Florais.
- Doces.
- Cítricos.
- Amadeirados.
- Refrescantes.
- Especiais.

Regras:

- O filtro deve ser rápido.
- Deve funcionar bem no mobile.
- Não precisa utilizar URL query params inicialmente, mas a implementação pode ser preparada para isso.
- Não use estado global.
- Use estado local apenas no componente do catálogo.
- Exiba um estado vazio caso nenhum item corresponda ao filtro.

Não crie busca textual, ordenação avançada ou paginação sem necessidade.

---

## 13. Kits e encomendas

Crie uma seção para:

- Kits de presente.
- Datas comemorativas.
- Aniversários.
- Casamentos.
- Lembrancinhas.
- Empresas.
- Personalização de rótulos.
- Combinações de aromas.
- Encomendas em quantidade.

Inclua uma chamada para contato pelo WhatsApp.

Essa seção deve destacar que os detalhes finais dependem de disponibilidade e orçamento.

---

## 14. Sobre a marca

Crie uma seção institucional contendo texto inicial editável.

Ela deve comunicar:

- Produção artesanal.
- Cuidado em cada etapa.
- Escolha de aromas.
- Experiência sensorial.
- Embalagem.
- Intenção de criar momentos especiais.

Não invente informações técnicas ou certificações.

Não declare:

- Produto vegano.
- Produto ecológico.
- Cera 100% vegetal.
- Produto não tóxico.
- Benefícios terapêuticos.
- Propriedades médicas.
- Sustentabilidade certificada.

Essas informações só podem ser exibidas quando forem confirmadas pelo proprietário da marca.

---

## 15. Cuidados com as velas

Crie uma seção educativa com orientações gerais.

Exemplos:

- Aparar o pavio antes de acender.
- Manter a vela sobre uma superfície resistente ao calor.
- Não deixar a vela acesa sem supervisão.
- Manter longe de crianças, animais, tecidos e objetos inflamáveis.
- Evitar correntes de ar.
- Não mover a vela enquanto a cera estiver líquida.
- Respeitar o tempo máximo de queima recomendado.
- Interromper o uso quando restar pouca cera no recipiente.

Apresente essas informações de maneira clara, sem alarmismo.

---

## 16. Depoimentos

Crie uma seção preparada para depoimentos.

Na versão inicial:

- Utilize conteúdos fictícios identificados no código como placeholders.
- Não apresente depoimentos fictícios como avaliações reais da marca.
- Facilite a remoção da seção caso ainda não existam avaliações verdadeiras.

O conteúdo publicado em produção deverá usar somente avaliações reais e autorizadas.

---

## 17. Instagram

Crie uma seção convidando o visitante a acompanhar a marca no Instagram.

Não implemente integração com API do Instagram na primeira versão.

Utilize:

- Imagens locais demonstrativas.
- Link para o perfil.
- CTA para acompanhar lançamentos e bastidores.

Não dependa de embeds externos pesados.

---

## 18. WhatsApp

Centralize as informações de contato em:

```text
src/data/site-config.ts
```

Exemplo:

```ts
export const siteConfig = {
  name: "Nome da Marca",
  description:
    "Velas aromáticas artesanais para transformar momentos e ambientes.",
  whatsappNumber: "5500000000000",
  instagramUrl: "https://instagram.com/nomedamarca",
  city: "Nome da cidade",
  state: "UF",
};
```

Crie uma função utilitária para gerar os links.

Exemplo:

```ts
export function createWhatsAppUrl(
  phone: string,
  message: string,
): string {
  const normalizedPhone = phone.replace(/\D/g, "");
  const encodedMessage = encodeURIComponent(message);

  return `https://wa.me/${normalizedPhone}?text=${encodedMessage}`;
}
```

Nunca espalhe o número do WhatsApp diretamente por vários componentes.

Inclua:

- CTA no hero.
- CTA nos cards.
- CTA na seção de kits.
- CTA na seção de contato.
- Botão flutuante opcional, caso não prejudique a experiência mobile.

O botão flutuante não deve cobrir conteúdo ou controles.

---

## 19. Direção visual

A identidade visual deve transmitir:

- Aconchego.
- Elegância.
- Artesanal.
- Calma.
- Cuidado.
- Sensação premium sem parecer inacessível.
- Produto feito para presentear e decorar.

Referências visuais:

- Tons creme.
- Bege.
- Areia.
- Marrom suave.
- Terracota.
- Verde sálvia.
- Preto ou grafite em pequenos detalhes.
- Branco quente.

Não use todas essas cores ao mesmo tempo.

Defina uma paleta pequena e consistente.

Evite:

- Cores neon.
- Gradientes exagerados.
- Sombras pesadas.
- Glassmorphism excessivo.
- Bordas em todos os elementos.
- Layout genérico de dashboard.
- Excesso de cards.
- Ícones decorativos sem função.
- Animações chamativas.
- Visual de loja de tecnologia.

---

## 20. Tipografia

Utilize no máximo duas famílias tipográficas:

- Uma fonte elegante para títulos.
- Uma fonte altamente legível para textos.

Use `next/font`.

Não carregue fontes externas manualmente por CSS.

A tipografia deve possuir:

- Hierarquia clara.
- Tamanhos responsivos.
- Altura de linha confortável.
- Bom contraste.
- Comprimento de linha adequado.

Evite fontes manuscritas em textos longos.

---

## 21. Design System

Crie tokens consistentes para:

- Cores.
- Tipografia.
- Espaçamentos.
- Raios de borda.
- Sombras.
- Containers.
- Breakpoints.
- Estados de foco.
- Estados de hover.
- Estados desabilitados.

Utilize variáveis CSS compatíveis com o padrão do shadcn/ui.

Não crie valores visuais aleatórios em cada componente.

Os componentes devem compartilhar:

- Mesma linguagem de bordas.
- Mesma escala de espaçamento.
- Mesma hierarquia tipográfica.
- Mesmos estados interativos.
- Mesmo comportamento responsivo.

---

## 22. shadcn/ui

Use componentes do shadcn/ui quando fizer sentido.

Possíveis componentes:

- Button.
- Sheet.
- Badge.
- Card.
- Separator.
- Accordion.
- Tabs ou Toggle Group para filtros, caso a skill recomende.
- Dialog somente se houver necessidade real.
- Tooltip somente quando a informação não puder ser apresentada de forma visível.

Não force o uso de shadcn/ui em tudo.

Não modifique componentes internos sem necessidade.

Mantenha os componentes em:

```text
src/components/ui
```

Componentes de negócio não devem ficar em `ui`.

---

## 23. Responsividade

Adote abordagem mobile-first.

O site deve funcionar corretamente em:

- 320 px.
- 375 px.
- 390 px.
- 768 px.
- 1024 px.
- 1280 px.
- 1440 px ou mais.

Valide:

- Header.
- Menu mobile.
- Hero.
- Cards.
- Botões.
- Imagens.
- Filtros.
- Espaçamentos.
- Títulos longos.
- Rodapé.
- Botão flutuante.
- Textos institucionais.

Evite:

- Scroll horizontal.
- Textos muito pequenos.
- Botões difíceis de tocar.
- Cards estreitos demais.
- Imagens deformadas.
- Layout quebrado por nomes longos.

---

## 24. Acessibilidade

Siga WCAG sempre que possível.

Requisitos mínimos:

- HTML semântico.
- Hierarquia correta de headings.
- Um único `h1` por página.
- Labels acessíveis.
- Botões reais para ações.
- Links reais para navegação.
- Navegação por teclado.
- Foco visível.
- Contraste adequado.
- `alt` descritivo para imagens relevantes.
- `alt=""` para imagens puramente decorativas.
- `aria-label` somente quando necessário.
- Respeito a `prefers-reduced-motion`.
- Áreas de toque adequadas.
- Não depender apenas de cor para comunicar estados.

Não use `div` clicável no lugar de botão ou link.

---

## 25. SEO

Configure:

- Metadata global.
- Metadata da página inicial.
- Metadata do catálogo.
- Open Graph.
- Twitter Card.
- Canonical URL preparado por configuração.
- `robots.ts`.
- `sitemap.ts`.
- Títulos únicos.
- Descrições únicas.
- HTML semântico.
- URLs legíveis.

Prepare dados estruturados JSON-LD para:

- Organization ou LocalBusiness.
- WebSite.
- BreadcrumbList quando houver páginas internas.

Não invente endereço, horário comercial, CNPJ, avaliações, coordenadas ou dados legais.

Esses campos devem ficar centralizados e opcionais.

---

## 26. Performance

O projeto deve buscar boas métricas de Core Web Vitals.

Regras:

- Use `next/image`.
- Defina `sizes` corretamente.
- Evite imagens maiores que o necessário.
- Use formatos modernos.
- Priorize apenas a imagem principal visível no primeiro carregamento.
- Evite lazy loading incorreto no conteúdo acima da dobra.
- Evite dependências grandes.
- Evite JavaScript desnecessário.
- Evite animações pesadas.
- Não use vídeo automático no hero.
- Não use carrossel automático.
- Não carregue integrações externas sem necessidade.
- Evite componentes Client desnecessários.

Imagens de produto devem usar proporções consistentes.

---

## 27. Conteúdo e placeholders

Todo conteúdo inicial deve ser claramente fácil de localizar e editar.

Centralize textos e dados recorrentes quando fizer sentido.

Não espalhe:

- Nome da marca.
- Número do WhatsApp.
- URL do Instagram.
- Cidade.
- Estado.
- Descrição padrão.
- Redes sociais.

Utilize placeholders explícitos quando dados reais ainda não estiverem disponíveis.

Exemplo:

```ts
name: "Nome da Marca",
```

Não invente uma marca definitiva sem solicitação.

---

## 28. Boas práticas de código

Requisitos:

- TypeScript estrito.
- Tipos explícitos para dados de domínio.
- Nomes claros.
- Componentes pequenos.
- Funções puras quando possível.
- Dados separados da apresentação.
- Sem `any`.
- Sem código morto.
- Sem comentários óbvios.
- Sem duplicação desnecessária.
- Sem abstração prematura.
- Sem componentes gigantes.
- Sem lógica de negócio dentro do JSX.
- Sem estilos inline, salvo casos tecnicamente justificados.
- Sem strings repetidas importantes espalhadas pelo projeto.

Use alias de importação, preferencialmente:

```text
@/*
```

---

## 29. Estados da interface

Considere:

- Produto disponível.
- Produto indisponível.
- Produto em destaque.
- Produto novo.
- Produto personalizável.
- Catálogo sem resultados.
- Imagem ausente.
- Link de WhatsApp ainda não configurado.
- Instagram ainda não configurado.

Não deixe a aplicação quebrar quando informações opcionais estiverem ausentes.

---

## 30. Funcionalidades proibidas nesta primeira versão

Não implemente:

- Carrinho.
- Checkout.
- Pagamento.
- Login.
- Cadastro.
- Favoritos.
- Avaliações enviadas pelo site.
- Backend.
- API própria.
- Banco de dados.
- CMS.
- Dashboard administrativo.
- Controle de estoque.
- Cálculo de frete.
- Cupom.
- Conta do cliente.
- Integração com Instagram.
- Chatbot.
- Newsletter com backend.
- Push notifications.
- Internacionalização.
- Tema escuro, salvo se solicitado.
- Página individual para cada vela, salvo se necessária para a arquitetura inicial.

Não crie funcionalidades futuras apenas por antecipação.

---

## 31. Entregáveis da primeira versão

A primeira versão deve conter:

- Projeto Next.js configurado.
- TypeScript estrito.
- Tailwind CSS.
- shadcn/ui configurado.
- Layout global.
- Metadata.
- Header responsivo.
- Menu mobile.
- Hero.
- Produtos em destaque.
- Catálogo.
- Filtros por categoria.
- Cards de produto.
- Seção de kits.
- Seção sobre.
- Seção de encomendas.
- Seção de cuidados.
- Seção de depoimentos preparada.
- Seção de Instagram.
- Contato.
- Footer.
- Integração de links para WhatsApp.
- `robots.ts`.
- `sitemap.ts`.
- Página 404.
- Dados iniciais centralizados.
- Componentes acessíveis.
- Layout responsivo.
- README com instruções de execução e edição dos dados.

---

## 32. Critérios de aceite

O projeto será considerado concluído quando:

- Todas as skills relevantes da pasta `docs` tiverem sido lidas.
- O projeto iniciar sem erros.
- O build de produção finalizar sem erros.
- Não houver erros de TypeScript.
- Não houver erros críticos de ESLint.
- Não houver scroll horizontal.
- O site funcionar em mobile, tablet e desktop.
- O catálogo for gerado por dados centralizados.
- Os filtros funcionarem.
- Os links do WhatsApp forem gerados por função reutilizável.
- A página possuir metadata adequada.
- As imagens utilizarem otimização do Next.js.
- A navegação por teclado funcionar.
- Os estados de foco estiverem visíveis.
- O código estiver organizado.
- Não houver funcionalidades de e-commerce.
- Os dados fictícios estiverem fáceis de substituir.
- O README explicar como alterar produtos e dados da marca.

---

## 33. Processo obrigatório de implementação

Siga esta sequência:

1. Ler todas as skills da pasta `docs`.
2. Resumir internamente as regras aplicáveis.
3. Inspecionar a estrutura atual do projeto.
4. Identificar dependências já instaladas.
5. Evitar reinstalar ou duplicar bibliotecas.
6. Definir tokens e direção visual.
7. Criar os tipos de domínio.
8. Criar os dados iniciais.
9. Criar configuração central da marca.
10. Criar layout e metadata.
11. Criar componentes compartilhados.
12. Criar seções da página inicial.
13. Criar catálogo e filtros.
14. Criar integração do WhatsApp.
15. Criar SEO técnico.
16. Validar acessibilidade.
17. Validar responsividade.
18. Executar lint.
19. Executar verificação de tipos.
20. Executar build de produção.
21. Corrigir todos os problemas encontrados.
22. Atualizar o README.

Não pule diretamente para a implementação visual sem antes verificar as skills.

---

## 34. Comandos de validação

Ao finalizar, execute os comandos disponíveis no projeto, preferencialmente:

```bash
npm run lint
npm run build
```

Caso exista script de verificação de tipos:

```bash
npm run typecheck
```

Corrija os erros antes de considerar o trabalho concluído.

Não desabilite regras de lint apenas para fazer o build passar.

Não use `@ts-ignore` ou `eslint-disable` sem justificativa técnica real.

---

## 35. Resultado esperado

O resultado deve parecer um site real de uma marca artesanal de velas aromáticas.

Ele deve ser:

- Elegante.
- Aconchegante.
- Leve.
- Rápido.
- Responsivo.
- Acessível.
- Fácil de manter.
- Fácil de expandir.
- Orientado à conversão pelo WhatsApp.
- Visualmente marcante sem exageros.
- Diferente de um template genérico.
- Adequado para divulgação local e online.

O site deve valorizar principalmente:

1. Fotografias.
2. Produtos.
3. Identidade da marca.
4. Facilidade de contato.
5. Confiança.
6. Experiência mobile.

---

## 36. Instrução final para o agente

Não produza apenas uma demonstração incompleta.

Implemente uma primeira versão funcional e organizada, seguindo todas as regras deste documento e todas as skills existentes na pasta `docs`.

Antes de finalizar:

- Revise o código.
- Remova código não utilizado.
- Confirme que não foi criado e-commerce.
- Confirme que o WhatsApp está centralizado.
- Confirme que o conteúdo está editável.
- Confirme que a experiência mobile está correta.
- Confirme que o build funciona.
- Informe no README quais arquivos devem ser alterados para cadastrar novos produtos, mudar contatos, trocar imagens e modificar dados da marca.
