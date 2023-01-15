import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
import { getFunctions } from 'firebase/functions';
import { getStorage, ref } from "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCfviqsu5jHUa4fjGkWzFRbh5s00VzHLN8",
    authDomain: "ptjulius-30426.firebaseapp.com",
    projectId: "ptjulius-30426",
    storageBucket: "ptjulius-30426.appspot.com",
    messagingSenderId: "123663210035",
    appId: "1:123663210035:web:c869806494fa36298b3546"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const db = getFirestore();

const functions = getFunctions(app);
const storage = getStorage(app);
const storageRef = ref(storage);

export { auth, db, storage, storageRef, functions}
export default getFirestore(app);

