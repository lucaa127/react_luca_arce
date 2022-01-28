
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCtNTId7XuLZ_iJaNjQxk-Xd0EzW8gJTZA",
  authDomain: "tienda-coder-341e8.firebaseapp.com",
  projectId: "tienda-coder-341e8",
  storageBucket: "tienda-coder-341e8.appspot.com",
  messagingSenderId: "495822181544",
  appId: "1:495822181544:web:af80e0580c43b601b91e9d",
  measurementId: "G-444R5ZTHVN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp=() =>{
    return app
}

