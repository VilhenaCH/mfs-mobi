# MFS v0.7.3 — correção de selects e performance

Esta versão corrige um loop de renderização nos menus customizados.

- Remove o MutationObserver global que observava todo o DOM.
- Impede reconstrução desnecessária de selects já inicializados.
- Reconstrói as opções do menu apenas quando valor/opções realmente mudam.
- Mantém selects dinâmicos de Usuários inicializados explicitamente.
- Corrige seleção do Turno na importação CSV.
- Reduz uso de CPU e travamentos ao abrir menus.

# MFS v0.7.2 — Hotfix de desempenho do calendário

Esta versão mantém as funções da v0.7.1 e altera a forma como o calendário mensal é renderizado.

## Principais correções

- Virtualização dos calendários: somente escolas próximas da área visível possuem os 30/31 dias montados no DOM.
- Calendários distantes são desmontados e substituídos por um placeholder leve.
- `content-visibility: auto` nos cards das escolas.
- Busca de escolas com debounce.
- Atualizações vindas do Firestore são agrupadas antes de redesenhar a tela.
- Remoção de sombras individuais nos milhares de botões M/T/N/I.
- Efeitos decorativos e blur são desligados automaticamente somente na tela Acompanhamento.
- As demais áreas continuam com o design e animações da v0.7.1.
- Nenhuma alteração de Firestore Rules é necessária.

## Arquivos que precisam ser substituídos

- `index.html`
- `style.css`
- `app.js`

O Firebase e os dados existentes não precisam ser recriados.
