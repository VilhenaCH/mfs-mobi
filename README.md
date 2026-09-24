# Monitoramento de Frequência Escolar

Web app para acompanhamento de frequência escolar por **rede de ensino, escola, data e turno**, com foco inicial nas redes **SEDUC-PI** e **SEMEC Teresina**.

O projeto foi pensado para funcionar diretamente no navegador e ser publicado no **GitHub Pages**, sem necessidade de servidor próprio ou terminal para uso cotidiano.

## Status do projeto

**Versão atual:** protótipo V0.1

A versão atual utiliza **agosto de 2026** como mês de demonstração.

Os calendários letivos utilizados como referência são:

- SEDUC-PI 2026
- SEMEC Teresina 2026

Nesta primeira versão, alguns status de frequência são demonstrativos. A próxima etapa será substituir esses dados pelos registros reais das escolas.

## Objetivo

O sistema deverá permitir:

- acompanhar a frequência de cada escola;
- separar escolas por rede de ensino;
- visualizar frequência por dia e turno;
- identificar frequências enviadas e não enviadas;
- respeitar o calendário letivo específico de cada rede;
- identificar sábados letivos, feriados, recessos e dias sem aula;
- importar arquivos CSV de frequência;
- atualizar registros já existentes sem gerar duplicidades;
- gerar mensagens prontas para cobrança de pendências;
- permitir o uso por diferentes técnicos;
- registrar quem realizou cada importação ou atualização.

## Redes iniciais

Nesta primeira fase serão acompanhadas:

### SEDUC-PI

Rede estadual do Piauí.

O sistema utiliza o calendário próprio da SEDUC-PI e considera suas particularidades, incluindo sábados letivos.

### SEMEC Teresina

Rede municipal de Teresina.

Utiliza calendário próprio e independente da SEDUC.

A arquitetura será preparada para adicionar futuramente outras redes, como:

- SEMEC União;
- outras redes municipais;
- rede federal;
- outras instituições.

## Estrutura atual

```text
frequencia-webapp-v1/
│
├── index.html
├── style.css
├── app.js
└── README.md
```

### index.html

Contém a estrutura visual e as telas do sistema.

### style.css

Responsável pelo layout, responsividade, cores, cards, calendários e demais componentes visuais.

### app.js

Contém a lógica do protótipo:

- escolas;
- redes;
- calendários;
- geração dos status;
- filtros;
- dashboard;
- acompanhamento mensal;
- pendências;
- mensagens;
- importação de CSV;
- armazenamento temporário no navegador.

## Tecnologias

A proposta do projeto é manter a aplicação simples e compatível com GitHub Pages.

Tecnologias atuais:

- HTML5
- CSS3
- JavaScript puro
- LocalStorage para testes

Tecnologias previstas:

- Firebase Authentication
- Cloud Firestore

Opcionalmente, no futuro:

- Firebase Storage

## Funcionamento

O sistema relaciona cada frequência com:

```text
Escola
+
Rede
+
Calendário
+
Data
+
Turno
```

A lógica esperada é:

```text
Arquivo CSV
    ↓
Identificação da escola
    ↓
Identificação da rede
    ↓
Calendário correspondente
    ↓
Verificação do dia letivo
    ↓
Verificação do turno
    ↓
Frequência enviada ou pendente
```

A rede não deve ser definida apenas pelo nome da escola.

Cada escola possuirá um cadastro próprio informando sua rede e seu calendário.

## Status visuais

Na interface são utilizados estados visuais para facilitar o acompanhamento.

- **Verde:** frequência enviada
- **Vermelho:** frequência não enviada / pendente
- **Cinza:** dia não letivo ou não aplicável
- **Destaque especial:** sábado letivo ou situação especial do calendário

Outros estados poderão ser adicionados posteriormente.

## Turnos

O sistema está preparado para trabalhar com:

- Manhã
- Integral
- Tarde
- Noite

Cada escola poderá oferecer apenas os turnos que realmente possui.

Isso evita que uma escola seja considerada pendente em um turno que ela não oferece.

## Importação de CSV

O protótipo já possui leitura de CSV diretamente no navegador.

Não é necessário enviar o arquivo para um servidor.

Fluxo:

```text
Selecionar CSV
    ↓
Ler no navegador
    ↓
Identificar escolas
    ↓
Exibir prévia
    ↓
Confirmar importação
    ↓
Atualizar frequência
```

A versão atual aceita arquivos que possuam campos equivalentes a:

```text
escola
frequencia
turmas
alunos
```

Também tenta reconhecer algumas variações desses nomes.

## Atualização de registros

A ideia é que um registro seja identificado por:

```text
Escola + Data + Turno
```

Assim, se o mesmo período for importado novamente, o sistema deverá atualizar o registro existente em vez de criar uma duplicidade.

Exemplo:

```text
24/08/2026
Escola X
Tarde
Não enviada
```

Após nova importação:

```text
24/08/2026
Escola X
Tarde
Enviada
```

A pendência deverá desaparecer automaticamente.

## Pendências e WhatsApp

O sistema possui uma área destinada às frequências não enviadas.

A partir dela será possível gerar mensagens como:

```text
Olá! Na conferência da frequência escolar referente ao dia 24/08/2026,
identificamos que a frequência da Escola X, no turno da Tarde, não consta
como enviada no sistema.

Solicitamos, por gentileza, que seja realizada a verificação e, se
necessário, a regularização do registro.

Após o ajuste, pedimos que nos confirme por aqui. Obrigado!
```

Futuramente será possível consolidar vários turnos pendentes da mesma escola em uma única mensagem.

## Publicação no GitHub Pages

O projeto foi desenvolvido para funcionar como site estático.

### 1. Criar um repositório

Crie um repositório no GitHub, por exemplo:

```text
frequencia-escolar
```

### 2. Enviar os arquivos

Adicione na raiz do repositório:

```text
index.html
style.css
app.js
README.md
```

### 3. Ativar GitHub Pages

No GitHub:

```text
Settings
→ Pages
→ Build and deployment
→ Deploy from a branch
```

Selecione:

```text
Branch: main
Folder: /root
```

Depois salve.

O endereço deverá ficar semelhante a:

```text
https://SEU-USUARIO.github.io/frequencia-escolar/
```

## Firebase

A integração com Firebase ainda não está ativa na V0.1.

A arquitetura prevista é:

```text
GitHub Pages
      ↓
Web App
      ↓
Firebase Authentication
      ↓
Cloud Firestore
```

### Firebase Authentication

Será utilizado para login com e-mail e senha.

Exemplo de perfis:

- Administrador
- Técnico

### Cloud Firestore

Será utilizado para armazenar:

- usuários;
- escolas;
- redes;
- calendários;
- frequências;
- importações;
- histórico de alterações.

## Estrutura futura do banco

Exemplo conceitual:

```text
users/
schools/
networks/
calendars/
frequencies/
imports/
```

Cada frequência deverá registrar informações como:

```text
escolaId
data
turno
status
turmas
alunos
importedAt
importedBy
```

## Segurança

Como o projeto será publicado no GitHub Pages, o código JavaScript será público.

Por isso:

- nenhuma chave privada deverá ficar no código;
- nenhuma credencial administrativa deverá ser publicada;
- o acesso aos dados será protegido pelo Firebase Authentication;
- o Firestore deverá utilizar regras de segurança.

A configuração pública do Firebase para aplicações Web pode estar no front-end, mas segredos administrativos nunca deverão ser incluídos no repositório.

## Próximas etapas

1. Inserir todas as escolas acompanhadas.
2. Classificar corretamente cada escola entre SEDUC e SEMEC.
3. Inserir as frequências reais de agosto de 2026.
4. Validar a visualização mensal.
5. Ajustar turnos de cada escola.
6. Validar pendências com os dados reais.
7. Criar cadastro de escolas.
8. Conectar Firebase Authentication.
9. Conectar Cloud Firestore.
10. Criar histórico de importações e alterações.
11. Expandir para os demais meses.
12. Adicionar novas redes de ensino.

## Uso

O usuário final deverá apenas acessar a URL do sistema pelo navegador.

Não será necessário executar:

```text
npm start
python app.py
localhost
```

Depois da publicação, o fluxo será:

```text
Abrir o site
→ Fazer login
→ Importar frequência
→ Acompanhar calendário
→ Consultar pendências
```

## Observação

Este projeto está em desenvolvimento.

A V0.1 é destinada principalmente à validação da interface, da estrutura de monitoramento e da lógica de redes e calendários antes da integração definitiva com Firebase e dos dados reais.

---

**Projeto:** Monitoramento de Frequência Escolar  
**Versão:** 0.1  
**Ano-base inicial:** 2026
