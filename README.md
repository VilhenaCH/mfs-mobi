# MFS — Monitoramento de Frequência Supremo

**Mobieduca.me**

Versão Firebase do sistema de acompanhamento de frequência escolar.

## O que mudou na v0.5.0

Esta versão remove os dados escolares do código publicado no GitHub Pages.

O repositório contém apenas:

- interface do MFS;
- lógica de calendário e importação;
- integração Firebase;
- regras de segurança.

Escolas, frequências, justificativas e histórico passam a ficar no **Cloud Firestore**.

## Arquitetura

```text
GitHub Pages
    ↓
MFS (HTML/CSS/JS)
    ↓
Firebase Authentication (Google)
    ↓
Firestore Security Rules
    ↓
Cloud Firestore
```

## Perfis

### Administrador

Pode:

- acessar todos os dados;
- importar HTML do Monitora;
- cadastrar/atualizar escolas pela importação do Monitora;
- importar CSV diário;
- editar frequências manualmente;
- aprovar novos usuários;
- alterar perfis;
- bloquear usuários.

### Técnico

Pode:

- acessar os dados do MFS;
- importar CSV diário;
- editar frequências manualmente;
- consultar cobranças.

O HTML do Monitora fica restrito ao administrador porque pode substituir um histórico mensal completo.

## 1. Criar o projeto Firebase

Acesse o Firebase Console e crie um projeto para o MFS.

Depois registre um aplicativo **Web** no projeto.

Copie o objeto de configuração fornecido pelo Firebase e coloque os valores em:

```text
firebase-config.js
```

Exemplo:

```javascript
window.MFS_FIREBASE_CONFIG = {
  firebase: {
    apiKey: "...",
    authDomain: "...firebaseapp.com",
    projectId: "...",
    storageBucket: "...firebasestorage.app",
    messagingSenderId: "...",
    appId: "..."
  },
  appCheckSiteKey: "",
  sessionOnly: true
};
```

A configuração Web do Firebase é pública por natureza. **Nunca** coloque service account, chave privada ou credencial administrativa no GitHub.

## 2. Ativar Google Authentication

No Firebase Console:

```text
Authentication
→ Sign-in method
→ Google
→ Enable
```

Depois abra:

```text
Authentication
→ Settings
→ Authorized domains
```

Adicione o hostname usado pelo GitHub Pages.

Exemplo:

```text
seuusuario.github.io
```

Se o MFS usar um domínio personalizado, adicione também esse hostname.

## 3. Criar o Firestore

No Firebase Console:

```text
Firestore Database
→ Create database
```

Use modo de produção.

Depois copie o conteúdo de `firestore.rules` para a área **Rules** do Firestore e publique.

## 4. Criar o primeiro administrador

Existe um problema proposital de segurança: nenhuma conta Google ganha acesso automaticamente.

1. Abra o MFS publicado.
2. Clique em **Entrar com Google**.
3. O MFS mostrará “Aguardando aprovação” e exibirá o seu UID.
4. No Firestore Console, crie manualmente:

```text
users/{SEU_UID}
```

Campos:

```text
uid: "SEU_UID"
email: "seu-email@gmail.com"
displayName: "Seu nome"
role: "admin"
active: true
```

Depois recarregue o MFS.

Esse é o único usuário que precisa ser criado manualmente. A partir daí, o administrador aprova os demais pela tela **Usuários**.

## 5. Migrar a base histórica

A v0.5.0 não contém escolas ou frequências dentro do JavaScript.

Depois de entrar como administrador, abra:

```text
Monitora
```

Importe novamente os HTMLs salvos de:

- Fevereiro;
- Março;
- Abril;
- Maio;
- Junho;
- Julho;
- Agosto;
- Setembro.

O próprio navegador extrai os dados e grava no Firestore.

O HTML original não é enviado para o GitHub.

## 6. Operação diária

O fluxo continua:

```text
CSV diário
→ selecionar data
→ selecionar turno
→ carregar CSV
→ conferir prévia
→ Aplicar no diário
```

Os registros ficam imediatamente disponíveis para todos os usuários autorizados.

A cobrança diária também passa a ser compartilhada entre os usuários.

## 7. Edição manual

Clique em um bloco M, T, N ou I no calendário.

A alteração é salva diretamente no Firestore e registrada em `auditLogs`.

## Estrutura principal do banco

```text
users/{uid}
accessRequests/{uid}
schools/{schoolId}
months/{AAAA-MM}
months/{AAAA-MM}/schools/{schoolId}
dailyRuns/{AAAA-MM-DD_turno}
imports/{importId}
auditLogs/{logId}
```

## Segurança

O MFS utiliza três camadas:

1. Google Authentication;
2. aprovação de usuário e perfis no Firestore;
3. Firestore Security Rules.

Opcionalmente, recomenda-se habilitar **Firebase App Check com reCAPTCHA Enterprise** e colocar a chave de site em `appCheckSiteKey`.

Depois de validar o funcionamento, habilite a aplicação no App Check e ative a aplicação das regras para o Firestore no Firebase Console.

## GitHub Pages

Arquivos que devem ficar no repositório:

```text
index.html
style.css
app.js
firebase-config.js
README.md
firestore.rules
```

Não publique HTMLs do Monitora, CSVs, JSONs de frequência ou qualquer arquivo contendo dados das escolas.

## Firebase SDK

O projeto usa Firebase JavaScript SDK via CDN para continuar compatível com GitHub Pages sem processo de build.
