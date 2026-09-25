# MFS v0.8.0 — Turnos esperados e histórico individual

## Novidades

- O CSV diário passa a definir a grade de **turnos esperados** por escola.
- Cada CSV é autoritativo para o turno selecionado: escolas presentes passam a esperar o turno; escolas ausentes deixam de esperá-lo.
- O histórico bruto do Monitora continua preservado no Firestore; apenas a exibição e as cobranças obedecem aos turnos esperados.
- A abertura automática do dia cria pendências somente nos turnos esperados.
- Nova aba **Escola** para consultar uma unidade isoladamente e visualizar todos os meses disponíveis.
- Cada card do acompanhamento ganhou botão **Histórico**.

## Importante

Esta versão altera `firestore.rules`, pois técnicos autorizados precisam poder atualizar somente os campos controlados de grade esperada no documento da escola. Publique as novas Rules no Firebase Console.

Na primeira utilização da v0.8.0, a grade vai sendo saneada turno a turno conforme os CSVs são importados. Depois que os CSVs de Manhã, Integral, Tarde e Noite forem processados ao menos uma vez, o cadastro de turnos esperados estará completamente definido pelo fluxo diário.
