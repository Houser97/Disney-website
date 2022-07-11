// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { addDoc, collection, doc, getFirestore, setDoc, getDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export const createUser = async(email, password) => {
await createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    console.log(errorCode)
    const errorMessage = error.message;
    console.log(errorMessage)
    // ..
  });
}

export const logInUser = async(email, password) => {
  await signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    console.log(errorCode)
    const errorMessage = error.message;
    console.log(errorMessage)
  });
}

// Guardar datos del usuario //
export const addUserData = (userID, image, username) => {
    addDoc(collection(db, "users") , {
    image,
    username
  });
}

// permite crear un documento con un nombre deseado //

export const setDocument = async(image, username) => {
  await setDoc(doc(db,"users","prueba"), {
    image,
    username
  })
}

// Recuperar documento en específico //

export const recoverDoc = async() => {
  const docRef = doc(db ,"users", "prueba");
  const docSnap = await getDoc(docRef);

  if(docSnap.exists()){
    console.log("document data:", docSnap.data())
    return docSnap.data();
  } else {
    console.log("no such document")
  }

}



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
const db = getFirestore(app);
export const auth = getAuth(app);