# MFS v0.9.1 - Sync Monitora Real

Esta versão prepara o fluxo de conexão real:

1. Modal de login Mobieduca
2. Autenticação via /login/run
3. Sessão temporária em memória
4. Consulta inicial de escolas/frequência
5. Prévia antes de gravação

A senha não deve ser salva em Firestore.

Próxima etapa:
ligar os endpoints reais encontrados no HAR e validar a resposta no navegador.
