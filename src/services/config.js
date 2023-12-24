
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "congelados-react-de192.firebaseapp.com",
    projectId: "congelados-react-de192",
    storageBucket: "congelados-react-de192.appspot.com",
    messagingSenderId: "919414089576",
    appId: "1:919414089576:web:a135cb9189ec2052acd8dd"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);