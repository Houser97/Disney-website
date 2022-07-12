// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { addDoc, collection, doc, getFirestore, setDoc, getDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";


export const createUser = async(email, password) => {
await createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    // eslint-disable-next-line no-unused-vars
    const user = userCredential.user;
    //console.log(user)
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
    // eslint-disable-next-line no-unused-vars
    const user = userCredential.user;
    //console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    console.log(errorCode)
    const errorMessage = error.message;
    console.log(errorMessage)
  });
}

export const signUserOut = async() => {
  signOut(auth);
}

// Logear usuarios miembro //

export const logIn = async(email, password) => {
  await signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    // eslint-disable-next-line no-unused-vars
    const user = userCredential.user;
    //console.log(user, "success");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    console.log(errorCode)
    const errorMessage = error.message;
    console.log(errorMessage)
  });
}


//------------------------------------------//

// Guardar datos del usuario //
export const addUserData = (userID, image, username) => {
    addDoc(collection(db, "users") , {
    image,
    username
  });
}

// permite crear un documento con un nombre deseado //

export const setDocument = async(image, username, userID, movies) => {
  await setDoc(doc(db,"users", `${userID}`), {
    image,
    username,
    movies
  })
}

export const setDocumentMovie = async(image, username, userID, movies) => {
  await setDoc(doc(db,"users", `${userID}`), {
    image,
    username,
    movies
  })
}

// Recuperar documento en específico //

export const recoverDoc = async(userID) => {
  const docRef = doc(db ,"users", `${userID}`);
  const docSnap = await getDoc(docRef);

  if(docSnap.exists()){
    //console.log("document data:", docSnap.data())
    return docSnap.data();
  } else {
    //console.log("no such document")
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