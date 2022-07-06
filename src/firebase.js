// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
/*createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });*/
  
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3KGpY7O-eipsfEuvKwehDBtjqIXxcCL0",
  authDomain: "disney-plus-ce009.firebaseapp.com",
  projectId: "disney-plus-ce009",
  storageBucket: "disney-plus-ce009.appspot.com",
  messagingSenderId: "527076235223",
  appId: "1:527076235223:web:e1a0b5727ce395f2a21d92"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);