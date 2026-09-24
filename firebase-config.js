/*
  MFS - Monitoramento de Frequência Supremo
  Mobieduca.me

  Configuração pública do Firebase Web.

  IMPORTANTE:
  Esta configuração pode ficar no GitHub Pages.
  A segurança dos dados será feita por:
  - Firebase Authentication
  - Firestore Security Rules
  - App Check
*/

window.MFS_FIREBASE_CONFIG = {

  firebase: {
    apiKey: "AIzaSyC86KeZvJUH6zSJo9ctO3YhVOkKpM73VPU",

    authDomain: "mfs-mobi.firebaseapp.com",

    projectId: "mfs-mobi",

    storageBucket: "mfs-mobi.firebasestorage.app",

    messagingSenderId: "2633594017",

    appId: "1:2633594017:web:0b59f22d1dd8b24d63ace0"
  },

  /*
    APP CHECK

    Por enquanto deixe vazio.

    Depois que configurarmos o Firebase App Check
    com reCAPTCHA Enterprise, colocaremos aqui
    a Site Key fornecida pelo Firebase.
  */
  appCheckSiteKey: "",

  /*
    true:
    o login dura enquanto a sessão do navegador estiver ativa.

    false:
    o Firebase poderá manter o usuário conectado
    mesmo depois de fechar e abrir o navegador.
  */
  sessionOnly: true
};
