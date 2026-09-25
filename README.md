# MFS v0.8.2 — Grade esperada por turno

Esta versão corrige a regra de turnos esperados da v0.8.0/v0.8.1.

## Correção principal

Cada CSV calibra somente o turno que representa. O Firestore passa a armazenar `expectedShiftRoster` com flags independentes (`manha`, `integral`, `tarde`, `noite`) e `expectedShiftRosterVersion: 2`.

Na primeira importação com a v0.8.2, a configuração antiga `expectedShifts` deixa de ser a fonte de verdade. Isso limpa a contaminação de turnos das versões anteriores.

## Fluxo recomendado de migração

Importe uma vez os quatro CSVs corretos: Manhã, Integral, Tarde e Noite. O selo da escola mostrará `CSV 1/4`, `CSV 2/4` ... até `CSV 4/4`.

Durante essa primeira calibração, somente turnos já confirmados aparecem. Isso é intencional: é melhor esconder um turno ainda não calibrado do que inventar um turno que a escola não possui.

## Proteção contra arquivo no turno errado

Antes de gravar, o MFS compara a composição do CSV com o mês anterior do Monitora. Quando a compatibilidade com outro turno é forte, o MFS muda automaticamente o seletor e informa a correção na prévia.

## Operação

Somente turnos esperados pela grade v2:

- aparecem no calendário atual;
- recebem pendência automática;
- entram na cobrança diária.

Dados antigos de turnos errados não são apagados do Firestore, apenas deixam de participar da operação atual.

## Histórico individual

O mês atual usa a grade esperada v2. Meses anteriores continuam exibindo os turnos que realmente constam no histórico daquele mês.

## Firebase Rules

É obrigatório publicar o `firestore.rules` desta versão antes de usar a nova calibração.
