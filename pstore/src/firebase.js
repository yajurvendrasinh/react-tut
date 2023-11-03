import firebase from "firebase/compat/app";
import "firebase/compat/auth";

// const app = firebase.initializeApp({
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
// });

const app = firebase.initializeApp({
  apiKey: "AIzaSyDkieZHo7Lkc47R4PHovvlsmvgJ8H9qEx8",
  authDomain: "auth-admin-13a8c.firebaseapp.com",
  databaseURL: "https://auth-admin-13a8c-default-rtdb.firebaseio.com",
  projectId: "auth-admin-13a8c",
  storageBucket: "auth-admin-13a8c.appspot.com",
  messagingSenderId: "630811379452",
  appId: "1:630811379452:web:8c2f086d286cf340c9b979",
});

export const auth = app.auth(); // gives us our authentication instance
export default app;
