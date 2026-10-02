# MFS Companion - instalação

## O que esta extensão faz

Ela usa a sessão que já está aberta no Monitora. Você não precisa colocar usuário ou senha na extensão.

Fluxo:

Monitora logado -> MFS Companion -> API do Monitora -> prévia no MFS -> você confirma -> Firestore do MFS

A extensão não possui função de alterar o Monitora. Ela apenas consulta os relatórios de leitura.

## 1. Baixe e extraia

Baixe o arquivo `mfs-companion-v1.zip` e extraia para uma pasta permanente, por exemplo:

`Documentos\\MFS Companion`

Não apague essa pasta depois de instalar a extensão.

## 2. Abra as extensões do navegador

### Chrome

Abra:

`chrome://extensions`

### Opera GX

Abra:

`opera://extensions`

## 3. Ative o modo de desenvolvedor

No canto superior direito, ative:

`Modo do desenvolvedor`

## 4. Carregue a extensão

Clique em:

`Carregar sem compactação`

Selecione a pasta que contém `manifest.json`.

Importante: selecione a pasta extraída do ZIP, não o arquivo ZIP.

## 5. Prenda a extensão na barra

Clique no ícone de extensões do navegador e fixe:

`MFS Companion · Monitora`

## 6. Teste

1. Abra o Monitora normalmente.
2. Faça login normalmente.
3. Deixe o Monitora aberto.
4. Abra o MFS em outra aba e deixe-o logado também.
5. No Monitora, aparecerá um pequeno botão `MFS` no canto inferior direito.
6. Clique nele.
7. Escolha a data.
8. Clique em `Sincronizar MFS`.

A extensão deverá mostrar algo como:

`54 escolas recebidas · enviado ao MFS`

## 7. No MFS

O MFS abrirá a janela `Sync Monitora` automaticamente quando receber os dados.

Ele mostrará uma prévia:

- escolas reconhecidas;
- alterações;
- situações mantidas;
- registros ignorados.

Nada é gravado até você clicar:

`Aplicar no MFS`

## 8. Se aparecer "MFS não aberto"

Abra o MFS em uma aba antes de sincronizar.

## 9. Se aparecer "nenhuma sessão do Monitora"

Abra o Monitora, faça login normalmente e tente novamente.

## 10. Privacidade

A extensão não solicita sua senha do Monitora.

Ela lê apenas a sessão que o próprio Monitora já mantém no navegador e usa essa sessão para consultar os endpoints de leitura. O token temporário é usado em memória durante a sincronização e não é salvo em arquivo, Firebase ou localStorage da extensão.

## 11. Atualização futura

Quando houver uma nova versão, volte em `chrome://extensions` ou `opera://extensions`, remova a versão antiga se necessário e use `Carregar sem compactação` para a nova pasta.
