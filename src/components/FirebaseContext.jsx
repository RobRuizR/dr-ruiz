import React from 'react';
import firebase from 'firebase';
import 'firebase/firestore';

const FirebaseContext = React.createContext(firebase);

export const withFirebase = Component => props => (
  <FirebaseContext.Consumer>
    {firebase => <Component {...props} firebase={firebase} />}
  </FirebaseContext.Consumer>
);

export default FirebaseContext;
