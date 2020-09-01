import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);

let auth = null;
try {
  auth = firebase.auth();
} catch (error) {
  console.error("Error at firebase.auth()", error);
};

const providerGoogle = new firebase.auth.GoogleAuthProvider();
const providerFacebook = new firebase.auth.FacebookAuthProvider();
const providerTwitter = new firebase.auth.TwitterAuthProvider();
const RecaptchaVerifier = firebase.auth.RecaptchaVerifier;

const signInWithGoogle = () => auth.signInWithPopup(providerGoogle);

const signInWithFacebook = async () => {
  const data = await auth.signInWithPopup(providerFacebook);
  console.log(data);
  return data;
};

const signInWithTwitter = async () => {
  const data = await auth.signInWithPopup(providerTwitter);
  console.log(data);
  return data;
};

firebase.auth().useDeviceLanguage();

export { auth, RecaptchaVerifier, signInWithGoogle, signInWithFacebook, signInWithTwitter };
