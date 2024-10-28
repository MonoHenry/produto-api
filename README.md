# produto-api

Projeto de desenvolvimento para gerencimento de produtos com a criação de um banco de dados e integração com backend.

# Depêndencias
- npm
- Docker
- PostgreSQL
```
NOTE: Caso você deseje testar os métodos PUT/POST/DELETE, será necessário uma ClientAPI, no meu caso, estou usando atac.
```
# Instruções de instalação

1. Clone o repositório
```bash 
git clone https://github.com/MonoHenry/produto-api
```

2. Entre no diretório
```bash
cd produto-api/
```

3. Crie um arquivo .env e coloque as seguintes informações:
```
PGUSER=$(SEU_USUARIO)
PGHOST=127.0.0.1
PGDATABASE=banco
PGPASSWORD=$(SUA_SENHA)
PGPORT=5433
```

4. Baixe as dependências do Node.js
```bash
npm i
```

5. Rode o servidor
```bash
npm run dev
```

# Teste de funcionalidade

As rotas são:
```
/produtos para GET em todos os produtos e para POST.

/produto/:id para GET em produto específico, para PUT e para DELETE.
```
### Um exemplo de uso para o GET em todos os produtos

Digite no navegador: 
```
http://localhost:12345/produtos
```

O corpo da resposta deve conter todos os produtos.

### GET em produto específico

Digite no navegador: 
```
http://localhost:12345/produto/2
```

O corpo da resposta deve conter o produto de ID = 2.

## Como testar POST, PUT, DELETE

Usando a ClientAPI de sua preferência, decida qual será o método HTTP usado, em seguida, coloque as informações necessárias dentro de um JSON (Necessário apenas para POST e PUT).

### Uso do método DELETE

Com o método HTTP tendo sido definido como DELETE, define-se a URL como:

```
http://localhost:12345/produto/2
```

Para excluir, neste exemplo, o produto de ID = 2.

### Uso do método POST

Com o método HTTP tendo sido definido como POST, define-se a URL como:
```
http://localhost:12345/produtos
```
Em seguida, cria-se um JSON contendo as informações:
```
{
   "descricao" : "$(A_DESCRICAO_DE_SUA_PREFERENCIA)",
   "preco"     " PRECO_DO_PRODUTO,
   "estoque"   : QUANTIDADE_DE_PRODUTOS
}
```

Depois é necessário fazer a requisição.

### Uso do método PUT

O PUT usa a rota do DELETE, mas possui um JSON assim como o POST, incluindo as mesmas informações.

