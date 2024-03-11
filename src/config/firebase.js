import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGZg1DUwzfN8YLBKVMgAM0ItWy6ALyob4",
  authDomain: "laundry-shop-cc237.firebaseapp.com",
  projectId: "laundry-shop-cc237",
  storageBucket: "laundry-shop-cc237.appspot.com",
  messagingSenderId: "570550390383",
  appId: "1:570550390383:web:681f75d56fb15dd22f479a"
};

const firebaseApp = initializeApp(firebaseConfig);


const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
export default firebaseApp;

