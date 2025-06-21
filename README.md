# Zeluc - Agência Digital

Zeluc é um site institucional moderno e responsivo para uma agência digital, desenvolvido em React com TypeScript e Tailwind CSS. O projeto apresenta portfólio de serviços, formulário de contato integrado ao EmailJS, newsletter, suporte multilíngue (PT, EN, ES) e integração com WhatsApp.

## Funcionalidades

- **Página inicial com banner e apresentação da agência**
- **Seção de serviços** detalhada
- **Portfólio de projetos** com filtro por categoria
- **Descrição dos serviços** com CTA para WhatsApp
- **Formulário de contato** (envio direto para o e-mail da Zeluc via EmailJS)
- **Newsletter** (captura de e-mail integrada ao EmailJS)
- **Links para redes sociais**
- **Tema escuro/claro**
- **Totalmente responsivo**
- **Internacionalização (i18n)**: Português, Inglês e Espanhol

## Tecnologias Utilizadas

- React + TypeScript
- Tailwind CSS
- EmailJS (envio de e-mails frontend)
- React Router DOM
- i18next (tradução)
- Vite

## Como rodar localmente

1. Clone o repositório:
   ```sh
   git clone https://github.com/eapeli/zeluc.git
   cd zeluc
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Rode o projeto:
   ```sh
   npm run dev
   ```
4. Acesse em [http://localhost:5173](http://localhost:5173)

## Deploy

O deploy é feito via [Cloudflare Pages](https://pages.cloudflare.com/) conectado ao repositório do GitHub. O build é automático a cada push na branch `main`.

- **Build command:** `npm run build`
- **Output folder:** `build`

## Contato

- E-mail: contato.zeluc@gmail.com
- Instagram: [@zeluc.ag](https://instagram.com/zeluc.ag)
- LinkedIn: [Zeluc](https://www.linkedin.com/in/zeluc/)

---

Projeto desenvolvido por Elisabete Alves para a agência Zeluc.
