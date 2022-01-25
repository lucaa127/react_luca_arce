// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);

export const getFirestoreApp=() =>{
    return app
}

