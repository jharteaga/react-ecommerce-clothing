import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyD4Q5SEEbJTLVykTi4cRGtHKizMGTImjhY',
  authDomain: 'crwn-db-360bd.firebaseapp.com',
  databaseURL: 'https://crwn-db-360bd.firebaseio.com',
  projectId: 'crwn-db-360bd',
  storageBucket: 'crwn-db-360bd.appspot.com',
  messagingSenderId: '103548623103',
  appId: '1:103548623103:web:999df994bad7eaad03d4ca',
  measurementId: 'G-RWWRPKHM74',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
