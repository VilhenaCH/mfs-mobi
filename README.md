# MFS v1.0.0 · Companion First

O **MFS Companion** passa a ser a única fonte operacional de frequência do MFS.

## Fluxo
Monitora autenticado → MFS Companion → Firestore → Acompanhamento / Operação & logs / Assistente.

## Recursos
- sincronização de Hoje, Mês, Ano ou Período;
- consulta reforçada do dia mais recente para reduzir turnos ausentes;
- grade atual de turnos definida pelo Companion;
- histórico preservado por mês e escola;
- logs detalhados de cada mudança;
- Kanban automático de Pendentes / Concluídas / Justificadas;
- filtro por turno;
- cobranças em cards ou lista;
- Assistente baseado em sincronização recente e pendências reais;
- edição manual e seleção em massa continuam disponíveis.

## Importante
Publique `firestore.rules` antes de usar esta versão.
