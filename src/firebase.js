const config = {
  apiKey: 'AIzaSyAxEvSnLKhZi0wYhgjQ10hyR5E4sx7SIII',
  authDomain: 'dr-ruiz.firebaseapp.com',
  databaseURL: 'https://dr-ruiz.firebaseio.com',
  projectId: 'project-592440362028',
  // storageBucket: 'awesome-bb71b.appspot.com',
  messagingSenderId: '592440362028',
};

let firebaseCache;

export const getUiConfig = firebase => ({
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
});

const getFirebase = firebase => {
  if (firebaseCache) {
    return firebaseCache;
  }

  firebase.initializeApp(config);
  firebaseCache = firebase;
  return firebase;
};

export default getFirebase;
