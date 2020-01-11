# frontend-v2

# Setup
## Copiar o arquivo de ambiente
Copie o arquivo de exemplo `.env.example` para `.env`, por exemplo:

```shell
cp .env.example .env
```

## Criar a network `nyx` no Docker
```shell
docker network create nyx
```

---

## Rodando o projeto com Docker

### Compila e hot-reloads para ambiente de desenvolvimento
```shell
make install    # Caso haja algum pacote a ser instalado
make run
```

#### Para ver os logs do node
```shell
make logs
```

### Compila, minifica e serve para o ambiente de staging
```shell
make install    # Caso haja algum pacote a ser instalado
make build
make stage-run
```

### Compila, minifica e serve para o ambiente de produção
```shell
make install    # Caso haja algum pacote a ser instalado
make build
make prod-run
```

---

## Pre processador
O pre processador utilizado é o `Sass` com o compilador `Dart Sass`  
Mais detalhes sobre: https://sass-lang.com/dart-sass

---

## Regras de ESLint
O ESLint está utilizando o estilo baseado nas regras do `JavaScript Standard Style`  
Mais detalhes sobre: https://standardjs.com/

### Lints and fixes files
```shell
make lint
```

---

## Testes

### testes de unidade (JavaScript e Vue componentes)
Está sendo utilizando o `Jest` como framework de testes javascript juntamente com a ferramenta do Vue chamada `vue-test-utils`  
Mais detalhes sobre: https://vue-test-utils.vuejs.org/

### Estrutura e Nomeclatura
- Testes de unidade são executados em arquivos específicos, então, ele deve ficar no mesmo diretório (ao lado);
- Todos os testes de unidade devem ser nomeados com:
  - `nome do (JavaScript ou componentes) testado` + `.test.js`

**Por exemplo:**  
```
| - / components  
| --- Button.vue  
| --- Button.test.js  
```

### Rodando testes unitários

#### Todos os testes
```shell
make unit-test
```

#### Rodar um arquivo específico
```shell
make unit-single FILE_MATCH=AppFooter
```

**OBS: `AppFooter` é o nome do arquivo (sem a extensão) que você deseja fazer o teste, o Jest irá procurar por arquivos de teste que que corresponda, nesse caso de exemplo, ele encontrará `AppFooter.test.js`**

#### Atualizar snapshots
Em alguns testes são gerados snapshots, são arquivos que salvam como o código foi renderizado/executado, para que se houver alguma modificação na sua estrutura ou resultados, ao rodar os testes novamente ele irá comparar o novo snapshot com o anterior.

Caso ele encontre alguma diferença, basta rever o arquivo de teste correspondente, verificar se a nova versão é a correta e executar o seguinte código, para renovar os snapshots:
```shell
make unit-snap
```

**OBS: ele renovará todos, então se houver mais de um snapshot com incompatibilidade, resolva todos antes de atualizar os snaps**

### Coverage
Ao rodar os testes é gerado um diretório chamado `coverage` que exibe numa interface gráfica a cobertura de testes da aplicação.
É possível acessar através do `tests/unit/coverage/index.html`


### Testes de integração
Está utilizando o `Cypress`  
Mais detalhes sobre: https://www.cypress.io/

### Estrutura e Nomeclatura
- Testes de integração são executados de uma maneira holistica, testa o componentamento de vários arquivos, ele deve ficar num diretório específico localizado em `tests/e2e/specs`;
- Apesar de todos os arquivos JavaScript serem executados dentro do diretório de specs, a convenção de nomeclatura deve ser:
  - `nome da página ou seção testada` + `.spec.js`

**Por exemplo:**  
```
| - / tests
| --- / e2e
| ---- / specs 
| ------ Home.spec.js
```

### Rodando testes end-to-end 
```shell
make e2e-test
```

### Rodando testes end-to-end com interface gráfica
```
make e2e-open-test
```

---

### Mais customizações do vue-cli
See [Configuration Reference](https://cli.vuejs.org/config/).
