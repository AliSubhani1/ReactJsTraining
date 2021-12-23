import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyCmY64BxCm1v31IlS7iHeyzFzK3p-OLFCg",
  authDomain: "crwn-db-575db.firebaseapp.com",
  projectId: "crwn-db-575db",
  storageBucket: "crwn-db-575db.appspot.com",
  messagingSenderId: "380325887878",
  appId: "1:380325887878:web:80e62269fb3152e4193607",
  measurementId: "G-CS8VLM9JLK",
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
