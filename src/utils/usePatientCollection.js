import { useContext } from 'react';
import FirebaseContext from '../components/FirebaseContext';

function usePatientCollection() {
  const firebase = useContext(FirebaseContext);
  const db = firebase.firestore();
  const collection = db.collection('pacientes');

  return collection;
}

export default usePatientCollection;
