# DevLink Style System

Projeto base: Next.js + TypeScript + Tailwind — Style Guide e componentes reutilizáveis.

Pré-requisitos

- Node.js 18+ (ou versão compatível com Next 14)
- `npm` ou `pnpm`

Instalação

```bash
npm install
# ou
pnpm install
```

Rodar em desenvolvimento

```bash
npm run dev
# ou
pnpm run dev
```

Scripts disponíveis

- `dev`: inicia o servidor de desenvolvimento (`next dev`)
- `build`: gera a build de produção (`next build`)
- `start`: inicia a aplicação em modo produção (`next start`)
- `lint`: executa o linter (`next lint`)

Estrutura principal

- `app/`: App router com página de exemplo (Style Guide)
- `src/components/`: componentes reutilizáveis (`Avatar`, `Button`, `ProfileCard`, `SocialLinks`, `Switch`)
- `context/`: `ThemeProvider` e lógica de tema
- `styles/globals.css`: estilos globais e variáveis de tema
- `public/`: arquivos estáticos (ícones, imagens)

O que explorar

- `src/components/` — base do design system
- `context/ThemeProvider.tsx` — troca de temas (claro/escuro)

Executando em produção (exemplo)

```bash
npm run build
npm run start
```

Acessar

Abra `http://localhost:3000` no navegador após executar o servidor de desenvolvimento.

Fake API

- Um endpoint de mock foi adicionado para testes: `GET /api/users`
- Exemplo:

```bash
curl http://localhost:3000/api/users
```

O endpoint retorna uma lista simples de usuários (`id`, `name`, `username`, `avatar`, `bio`, `links`,`actions`).
