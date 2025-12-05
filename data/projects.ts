export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  problem: string;
  solution: string;
  results: string[];
  technologies: string[];
  category: string;
  icon: string;
  gradient: string;
  stats?: { label: string; value: string }[];
}

export const projects: Project[] = [
  {
    id: "saloniq",
    title: "Saloniq",
    subtitle: "Sistema Completo de Gestão para Salões",
    description:
      "Plataforma completa que revoluciona a gestão de salões de beleza, integrando agendamentos online, controle financeiro, gerenciamento de funcionários, estoque de produtos e relatórios gerenciais em um único sistema.",
    problem:
      "Salões de beleza enfrentavam desafios em múltiplas áreas: agendamentos desorganizados, controle financeiro manual, dificuldade em gerenciar comissões de funcionários, falta de controle de estoque e ausência de visão estratégica do negócio.",
    solution:
      "Sistema web e mobile integrado que unifica todas as operações do salão: agendamento online 24/7 com confirmação automática, módulo financeiro completo com controle de receitas e despesas, gestão de funcionários com cálculo automático de comissões, controle de estoque de produtos com alertas de reposição, e dashboards com insights do negócio.",
    results: [
      "Redução de 80% no tempo gasto com tarefas administrativas",
      "Controle financeiro preciso com visão em tempo real do faturamento",
      "Gestão automatizada de comissões e pagamentos de funcionários",
      "Controle de estoque inteligente reduzindo perdas em 50%",
      "Aumento de 40% na taxa de comparecimento com lembretes automáticos",
      "Relatórios gerenciais que auxiliam na tomada de decisões estratégicas",
    ],
    technologies: [
      "React Native",
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Firebase",
    ],
    category: "SaaS",
    icon: "salon",
    gradient: "from-cyan-500 via-blue-500 to-indigo-600",
    stats: [
      { label: "Redução de Tempo", value: "80%" },
      { label: "Menos Perdas", value: "-50%" },
      { label: "Disponibilidade", value: "24/7" },
    ],
  },
  {
    id: "tio-fabinho",
    title: "Tio Fabinho",
    subtitle: "Sistema de Gestão para Buffet Infantil",
    description:
      "Plataforma completa desenvolvida especialmente para buffets infantis, transformando processos manuais caóticos em uma gestão digital organizada, rápida e intuitiva de festas, contratos, orçamentos e equipe de freelancers.",
    problem:
      "Com o crescimento do buffet, o volume de festas, contratos e orçamentos aumentou significativamente. O processo manual, que funcionava bem no início, começou a se tornar limitante: dificuldade em escalar as operações, tempo excessivo gasto em tarefas administrativas, desafios em coordenar múltiplos freelancers simultaneamente e complexidade em ter uma visão estratégica do negócio em expansão.",
    solution:
      "Sistema web sob medida que digitaliza e organiza toda a operação do buffet: cadastro e gerenciamento de festas com todos os detalhes (tema, número de convidados, serviços contratados), geração automática de contratos e orçamentos personalizados, controle de disponibilidade e agendamento de freelancers, calendário visual de eventos, gestão de pagamentos e prestações, e histórico completo de cada cliente.",
    results: [
      "Eliminação total de papéis e processos manuais",
      "Contratos e orçamentos gerados automaticamente em minutos",
      "Visão clara da disponibilidade de freelancers e agenda de festas",
      "Redução de 70% no tempo de gestão administrativa",
      "Zero conflitos de agenda entre festas e equipe",
      "Organização intuitiva permitindo acesso rápido a qualquer informação",
      "Histórico completo facilitando festas recorrentes e upsell",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
      "Prisma",
    ],
    category: "SaaS",
    icon: "dashboard",
    gradient: "from-cyan-500 via-blue-500 to-indigo-600",
    stats: [
      { label: "Economia de Tempo", value: "70%" },
      { label: "Processos Digitais", value: "100%" },
      { label: "Conflitos de Agenda", value: "0" },
    ],
  },
];

