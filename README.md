# MFS v0.6.0 — Assistente Supremo

Esta versão amplia o MFS para funcionar como central operacional do técnico.

## Novidades

- Relógio 24h com segundos.
- Assistente com checklist diário dos CSVs esperados.
- Alertas da rotina de trabalho (09:30, 12:20, 13:20, 15:00 e saída 17:20 / sexta 16:20).
- Lembrete de água configurável.
- Tarefas pessoais por usuário, salvas no Firestore.
- Eventos compartilhados do calendário (admin).
- Perfil por escola com diretor, operador Mobi, WhatsApp, AnyDesk e observações.
- Cofre de credenciais criptografado com AES-GCM + PBKDF2 antes de gravar no Firestore.
- Seleção por arraste somente em pendências do calendário.
- Cobrança gerada a partir da seleção.
- Alteração em massa de status.
- Mensagem diária de cobrança mais natural e adaptada ao horário.

## Segurança do cofre

O Firestore recebe apenas o conteúdo criptografado. A senha mestre do cofre não é salva no Firebase nem no GitHub. O primeiro administrador inicializa a senha mestre dentro do próprio MFS. Os demais técnicos precisam conhecer essa mesma senha mestre para visualizar as credenciais.

## Atualização obrigatória das regras

A versão 0.6 adiciona novas coleções e subcoleções. Publique o conteúdo de `firestore.rules` desta versão em Firebase Console > Firestore Database > Rules.

## Arquivos

Substitua no GitHub Pages:

- index.html
- style.css
- app.js
- firestore.rules (publique no console do Firestore; manter o arquivo no GitHub serve como versão de referência)

O `firebase-config.js` atual continua válido.

## Notificações

Os lembretes e notificações automáticas desta versão funcionam enquanto o MFS estiver aberto no navegador. Para notificações confiáveis com o navegador fechado será necessária uma etapa posterior usando Firebase Cloud Messaging e um backend/agendador.
