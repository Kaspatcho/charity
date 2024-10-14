# Charity

Este é um projeto de aplicação web para gerenciar finanças pessoais,
que permite rastrear receitas e despesas, definir orçamentos e visualizar tendências de gastos.
A aplicação é construída com **Laravel** no backend, **React** no frontend,
e utiliza **MySQL** para armazenamento de dados e **Redis** para cache.
A configuração do ambiente é feita com **Docker Compose**, com serviços para o aplicativo Laravel,
banco de dados MySQL e Redis.
#

## Funcionalidades

- Registro e autenticação de usuários.
- Rastreamento de receitas e despesas com categorias personalizadas.
- Definição de orçamentos por categoria.
- Painel de controle com visualizações de tendências financeiras.

## Estrutura do Projeto

- **Laravel**: Backend da aplicação, gerenciando a lógica de negócios e as APIs.
- **React**: Frontend responsável pela interface do usuário e visualizações.
- **MySQL**: Banco de dados relacional para armazenamento de usuários, transações e orçamentos.
- **Redis**: Utilizado para cache.

## Pré-requisitos

Certifique-se de ter os seguintes softwares instalados:

- **Docker**: [Instalar Docker](https://docs.docker.com/get-docker/)
- **Nodejs**: [Instalar Nodejs](https://nodejs.org/en/download/package-manager)

## Configuração do Ambiente

1. **Clone o repositório do projeto:**
```bash
git clone https://github.com/Kaspatcho/charity.git
cd charity
```

2. **Copie o arquivo `.env.example` para `.env` e ajuste as configurações, se necessário**:
```bash
cp .env.example .env
```

3. **Atualize o arquivo .env com as credenciais do banco de dados**:
```makefile
DB_CONNECTION=mysql
DB_HOST=mysql
DB_PORT=3306
DB_DATABASE=nome_do_banco
DB_USERNAME=usuario
DB_PASSWORD=senha
```

4. **Construa e inicie os containers com o Docker Compose**:
```bash
docker compose up -d
```

5. **Instale as dependências do Laravel**:
```bash
docker compose exec web composer install
```

6. **Gere a chave da aplicação Laravel**:
```bash
docker-compose exec web php artisan key:generate
```

7. **Execute as migrações para configurar o banco de dados**:
```bash
docker-compose exec web php artisan migrate
```

8. **Instale as dependências do frontend (React)**:
```bash
npm install
```

9. **Inicie o servidor de desenvolvimento do React**:
```bash
npm run dev
```

## Utilização
A aplicação estará disponível em `http://localhost:8080`

## Estrutura do Docker Compose
O arquivo docker-compose.yml configura três serviços:

- **web**: Serviço para a aplicação Laravel.
- **mysql**: Banco de dados MySQL.
- **redis**: Serviço de cache e mensagens em tempo real.

## Comandos Úteis
### parar os containers
```bash
docker compose down
```

### acessar o container do laravel
```bash
docker compose exec web bash
```

### executar os testes do laravel
```bash
docker compose exec web php artisan test
```

### acessar [laravel tinker](https://laravel.com/docs/11.x/artisan#tinker)
```bash
docker compose exec web php artisan tinker
```
