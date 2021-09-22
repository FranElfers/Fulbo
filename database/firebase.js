import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCnSNgM6y0Z3FuWz5f_t3GyuM0SjHiKQPA",
  authDomain: "fulbo-9039d.firebaseapp.com",
  projectId: "fulbo-9039d",
  storageBucket: "fulbo-9039d.appspot.com",
  messagingSenderId: "1031763701111",
  appId: "1:1031763701111:web:93ae6ba82d20bb859a4572"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp)

export default db