import React from 'react';
import firebase from 'firebase';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyAxEvSnLKhZi0wYhgjQ10hyR5E4sx7SIII',
  authDomain: 'dr-ruiz.firebaseapp.com',
  databaseURL: 'https://dr-ruiz.firebaseio.com',
  projectId: 'dr-ruiz',
  storageBucket: 'dr-ruiz.appspot.com',
  messagingSenderId: '592440362028',
};
firebase.initializeApp(config);

const FirebaseContext = React.createContext(firebase);
export default FirebaseContext;
