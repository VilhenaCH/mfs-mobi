# Configuração Firebase do MFS

Este guia é para a primeira configuração do **MFS — Monitoramento de Frequência Supremo, Mobieduca.me**.

## 1. Criar um projeto

No Firebase Console, crie um projeto e registre um aplicativo Web chamado, por exemplo:

```text
MFS Web
```

Copie a configuração Web e preencha `firebase-config.js`.

## 2. Authentication

No Firebase Console:

```text
Authentication
→ Sign-in method
→ Google
→ Enable
```

Depois:

```text
Authentication
→ Settings
→ Authorized domains
```

Adicione o hostname do GitHub Pages.

Exemplo:

```text
charles.github.io
```

Não use a URL completa nem o caminho do repositório. A lista recebe somente o hostname.

Se depois houver domínio próprio, adicione o novo hostname também.

## 3. Firestore

Crie o Cloud Firestore em modo de produção.

Copie `firestore.rules` para:

```text
Firestore Database
→ Rules
```

Clique em **Publish**.

## 4. Primeiro administrador

Abra o site MFS e faça login com Google.

Como ainda não existe administrador, o sistema mostrará uma tela de acesso pendente com seu UID.

No Firestore Console, crie:

```text
users
  └── SEU_UID
```

Campos sugeridos:

```text
uid           string   SEU_UID
email         string   seu@email.com
displayName   string   Seu nome
role          string   admin
active        boolean  true
```

Recarregue o MFS.

A partir daí, qualquer outro usuário faz login e aparece na tela **Usuários** para aprovação.

## 5. Importar a base existente

Entre como administrador e use **Monitora** para importar novamente os HTMLs históricos.

Esses dados serão gravados nas coleções protegidas do Firestore.

Não envie os HTMLs históricos para o GitHub.

## 6. App Check

Depois que Auth + Firestore estiverem funcionando:

1. Abra **App Check** no Firebase Console.
2. Registre o aplicativo Web.
3. Configure **reCAPTCHA Enterprise**.
4. Copie a site key para `appCheckSiteKey` em `firebase-config.js`.
5. Primeiro monitore as requisições.
6. Depois habilite enforcement para Cloud Firestore.

## 7. O que pode ficar público

Pode ficar no GitHub:

```text
index.html
style.css
app.js
firebase-config.js
firestore.rules
README.md
```

Não deve ficar no GitHub:

```text
HTMLs do Monitora
CSVs de frequência
JSONs com escolas
service-account.json
chaves privadas
credenciais administrativas
```

A configuração Web do Firebase identifica o projeto, mas não substitui Authentication e Security Rules.
