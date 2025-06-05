# 🚀 Nuxt + Supabase - Autenticação Completa

Uma aplicação moderna construída com **Nuxt 3** e **Supabase** que oferece um sistema de autenticação completo e pronto para uso. Perfeita para kickstart de projetos que precisam de autenticação robusta e interface moderna.

## ✨ Características

- 🔐 **Autenticação completa** - Login, cadastro e verificação por email
- 🎨 **UI moderna** - Interface construída com Nuxt UI e Tailwind CSS
- 🛡️ **Validação de formulários** - Validação client-side com Zod
- 📱 **Responsivo** - Design adaptável para todos os dispositivos
- 🔄 **Estado reativo** - Gerenciamento de estado com Pinia
- 🚀 **Performance** - SSR/SSG com Nuxt 3
- 🔥 **TypeScript** - Totalmente tipado para melhor DX

## 🛠️ Stack Tecnológica

- **Frontend**: Nuxt 3, Vue 3, TypeScript
- **Backend**: Supabase (Auth, Database)
- **UI/UX**: Nuxt UI, Tailwind CSS, Nuxt Icon
- **Validação**: Zod
- **Estado**: Pinia
- **Linting**: ESLint

## 🏃‍♂️ Início Rápido

### 1. Clone o repositório
```bash
git clone <seu-repo>
cd nuxt-supabase-auth
```

### 2. Instale as dependências
```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

### 3. Configure as variáveis de ambiente
Crie um arquivo `.env` na raiz do projeto:

```env
SUPABASE_URL=sua_supabase_url_aqui
SUPABASE_KEY=sua_supabase_anon_key_aqui
```

> 💡 **Como obter as chaves do Supabase:**
> 1. Acesse [supabase.com](https://supabase.com)
> 2. Crie um novo projeto ou acesse um existente
> 3. Vá em Settings > API
> 4. Copie a Project URL (SUPABASE_URL) e anon public key (SUPABASE_KEY)

### 4. Execute o servidor de desenvolvimento
```bash
npm run dev
```

Acesse `http://localhost:3000` - Pronto! 🎉

## 📁 Estrutura do Projeto

```
├── components/          # Componentes Vue reutilizáveis
│   └── SignupForm.vue  # Formulário de cadastro
├── pages/              # Páginas da aplicação
│   ├── index.vue       # Página inicial
│   └── login.vue       # Página de login
├── stores/             # Stores Pinia
│   └── auth.ts         # Store de autenticação
├── layouts/            # Layouts da aplicação
├── middleware/         # Middlewares de rota
├── server/             # API routes server-side
└── assets/             # Assets estáticos
```

## 🔐 Funcionalidades de Autenticação

### ✅ Cadastro de Usuário
- Formulário com validação completa
- Confirmação de email automática
- Verificação de senha
- Feedback visual para o usuário

### ✅ Login
- Login com email/senha
- Persistência de sessão
- Redirecionamento automático

### ✅ Gerenciamento de Estado
- Store reativa com Pinia
- Estado da autenticação global
- Métodos para signup/login/logout

## 🎨 Componentes Inclusos

- **SignupForm**: Formulário completo de cadastro com validação
- **Layouts responsivos**
- **Toast notifications**
- **Loading states**

## 🚀 Deploy

### Build para produção:
```bash
npm run build
```

### Preview local da build:
```bash
npm run preview
```

### Deploy automático:
Este projeto está pronto para deploy em:
- **Vercel** (recomendado para Nuxt)
- **Netlify**
- **Railway**
- **Digital Ocean**

## 📚 Documentação Útil

- [Nuxt 3 Docs](https://nuxt.com/docs)
- [Supabase Docs](https://supabase.com/docs)
- [Nuxt UI](https://ui.nuxt.com)
- [Tailwind CSS](https://tailwindcss.com)

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer fork do projeto
2. Criar uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abrir um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

**Desenvolvido com ❤️ usando Nuxt 3 e Supabase**
