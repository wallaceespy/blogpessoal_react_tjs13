# 📝 Blog Pessoal — Frontend

> Aplicação web desenvolvida com React + TypeScript, consumindo uma API REST construída com Nest.

![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=flat&logo=vite&logoColor=FFD62E)

---

## 01. Descrição

O **Blog Pessoal - Frontend** é uma aplicação web que permite a visualização, criação, edição e exclusão de postagens de blog, categorizadas por temas e vinculadas a usuários autenticados.

**Funcionalidades:**

- Cadastro e login de usuários
- Listagem e gerenciamento de postagens
- Criação, edição e exclusão de temas
- Associação entre postagens, temas e autores
- Navegação entre páginas com React Router Dom
- Consumo de API com Axios
- Estilização com Tailwind CSS

---

## 02. Autenticação e Validação de Token JWT

**Fluxo de autenticação:**

1. O usuário realiza o login com e-mail e senha.
2. A aplicação faz uma requisição para a API, que retorna um token JWT.
3. O token é armazenado na Context API para uso em futuras requisições autenticadas.
4. Nas rotas protegidas, o token é validado antes do acesso aos recursos.

> ⚠️ **Controle de autenticação:** Se o token expirar ou for inválido, o usuário será redirecionado para a página de login.

---

## 03. Tecnologias utilizadas

| Tecnologia | Finalidade |
|---|---|
| React | Biblioteca JavaScript para interfaces |
| TypeScript | Superset do JavaScript com tipagem |
| Tailwind CSS | Estilização com classes utilitárias |
| Axios | Consumo de APIs REST |
| React Router DOM | Roteamento SPA |
| Vite | Build tool rápido para projetos React |

---

## 04. Pré-requisitos

Antes de iniciar o projeto, certifique-se de ter instalado:

- **Node.js** (versão 16 ou superior)
- **Git**
- **Visual Studio Code** ou outro editor
- **Backend Nest** — [Repositório da API](#)

---

## 05. Como executar o projeto localmente

**1. Clone o repositório:**
```bash
git clone https://github.com/rafaelq80/blogpessoal_react_tjs13.git
```

**2. Acesse a pasta do projeto:**
```bash
cd blogpessoal_react_tjs13
```

**3. Instale as dependências:**
```bash
npm install
```

**4. Execute o projeto em modo desenvolvimento:**
```bash
npm run dev
```

**5. Acesse a aplicação em:**
```
http://localhost:5173
```

---

## 06. Integração com a API Backend

A aplicação se comunica com a API do projeto **Blog Pessoal — Backend Nest**.

A URL base da API deve ser configurada em um arquivo `.env` ou diretamente nos serviços do Axios:

```env
VITE_API_URL=http://localhost:4000
```

---

## 07. Estrutura de diretórios

```
src/
│
├── assets/           → Imagens e ícones
├── components/       → Componentes reutilizáveis
├── contexts/         → Gerenciamento de estado global (autenticação)
├── models/           → Interfaces e tipos do projeto
├── pages/            → Páginas da aplicação
├── services/         → Configuração do Axios
├── utils/            → Funções auxiliares (ToastAlertas)
├── App.css           → Estilos do componente raiz
├── App.tsx           → Componente raiz
├── main.tsx          → Entrada da aplicação
└── index.css         → Estilos globais com Tailwind
```

---

## 08. Implementações futuras

- [ ] Upload de imagem de perfil para o usuário
- [ ] Responsividade aprimorada
- [ ] Validações com React Hook Form
- [ ] Testes com Jest + React Testing Library

---

## 09. Contribuição

Contribuições são bem-vindas!

Se você encontrou algum problema ou deseja propor melhorias:

- Abra uma **issue**
- Envie um **pull request**
- Compartilhe com colegas aprendizes!

---

## 10. Contato

Desenvolvido por **Rafael**

Dúvidas ou sugestões? Entre em contato pelo GitHub ou abra uma issue no repositório.
