Projeto Blog Pessoal - Frontend com React

source: imgur.com

      

1. Descrição
O Blog Pessoal - Frontend é uma aplicação web desenvolvida com React e TypeScript, com o objetivo de consumir e exibir dados de uma API REST construída com Nest. A aplicação permite a visualização, criação, edição e exclusão de postagens de blog, categorizadas por temas e vinculadas a usuários autenticados.

Funcionalidades:

Cadastro e login de usuários
Listagem e gerenciamento de postagens
Criação, edição e exclusão de temas
Associação entre postagens, temas e autores
Navegação entre páginas com React Router Dom
Consumo de API com Axios
Estilização com Tailwind CSS

2. Autenticação e Validação de Token JWT
Fluxo de Autenticação
O usuário realiza o login com e-mail e senha.
A aplicação faz uma requisição para a API, que retorna um token JWT.
O token é armazenado na Context API para uso em futuras requisições autenticadas.
Nas rotas protegidas, o token é validado antes do acesso aos recursos.
Controle de Autenticação
Se o token expirar ou for inválido, o usuário será redirecionado para a página de login.

3. Tecnologias Utilizadas
Tecnologia	Finalidade
React	Biblioteca JavaScript para interfaces
TypeScript	Superset do JavaScript com tipagem
Tailwind CSS	Estilização com classes utilitárias
Axios	Consumo de APIs REST
React Router DOM	Roteamento SPA
Vite	Build tool rápido para projetos React

4. Pré-requisitos
Antes de iniciar o projeto, certifique-se de ter instalado:

Node.js (versão 16 ou superior)
Git
Visual Studio Code ou outro editor
Backend - Nest (Repositório da API)

5. Como executar o projeto localmente
Clone o repositório:
git clone https://github.com/rafaelq80/blogpessoal_react_tjs13.git
Acesse a pasta do projeto:
cd blogpessoal_react_tjs13
Instale as dependências:
npm install
Execute o projeto em modo desenvolvimento:
npm run dev
Acesse a aplicação em:
http://localhost:5173

6. Integração com a API Backend
A aplicação se comunica com a API do projeto:

🔗 Blog Pessoal - Backend Nest

A URL base da API deve ser configurada (ex: http://localhost:4000) em um arquivo de configuração, como .env, ou diretamente nos serviços do Axios.


7. Estrutura de Diretórios
src/
│
├── assets/           → Imagens e ícones
├── components/       → Componentes reutilizáveis
├── contexts/         → Gerenciamento de estado global (ex: autenticação)
├── models/           → Interfaces e tipos do projeto
├── pages/            → Páginas da aplicação
├── services/         → Configuração do Axios
├── utils/            → Funções auxiliares (ToastAlertas)
├── App.css           → Estilos do Componente raiz
├── App.tsx           → Componente raiz
├── main.tsx          → Entrada da aplicação
└── index.css         → Estilos globais com Tailwind

8. Implementações futuras
Upload de imagem de perfil para o usuário
Responsividade aprimorada
Validações com React Hook Form
Testes com Jest + React Testing Library

9. Contribuição
Contribuições são bem-vindas!

Se você encontrou algum problema ou deseja propor melhorias:

Abra uma issue
Envie um pull request
Compartilhe com colegas aprendizes!

10. Contato
Desenvolvido por Rafael Dúvidas ou sugestões? Entre em contato pelo GitHub ou abra uma issue no repositório.
