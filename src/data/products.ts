import { Product, CategoryItem } from '../types';

export const categoriesData: CategoryItem[] = [
  {
    id: 'up-de-conta',
    name: 'Serviços de Up & Rank',
    description: 'Pacotes completos de evolução, rank e saldo direto na sua conta.',
    iconName: 'TrendingUp',
    count: 8
  },
  {
    id: 'dinheiro',
    name: 'Dinheiro GTA$',
    description: 'Adição de saldo ativo e personalizado na sua conta com entrega garantida.',
    iconName: 'DollarSign',
    count: 4
  },
  {
    id: 'itens',
    name: 'Itens & Modificações',
    description: 'Veículos modded raros, trajes técnicos exclusivos e desbloqueios completos.',
    iconName: 'Package',
    count: 4
  },
  {
    id: 'servicos',
    name: 'Serviços de Conta',
    description: 'Higienização preventiva, consultoria especializada e atendimento dedicado.',
    iconName: 'Zap',
    count: 3
  },
  {
    id: 'promocoes',
    name: 'Promoções & Combos',
    description: 'Combos exclusivos da LP Community com descontos especiais.',
    iconName: 'Tag',
    count: 2
  }
];

export const productsData: Product[] = [
  // ================= UP DE CONTA =================
  {
    id: 'pkg-eco',
    name: 'Pacote Eco (Up Básico)',
    category: 'up-de-conta',
    price: 6.00,
    oldPrice: 12.00,
    image: '/imagens/fotopacotes/pacoteeco.png',
    badge: 'Mais Econômico',
    description: 'Evolução essencial para iniciantes. Progresso consolidado com liberação completa de armamento.',
    features: [
      '$5 Milhões de Saldo GTA$ Adicionados',
      'Rank 120 Definido na Conta',
      'Arsenal Completo Desbloqueado',
      'Suporte Técnico de 30 Dias',
      'Compatível com PC e Consoles'
    ],
    type: 'standard',
    deliveryTime: 'Entrega em até 48 horas',
    warranty: 'Suporte pós-venda completo de 30 dias'
  },
  {
    id: 'pkg-bronze',
    name: 'Pacote Bronze (Up Avançado)',
    category: 'up-de-conta',
    price: 10.00,
    oldPrice: 18.00,
    image: '/imagens/fotopacotes/pcotebronze.png',
    description: 'Pacote intermediário ideal para quem busca mais saldo e veículos otimizados na garagem.',
    features: [
      '$10 Milhões de Saldo GTA$',
      'Rank 120 Estável',
      '2 Veículos Otimizados (Modded)',
      'Tunagens de Garagem Liberadas',
      'Suporte Técnico Especializado'
    ],
    type: 'standard',
    deliveryTime: 'Entrega em até 48 horas',
    warranty: 'Suporte pós-venda completo de 30 dias'
  },
  {
    id: 'pkg-prata',
    name: 'Pacote Prata (Up Intermediário)',
    category: 'up-de-conta',
    price: 20.00,
    oldPrice: 35.00,
    image: '/imagens/fotopacotes/pacoteprata.png',
    badge: 'Excelente Custo-Benefício',
    description: 'Pacote robusto com saldo generoso, trajes raros e veículos personalizados para sua coleção.',
    features: [
      '$50 Milhões de Saldo GTA$',
      'Rank 250 Personalizado',
      '5 Veículos Modded Especiais',
      '2 Trajes Técnicos Exclusivos',
      'Acompanhamento e Validação de Conta'
    ],
    type: 'standard',
    deliveryTime: 'Entrega em até 48 horas',
    warranty: 'Suporte pós-venda completo de 30 dias',
    popular: true
  },
  {
    id: 'pkg-ouro',
    name: 'Pacote Ouro (Up Executivo)',
    category: 'up-de-conta',
    price: 35.00,
    oldPrice: 59.00,
    image: '/imagens/fotopacotes/pacoteouro.png',
    badge: 'Mais Vendido',
    description: 'O equilíbrio perfeito entre fortuna em GTA$ e prestígio. Liberdade financeira total em Los Santos.',
    features: [
      '$150 Milhões de Saldo GTA$',
      'Rank 500 Personalizado',
      '10 Veículos Modded Raros',
      '5 Trajes Técnicos Otimizados',
      'Desbloqueio Total de Propriedades'
    ],
    type: 'standard',
    deliveryTime: 'Entrega em até 48 horas',
    warranty: 'Suporte pós-venda completo de 30 dias',
    popular: true
  },
  {
    id: 'pkg-esmeralda',
    name: 'Pacote Esmeralda (Up Magnata)',
    category: 'up-de-conta',
    price: 50.00,
    oldPrice: 85.00,
    image: '/imagens/fotopacotes/pacoteesmeralda.png',
    badge: 'Alta Performance',
    description: 'Pacote de elite para jogadores que exigem o topo da hierarquia em Los Santos com suporte dedicado.',
    features: [
      '$300 Milhões de Saldo GTA$',
      'Rank 1000 Personalizado',
      '20 Veículos Modded Especiais',
      '10 Trajes Técnicos Exclusivos',
      'Desbloqueio Total de Conquistas'
    ],
    type: 'standard',
    deliveryTime: 'Entrega em até 48 horas',
    warranty: 'Suporte pós-venda completo de 30 dias'
  },
  {
    id: 'pkg-diamante',
    name: 'Pacote Diamante (Supremo LP)',
    category: 'up-de-conta',
    price: 80.00,
    oldPrice: 139.00,
    image: '/imagens/fotopacotes/pacotediamante.png',
    badge: 'O Definitivo',
    description: 'O mais cobiçado da LP Community. Fortuna bilionária, todos os itens desbloqueados e frota completa.',
    features: [
      '$1 BILHÃO de Saldo GTA$',
      'Rank até 8000 (Sua Escolha)',
      'Desbloqueio Completo + Limpeza de Conta',
      '30 Veículos Modded Raros',
      '15 Trajes Técnicos Otimizados'
    ],
    type: 'standard',
    deliveryTime: 'Entrega em até 48 horas',
    warranty: 'Suporte pós-venda completo de 30 dias',
    popular: true
  },
  {
    id: 'item-level-low',
    name: 'Rank Estável (0 até 120)',
    category: 'up-de-conta',
    price: 4.00,
    image: '/imagens/fotosgta/fotocidadegta.jpg',
    description: 'Evolução de nível até 120, liberando todas as armas, coletes e melhorias de motorização.',
    features: [
      'Nível ajustado com segurança até 120',
      'Libera todas as peças da Los Santos Customs',
      'Libera todas as armas na Ammu-Nation',
      'Garantia de funcionamento na conta'
    ],
    type: 'standard',
    deliveryTime: 'Entrega em até 48 horas',
    warranty: 'Garantia de funcionamento de 30 dias'
  },
  {
    id: 'item-level-high',
    name: 'Rank Customizado (120 até 8000)',
    category: 'up-de-conta',
    price: 8.00,
    image: '/imagens/fotosgta/fotopalcaviweoodgta.jpg',
    description: 'Ajuste personalizado de nível em qualquer patamar entre 120 e 8000 com verificação técnica.',
    features: [
      'Nível customizável à sua escolha',
      'Estatísticas de habilidade maximizadas',
      'Status de jogador veterano',
      'Acompanhamento completo'
    ],
    type: 'standard',
    deliveryTime: 'Entrega em até 48 horas',
    warranty: 'Garantia de funcionamento de 30 dias'
  },

  // ================= DINHEIRO GTA$ =================
  {
    id: 'item-dinheiro-custom',
    name: 'Adição de Saldo Personalizada (GTA$ Sob Medida)',
    category: 'dinheiro',
    price: 5.00,
    image: '/imagens/fotosgta/fotogta.jpg',
    badge: 'Calculadora Interativa',
    description: 'Escolha exatamente quantos Milhões de GTA$ você deseja receber na sua conta. R$ 0,50 a cada 1 Milhão.',
    features: [
      'R$ 0,50 por cada 1 Milhão de GTA$',
      'Mínimo de 10 Milhões (R$ 5,00)',
      'Adição direta no saldo bancário do personagem',
      'Compatível com PC e Consoles'
    ],
    type: 'calculator-money',
    minQty: 10,
    maxQty: 1000,
    pricePerMillion: 0.50,
    deliveryTime: 'Entrega em até 48 horas',
    warranty: 'Suporte pós-venda completo de 30 dias',
    popular: true
  },
  {
    id: 'money-100m',
    name: 'Pacote 100 Milhões de GTA$',
    category: 'dinheiro',
    price: 29.90,
    oldPrice: 50.00,
    image: '/imagens/fotopacotes/pacoteprata.png',
    description: 'Pacote fixo de 100 Milhões em saldo limpo. Ideal para adquirir escritórios, hangares e superesportivos.',
    features: [
      '100 Milhões em saldo líquido',
      'Entrega em sessão privada dedicada',
      'Estabilização de histórico da conta',
      'Suporte VIP via Discord'
    ],
    type: 'standard',
    deliveryTime: 'Entrega em até 48 horas',
    warranty: 'Suporte pós-venda completo de 30 dias'
  },
  {
    id: 'money-500m',
    name: 'Pacote 500 Milhões de GTA$',
    category: 'dinheiro',
    price: 59.90,
    oldPrice: 120.00,
    image: '/imagens/fotopacotes/pacoteouro.png',
    badge: 'Maior Economia',
    description: 'Poder aquisitivo massivo para comprar todas as propriedades, iates, aeronaves e negócios em Los Santos.',
    features: [
      '500 Milhões em saldo líquido',
      'Processamento em sessão privada',
      'Suporte humanizado em tempo real',
      'Garantia de reposição de saldo'
    ],
    type: 'standard',
    deliveryTime: 'Entrega em até 48 horas',
    warranty: 'Suporte pós-venda completo de 30 dias'
  },
  {
    id: 'money-1b',
    name: 'Pacote 1 Bilhão de GTA$',
    category: 'dinheiro',
    price: 89.90,
    oldPrice: 180.00,
    image: '/imagens/fotopacotes/pacotediamante.png',
    badge: 'Magnata',
    description: 'Liberdade financeira ilimitada. Nunca mais se preocupe com preços em atualizações futuras do GTA V.',
    features: [
      '1 Bilhão (1.000.000.000) em saldo GTA$',
      'Adição fracionada ou direta na conta',
      'Acompanhamento do procedimento no Discord',
      'Garantia completa LP Community'
    ],
    type: 'standard',
    deliveryTime: 'Entrega em até 48 horas',
    warranty: 'Suporte pós-venda completo de 30 dias'
  },

  // ================= ITENS & MODIFICAÇÕES =================
  {
    id: 'item-carro',
    name: 'Veículo Otimizado Modded (Unidade)',
    category: 'itens',
    price: 1.00,
    image: '/imagens/fotosgta/fotocidadegta.jpg',
    description: 'Veículo exclusivo com pinturas texturizadas mescladas, pneus raros (F1 ou Benny\'s) e placas personalizadas.',
    features: [
      'Pinturas raras e mescladas não disponíveis no jogo padrão',
      'Rodas exclusivas F1 ou Benny\'s em qualquer veículo',
      'Vidros e faróis com coloração especial',
      'Preço por unidade (selecione a quantidade)'
    ],
    type: 'calculator-qty',
    pricePerUnit: 1.00,
    deliveryTime: 'Entrega em até 48 horas',
    warranty: 'Suporte pós-venda completo de 30 dias'
  },
  {
    id: 'item-traje',
    name: 'Traje Técnico Otimizado Modded (Unidade)',
    category: 'itens',
    price: 1.00,
    image: '/imagens/fotosgta/fotopalcaviweoodgta.jpg',
    description: 'Trajes raros com partes invisíveis, capacetes térmicos mesclados, logos exclusivas e coletes especiais.',
    features: [
      'Acessórios mesclados e slots invisíveis',
      'Capacetes balísticos e máscaras raras',
      'Salvo permanentemente no seu guarda-roupa',
      'Preço por unidade de traje'
    ],
    type: 'calculator-qty',
    pricePerUnit: 1.00,
    deliveryTime: 'Entrega em até 48 horas',
    warranty: 'Suporte pós-venda completo de 30 dias'
  },
  {
    id: 'item-unlock-all',
    name: 'Desbloqueio de Ativos (Unlock All)',
    category: 'itens',
    price: 5.00,
    oldPrice: 10.00,
    image: '/imagens/fotopacotes/pacoteeco.png',
    description: 'Liberação total de armas, tatuagens, pinturas cromadas, conquistas, pesquisas do Bunker e itens sazonais.',
    features: [
      'Desbloqueio de todas as pesquisas do Bunker',
      'Liberação de pinturas cromadas e metálicas',
      'Todas as roupas e máscaras de eventos sazonais',
      'Tatuagens e prêmios de conquistas'
    ],
    type: 'standard',
    deliveryTime: 'Entrega em até 48 horas',
    warranty: 'Suporte pós-venda completo de 30 dias'
  },
  {
    id: 'item-unlock-all-plus',
    name: 'Unlock All Plus & Limpeza de Histórico',
    category: 'itens',
    price: 8.00,
    oldPrice: 15.00,
    image: '/imagens/fotopacotes/pcotebronze.png',
    badge: 'Mais Completo',
    description: 'Desbloqueio completo de ativos + Estatísticas no máximo + Limpeza preventiva de logs de histórico da conta.',
    features: [
      'Tudo do Unlock All Padrão',
      'Todas as habilidades do personagem no máximo (Força, Tiro, Voo)',
      'Limpeza de relatórios antigos',
      'Garantia de funcionamento do perfil'
    ],
    type: 'standard',
    deliveryTime: 'Entrega em até 48 horas',
    warranty: 'Suporte pós-venda completo de 30 dias',
    popular: true
  },

  // ================= SERVIÇOS =================
  {
    id: 'item-express-delivery',
    name: 'Fila Prioritária de Atendimento',
    category: 'servicos',
    price: 5.00,
    image: '/imagens/fotosgta/fotogta.jpg',
    badge: 'Prioridade Fila 1',
    description: 'Coloca o seu pedido no topo da fila de atendimento. Processo de evolução prioritário.',
    features: [
      'Atendimento prioritário na fila',
      'Acompanhamento dedicado com técnico VIP',
      'Início prioritário do procedimento da conta',
      'Válido para qualquer serviço contratado'
    ],
    type: 'standard',
    deliveryTime: 'Entrega em até 48 horas',
    warranty: 'Garantia de suporte VIP'
  },
  {
    id: 'servico-auditoria',
    name: 'Limpeza de Logs & Higienização de Conta',
    category: 'servicos',
    price: 14.90,
    image: '/imagens/fotosgta/gtalogo.jpg',
    description: 'Serviço preventivo para contas que receberam denúncias em sessões públicas, organizando e limpando o perfil.',
    features: [
      'Limpeza de histórico de reports na sessão',
      'Estabilização de telemetria da conta',
      'Recomendado para jogadores frequentes',
      'Relatório técnico de verificação'
    ],
    type: 'standard',
    deliveryTime: 'Entrega em até 48 horas',
    warranty: 'Garantia de higienização de 30 dias'
  },
  {
    id: 'servico-consultoria',
    name: 'Consultoria & Configuração Completa',
    category: 'servicos',
    price: 19.90,
    image: '/imagens/fotopacotes/pacoteesmeralda.png',
    description: 'Sessão individual via Discord onde nosso especialista orienta e otimiza a progressão da sua conta.',
    features: [
      'Atendimento individual ao vivo via Discord',
      'Dicas de proteção em sessões públicas',
      'Configuração dos melhores esquemas de propriedades',
      'Suporte técnico individual'
    ],
    type: 'standard',
    deliveryTime: 'Entrega em até 48 horas',
    warranty: 'Satisfação garantida'
  },

  // ================= PROMOÇÕES & COMBOS =================
  {
    id: 'promo-combo-supremo',
    name: 'Combo Supremo LP Community (25% OFF)',
    category: 'promocoes',
    price: 65.00,
    oldPrice: 95.00,
    image: '/imagens/fotopacotes/pacoteesmeralda.png',
    badge: 'Super Oferta',
    description: 'O combo ideal: Pacote Esmeralda ($300M + Rank 1000) + Unlock All Plus + Fila Prioritária por um preço especial.',
    features: [
      '$300 Milhões de Saldo GTA$',
      'Rank 1000 Personalizado',
      'Unlock All Plus + Limpeza de Conta incluído',
      'Fila Prioritária de Atendimento incluída',
      'Economia real de R$ 30,00'
    ],
    type: 'standard',
    deliveryTime: 'Entrega em até 48 horas',
    warranty: 'Suporte pós-venda completo de 30 dias',
    popular: true
  },
  {
    id: 'promo-combo-garagem',
    name: 'Combo Colecionador de Garagem Modded',
    category: 'promocoes',
    price: 15.00,
    oldPrice: 25.00,
    image: '/imagens/fotopacotes/pacoteprata.png',
    description: 'Pacote especial com 20 Veículos Modded à sua escolha + 5 Trajes Técnicos Otimizados.',
    features: [
      '20 Veículos Modded com pinturas exclusivas',
      '5 Trajes Técnicos Otimizados com slots invisíveis',
      'Personalização de placas à escolha do cliente',
      'Entrega em sessão dedicada'
    ],
    type: 'standard',
    deliveryTime: 'Entrega em até 48 horas',
    warranty: 'Suporte pós-venda completo de 30 dias'
  }
];
