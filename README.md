# 🟢 LP Community - Plataforma de E-Commerce Premium (GTA V)

Este repositório contém o código-fonte da plataforma de vendas oficial da **LP Community**, especializada na venda de contas prontas, injeção de saldo GTA$, pacotes de modificação, level/rank e serviços exclusivos para GTA V. O design foi concebido com uma estética premium inspirada em referências como Apple, Stripe, Steam e Rockstar Games.

---

## 🚀 Tecnologias Utilizadas

A aplicação foi desenvolvida sob a seguinte stack tecnológica moderna:

- **React 18**: Biblioteca base para a construção das interfaces dinâmicas e reativas.
- **TypeScript**: Tipagem estática rigorosa para garantir estabilidade e evitar erros em tempo de execução.
- **Vite**: Build tool ultra-rápida que provê suporte a Hot Module Replacement (HMR) e bundles otimizados para produção.
- **Tailwind CSS**: Framework CSS utilitário para design responsivo e customização de cores, espaçamentos e transições premium.
- **Framer Motion**: Biblioteca de animações fluidas para as transições de página e interações.
- **Lucide Icons**: Pacote de ícones vetoriais modernos e leves.

---

## 📁 Estrutura de Diretórios e Arquivos

Abaixo está descrita a organização do código-fonte da aplicação:

```text
lp-community/
├── public/                  # Arquivos estáticos e recursos de SEO
│   ├── imagens/             # Imagens e banners originais enviados pelo cliente
│   │   ├── fotopacotes/     # Imagens dos pacotes de módulos (Eco a Diamante)
│   │   └── fotosgta/        # Imagens ambientadas de GTA V e logotipos
│   ├── robots.txt           # Configuração de indexação para bots de busca
│   └── sitemap.xml          # Mapa do site para otimização de SEO
├── src/                     # Código-fonte da aplicação
│   ├── types/               # Definição de interfaces e tipos TypeScript
│   │   └── index.ts         # Contrato de dados (Product, CartItem, Testimonial, etc.)
│   ├── data/                # Bases de dados locais e catálogos
│   │   ├── products.ts      # Dados detalhados de produtos e categorias
│   │   ├── reviews.ts       # Depoimentos 5 estrelas verificados
│   │   └── faq.ts           # Dúvidas frequentes do FAQ Accordion
│   ├── components/          # Componentes de UI modulares
│   │   ├── layout/          # Elementos estruturais (Navbar, Footer)
│   │   ├── hero/            # Seção de apresentação principal com slideshow
│   │   ├── trust/           # Selos e badges de confiança antiban
│   │   ├── categories/      # Seletor interativo de categorias
│   │   ├── products/        # Catálogo, cards e modais de detalhes
│   │   ├── differentials/   # Diferenciais e garantias estilo Stripe
│   │   ├── reviews/         # Carrossel de avaliações verificadas
│   │   ├── faq/             # FAQ Accordion dinâmico
│   │   ├── contact/         # Cards interativos para WhatsApp/Discord
│   │   ├── cart/            # Carrinho lateral e checkout integrado
│   │   └── common/          # Componentes genéricos (Icon)
│   ├── App.tsx              # Componente raiz que coordena estados e fluxos
│   ├── main.tsx             # Ponto de entrada que inicializa o React no DOM
│   └── index.css            # Estilos globais e diretivas do Tailwind CSS
├── tailwind.config.js       # Customização do tema Tailwind (cores LP Community)
├── postcss.config.js        # Configuração de processamento de CSS
├── vite.config.ts           # Configuração de aliases e build do Vite
├── tsconfig.json            # Configuração de compilação do TypeScript
└── package.json             # Dependências e scripts do projeto
```

---

## 🛠️ Como Executar o Projeto Localmente

### Pré-requisitos
Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

### Passos para Execução:

1. **Instalar as dependências**:
   ```bash
   npm install
   ```

2. **Iniciar o servidor de desenvolvimento**:
   ```bash
   npm run dev
   ```
   Acesse a URL gerada no terminal (geralmente `http://localhost:5173`) para visualizar a plataforma.

3. **Gerar a Build de Produção**:
   ```bash
   npm run build
   ```
   Os arquivos compilados e minificados serão gerados na pasta `dist/`, prontos para deploy em servidores estáticos (Vercel, Netlify, Cloudflare Pages, etc.).

---

## 💡 Recursos de Alta Conversão Implementados

1. **Calculadora Dinâmica de GTA$**: Integrada ao modal de detalhes do produto "Dinheiro GTA Sob Medida", permitindo que o cliente defina o saldo desejado com atualização de preços em tempo real (R$ 0,50 a cada 1 Milhão).
2. **Calculadora de Quantidade**: Para veículos modded e trajes com ajustes incrementais de quantidade e cálculo automático.
3. **Checkout Integrado via WhatsApp/Discord**: O carrinho lateral formata automaticamente um resumo detalhado dos itens selecionados com o valor total e redireciona o cliente para o atendimento oficial.
4. **Filtros e Busca**: O cliente localiza pacotes por palavras-chave, ordena por preço e navega instantaneamente pelas categorias através de abas interativas.
5. **Garantia de Antiban**: Selos e chamadas institucionais discretas sobre segurança e período de 30 dias de cobertura.
