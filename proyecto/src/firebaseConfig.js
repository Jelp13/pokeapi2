import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
apiKey: "AIzaSyC1UeJLgbpOJ4iROkphTrTvSA9pKncyvzY",
  authDomain: "pokeapi2-a9685.firebaseapp.com",
  projectId: "pokeapi2-a9685",
  storageBucket: "pokeapi2-a9685.firebasestorage.app",
  messagingSenderId: "906110175079",
  appId: "1:906110175079:web:df1a7b0f012227f39c51c2"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // ✅ ¡Esto es necesario!
export { auth, db };

