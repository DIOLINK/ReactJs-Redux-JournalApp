// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: 'react-app-cursos-c4400.firebaseapp.com',
  projectId: 'react-app-cursos-c4400',
  storageBucket: 'react-app-cursos-c4400.appspot.com',
  messagingSenderId: process.env.REACT_APP_MSG_SENDER_ID,
  appId: process.env.REACT_APP_APPID,
};

const firebaseConfigTesting = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: 'testing-app-b0d5c.firebaseapp.com',
  projectId: 'testing-app-b0d5c',
  storageBucket: 'testing-app-b0d5c.appspot.com',
  messagingSenderId: process.env.REACT_APP_MSG_SENDER_ID,
  appId: process.env.REACT_APP_APPID,
};

// Initialize Firebase
if (process.env.NODE_ENV === 'test') {
  firebase.initializeApp(firebaseConfigTesting);
} else {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
