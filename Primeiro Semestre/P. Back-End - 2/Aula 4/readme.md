# GitParty - Festas a Fantasia 🎭

O **GitParty** é uma plataforma web voltada para o gerenciamento de festas a fantasia. O sistema permite a criação, listagem, visualização de detalhes e upload de recordações fotográficas dos eventos em um ambiente imersivo, responsivo e personalizado.

---

## 📱 Telas

| ![Listagem de Eventos](assets/Tela/1.png) | ![Cadastro de Evento](assets/Tela/2.png) | ![Detalhes do Evento](assets/Tela/3.png) |
| :---: | :---: | :---: |
| *Página Inicial (Listagem)* | *Formulário de Invocação (Modal)* | *Detalhes Místicos e Galeria* |

---

## 🚀 Tecnologias e Ferramentas

### Frontend & Desenvolvimento
* **HTML5 & CSS3:** Estruturação e estilização da interface web.
* **JavaScript:** Utilizado para manipulação dinâmica e gerenciamento de modais e consumo assíncrono da API local via `fetch`.
* **Google Project IDX:** Ambiente de desenvolvimento integrado (IDE) baseado em nuvem utilizado para acelerar a codificação e configuração do projeto.

### Backend & Persistência
* **Node.js & Express:** Responsáveis por estruturar a API REST local (`http://localhost:3000`).
* **Banco de Dados Relacional:** Estruturado para armazenar dados expandidos dos eventos e caminhos das imagens associadas.
* **Multer Middleware:** Utilizado no backend para gerenciar o upload físico e o roteamento de arquivos de imagem para a galeria.

---

## 🛠️ Arquitetura do Backend (API)

O backend suporta o ciclo completo de gerenciamento dos eventos. Os endpoints principais escutados na porta `3000` são:

* `GET /eventos/listar` - Retorna todos os eventos com seus dados completos (incluindo capacidade, inscrições e status).
* `GET /eventos/buscar/:id` - Busca os detalhes e metadados de um evento específico através do ID.
* `POST /eventos/cadastrar` - Evoca um novo evento preenchendo todos os atributos mágicos no banco de dados.
* `DELETE /eventos/excluir/:id` - Bane permanentemente um evento do sistema.
* `POST /imagem/cadastrar/:id` - Realiza o upload de fotos para a galeria de um evento específico (Multipart/Form-Data).
* `GET /imagem/buscar/:id` - Resgata os caminhos de todas as imagens vinculadas ao ID do evento.

---

## 🪄 Prompts Utilizados no Desenvolvimento

O processo de evolução da aplicação contou com engenharia de prompt para refinar o código e integrar os novos recursos. O direcionamento estrutural utilizado foi:

> *"Crie o design de interface (UI/UX) para um sistema web chamado GitParty, uma plataforma de gerenciamento de festas à fantasia.
> 
> O sistema deve conter duas telas principais:
> 
> 1. **Tela Home (Listagem de Eventos)**
>    * Exibir uma lista de eventos cadastrados em formato de cards.
>    * Cada evento deve mostrar: título, descrição, data, local, capacidade máxima, quantidade de inscrições e o status atual (Ativo, Pendente, Cancelado).
>    * Incluir um botão destacado para abrir o formulário de criação de novo evento.
>    * O formulário de cadastro (modal) deve conter campos para: título, descrição, local, data do evento, capacidade máxima, inscrições iniciais e status.
> 
> 2. **Tela de Detalhes do Evento**
>    * Exibir todas as informações detalhadas do evento selecionado.
>    * Incluir uma seção dedicada para upload de novas imagens de recordação.
>    * Exibir as imagens já enviadas em forma de galeria responsiva integrada.
> 
> **Estilo visual (Muito importante):**
> * Estética fantasiosa, lúdica e encantada, como um grimório ou mundo mágico moderno.
> * Elementos visuais inspirados em magia e mistério (efeitos de brilho neon, partículas flutuantes, gradientes suaves e bordas translúcidas).
> * Paleta de cores baseada em tons de roxo profundo, lilás místico, azul escuro estrelado e detalhes brilhantes em amarelo/âmbar.
> * Interface moderna, limpa e intuitiva (com efeitos hover de iluminação nos botões e cards).
> 
> **Público-alvo:**
> * Entusiastas de festas à fantasia, organizadores e produtores de eventos temáticos."*

---

## ▶️ Como Usar

### 1. Clonar o Repositório
```bash
git clone [https://github.com/seu-usuario/gitparty.git](https://github.com/seu-usuario/gitparty.git)
cd gitparty