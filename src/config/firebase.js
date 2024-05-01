import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBGZg1DUwzfN8YLBKVMgAM0ItWy6ALyob4",
  authDomain: "laundry-shop-cc237.firebaseapp.com",
  projectId: "laundry-shop-cc237",
  storageBucket: "laundry-shop-cc237.appspot.com",
  messagingSenderId: "570550390383",
  appId: "1:570550390383:web:681f75d56fb15dd22f479a"
};



firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;