# MFS v0.8.1 — Histórico individual interativo

Esta versão transforma a aba **Escola** em uma área operacional, não apenas de consulta.

## Novidades

- Clique em M/T/N/I no histórico individual para editar aquele dia/turno.
- Segure e arraste por pendências vermelhas para selecionar em massa.
- A seleção pode atravessar dias e meses diferentes da mesma escola.
- A barra de ações em massa agora é global e aparece tanto no Acompanhamento quanto na aba Escola.
- Alteração em massa grava cada mês correto no Firestore e registra auditoria com os meses afetados.
- Cobrança gerada pela seleção também funciona com datas de meses diferentes.
- Navegar para outra área limpa qualquer seleção pendente para evitar ações acidentais.

## Firebase

Não há novas coleções nem mudança obrigatória nas Firestore Rules em relação à v0.8.0.
