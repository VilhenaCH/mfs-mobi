# Companion bridge 1.0.2

Corrige a entrega de dados do Companion para o MFS.

- injeta/reinjeta a ponte quando necessário;
- envia para todas as abas MFS abertas;
- usa CustomEvent + postMessage como ponte entre mundos;
- mantém a sincronização somente de leitura até a confirmação no MFS.
