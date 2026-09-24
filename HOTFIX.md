# MFS v0.5.2 — Hotfix de importação Firestore

Esta correção mantém as Firestore Security Rules atuais.

## Corrigido

- Importação do HTML do Monitora não grava mais escolas e registros mensais no mesmo batch.
- As escolas são gravadas primeiro.
- Os registros mensais são gravados depois, em lotes pequenos de 5 operações.
- O CSV diário também usa lotes pequenos.
- Isso evita `permission-denied` causado pelas validações `exists/get` das Security Rules.
- O `index.html` usa `app.js?v=0.5.2` para evitar cache do JavaScript antigo.

## Arquivos a substituir no GitHub

Obrigatórios:

- `app.js`
- `index.html`

`firestore.rules`, `firebase-config.js` e `style.css` estão incluídos apenas para manter o pacote completo e não precisam ser alterados para este hotfix.
