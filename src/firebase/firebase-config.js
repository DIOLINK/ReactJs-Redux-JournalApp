// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDpMa1awPQ9k-b98swLzfz1IdE1LPla-ZU',
  authDomain: 'react-app-cursos-c4400.firebaseapp.com',
  projectId: 'react-app-cursos-c4400',
  storageBucket: 'react-app-cursos-c4400.appspot.com',
  messagingSenderId: '117010035315',
  appId: '1:117010035315:web:e447e73bdb5b6b54d97006',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
