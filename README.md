# JV Dev - Portfólio

Site portfólio profissional para o JV Dev, desenvolvido com Next.js, TypeScript, Tailwind CSS e Framer Motion.

## 🚀 Tecnologias

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização moderna e responsiva
- **Framer Motion** - Animações suaves e profissionais

## 📦 Instalação

1. Clone o repositório
2. Instale as dependências:

```bash
npm install
```

3. Adicione a logo JV Dev:
   - Coloque a imagem da logo em `public/logo.png`

## 🏃‍♂️ Executando o Projeto

### Modo de Desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

### Build para Produção

```bash
npm run build
npm start
```

## 📂 Estrutura do Projeto

```
├── app/                    # App Router do Next.js
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página inicial
│   └── globals.css        # Estilos globais
├── components/            # Componentes React
│   ├── Hero.tsx          # Seção hero com logo e CTA
│   ├── About.tsx         # Seção sobre
│   ├── Services.tsx      # Seção de serviços
│   ├── Projects.tsx      # Seção de projetos
│   ├── ProjectCard.tsx   # Card de projeto
│   ├── ProjectModal.tsx  # Modal de detalhes
│   └── Contact.tsx       # Seção de contato
├── data/                  # Dados do site
│   └── projects.ts       # Dados dos projetos
└── public/               # Assets estáticos
    └── logo.png          # Logo JV Dev
```

## 🎨 Seções do Site

1. **Hero** - Apresentação com logo e botão de ação
2. **Sobre** - Apresentação dos diferenciais
3. **Serviços** - Cards com serviços oferecidos
4. **Projetos** - Cards clicáveis que abrem modais com detalhes
5. **Contato** - Integração com WhatsApp

## 📱 Funcionalidades

- ✅ Design 100% responsivo
- ✅ Animações suaves com Framer Motion
- ✅ Projetos clicáveis com modal interativo
- ✅ Integração direta com WhatsApp
- ✅ Performance otimizada
- ✅ SEO friendly

## 📝 Customização

### Alterar Número do WhatsApp

Edite o número em:
- `components/Hero.tsx`
- `components/Contact.tsx`

### Adicionar Novos Projetos

Edite o arquivo `data/projects.ts` e adicione novos objetos ao array `projects`. Cada projeto pode ter:
- Ícone personalizado (calendar, dashboard, etc.)
- Gradiente único de cores
- Estatísticas destacadas (stats)
- Descrição completa do problema e solução

### Alterar Cores

As cores principais estão definidas em `tailwind.config.ts`:
- `primary-blue`: #2E5BFF
- `primary-cyan`: #4FC3F7
- `primary-dark`: #1e3a8a

## 🚀 Deploy

O projeto pode ser facilmente deployado em:
- **Vercel** (recomendado para Next.js)
- **Netlify**
- **GitHub Pages** (com ajustes)

### Deploy na Vercel

```bash
npm install -g vercel
vercel
```

## 📄 Licença

© 2024 JV Dev. Todos os direitos reservados.

