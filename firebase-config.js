/*
  MFS - Configuração pública do Firebase Web.
  Esta configuração NÃO é uma chave administrativa e pode permanecer no GitHub Pages.
  A proteção dos dados é feita por Firebase Authentication, Firestore Security Rules e App Check.
*/
window.MFS_FIREBASE_CONFIG = {
  firebase: {
    apiKey: "COLE_AQUI",
    authDomain: "COLE_AQUI.firebaseapp.com",
    projectId: "COLE_AQUI",
    storageBucket: "COLE_AQUI.firebasestorage.app",
    messagingSenderId: "COLE_AQUI",
    appId: "COLE_AQUI"
  },

  // Opcional, mas recomendado antes de colocar o MFS em produção.
  // Crie uma chave de site reCAPTCHA Enterprise no App Check e cole aqui.
  appCheckSiteKey: "",

  // O app usa sessão do navegador: ao fechar a sessão do navegador,
  // o usuário precisa autenticar novamente no MFS.
  sessionOnly: true
};
