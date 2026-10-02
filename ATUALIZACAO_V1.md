# Atualização MFS v1.0.0 · Companion First

## O que muda
O Companion passa a ser a única fonte operacional de frequência. Os módulos antigos de importação foram removidos da interface e da lógica.

## Nova Central: Operação & logs
- Kanban: Pendentes / Concluídas / Justificadas;
- filtro por data e turno;
- cobrança em cards ou lista;
- logs detalhados de cada mudança recebida do Companion.

## Assistente
O Assistente agora verifica:
- se o Monitora foi sincronizado recentemente;
- pendências de Noite anterior, Manhã, Integral e Tarde;
- horários de cobrança;
- rotina, tarefas, eventos e água.

## Publicação
Substitua os arquivos do repositório pelo conteúdo deste pacote e publique também `firestore.rules` no Firebase Console.
