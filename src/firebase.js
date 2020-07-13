import firebase from "firebase/app";
import "firebase/auth";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_DATABASE_URL,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
//   measurementId: process.env.REACT_APP_MEASUREMENT_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyAtmxjKV88E92x7dDWo3AoYiHBUTxkutHU",
  authDomain: "coveed-19.firebaseapp.com",
  databaseURL: "https://coveed-19.firebaseio.com",
  projectId: "coveed-19",
  storageBucket: "coveed-19.appspot.com",
  messagingSenderId: "1332829122",
  appId: "1:1332829122:web:c0f1fcc4873489492b945b",
  measurementId: "G-PPVQXB4FYG"
};

firebase.initializeApp(firebaseConfig);

let auth = null;
try {
  auth = firebase.auth();
  console.log("Success")
  console.log(auth);
} catch (error) {
  console.log("Failure")
  console.error("Error at firebase.auth()", error);
};

const providerGoogle = new firebase.auth.GoogleAuthProvider();
const providerFacebook = new firebase.auth.FacebookAuthProvider();
const providerTwitter = new firebase.auth.TwitterAuthProvider();

const signInWithGoogle = () => auth.signInWithPopup(providerGoogle);

const signInWithFacebook = async () => {
  const data = await auth.signInWithPopup(providerFacebook);
  console.log(data);
};

const signInWithTwitter = async () => {
  const data = await auth.signInWithPopup(providerTwitter);
  console.log(data);
};

export { auth, signInWithGoogle, signInWithFacebook, signInWithTwitter };
