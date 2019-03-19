import { useContext } from 'react';
import FirebaseContext from '../components/FirebaseContext';

function useFirebaseTimestamp() {
  const firebase = useContext(FirebaseContext);

  return firebase.firestore.FieldValue.serverTimestamp();
}

export default useFirebaseTimestamp;
