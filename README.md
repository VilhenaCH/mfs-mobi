# MFS v0.7.0 — Monitoramento de Frequência Supremo

**Mobieduca.me**

Versão com foco em operação diária automática, experiência visual e conferência antes das importações.

## Principais novidades

### 1. Abertura automática do dia

Ao entrar no MFS, os turnos existentes das escolas no dia atual passam automaticamente de **Sem registro** para **Pendente**.

O MFS não sobrescreve:

- frequência realizada;
- justificativa;
- dia/turno não letivo.

Se o MFS permanecer aberto durante a virada da data, ele verifica o novo dia automaticamente.

Quando ainda não existe registro do mês, o MFS tenta utilizar os turnos salvos no cadastro da escola ou no mês anterior. Em finais de semana sem calendário mensal já conhecido, ele não presume automaticamente que haverá aula.

> O GitHub Pages não executa JavaScript com o navegador fechado. Portanto, a abertura ocorre no primeiro acesso do dia ou enquanto o MFS estiver aberto durante a virada da data.

### 2. Importações com comparação antes → depois

Tanto o HTML do Monitora quanto o CSV diário mostram antes da confirmação:

- situação atual no Firestore;
- situação que será gravada;
- indicação se haverá mudança ou se permanecerá igual.

No Monitora, a tabela inclui todas as situações que serão gravadas, inclusive registros sem alteração.

### 3. Cobranças em cards ou lista

A área de cobrança diária possui dois modos:

- **Cards**;
- **Lista**.

As pendências automáticas do dia também podem aparecer na cobrança, mesmo antes da importação do CSV. O CSV continua atualizando os registros para frequência ou pendência.

### 4. Menus personalizados

Os elementos `select` nativos foram substituídos visualmente por menus próprios do MFS, mantendo o `select` real sincronizado por baixo para preservar a lógica existente.

Isso evita dropdowns claros/padrão do sistema operacional no tema dark.

### 5. Motion design

Foram adicionados:

- fundo animado com grade, feixes e orbes;
- transições suaves entre as áreas;
- ripple em botões;
- animação do Assistente;
- destaque animado da coluna do dia atual;
- brilho discreto nas pendências do dia.

O sistema respeita `prefers-reduced-motion`.

### 6. Favicon próprio

Arquivos adicionados:

- `favicon.svg`
- `favicon-64.png`
- `apple-touch-icon.png`

O ícone da aba deixa de utilizar o ícone genérico de arquivo/site.

## Arquivos

```text
index.html
style.css
app.js
firebase-config.js
firestore.rules
favicon.svg
favicon-64.png
apple-touch-icon.png
README.md
```

## Atualização no GitHub Pages

Substitua os arquivos do repositório pelos desta versão.

A versão já utiliza cache-buster:

```text
style.css?v=0.7.0
firebase-config.js?v=0.7.0
app.js?v=0.7.0
```

Depois da publicação, faça `Ctrl + F5` uma vez.

## Firestore Rules

A v0.7.0 não cria novas coleções em relação à v0.7.0. As regras incluídas no pacote permanecem compatíveis com as novas funções.

## Segurança

Dados escolares e credenciais não ficam embutidos no repositório. A aplicação continua usando:

- Google Authentication;
- aprovação de usuário;
- Cloud Firestore;
- Firestore Security Rules;
- cofre criptografado para acessos sensíveis.
