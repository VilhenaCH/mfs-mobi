# Frequência Escolar — V0.4

Versão focada em interface operacional estilo CRM/dark e edição manual do calendário.

## Fluxos

- **CSV diário:** atualiza o dia/turno e gera a cobrança diária.
- **Monitora HTML:** sincroniza/corrige o histórico retroativo.
- **Edição manual:** clique em qualquer botão M/T/N/I no calendário e altere o status sem editar código.

## Status editáveis

- Com frequência
- Pendente
- Justificada
- Não letivo
- Sem registro

A edição manual também aceita motivo/observação. Se uma pendência for regularizada ou justificada manualmente, ela deixa de aparecer na cobrança diária. Se um status for transformado manualmente em pendente em um turno já importado por CSV, ele passa a aparecer na cobrança daquele dia.

## Arquivos

- `index.html`
- `style.css`
- `app.js`

Compatível com GitHub Pages.
