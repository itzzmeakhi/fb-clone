import firebase from 'firebase';

import firebaseConfig from './firebaseConfig';

const config = { ...firebaseConfig };

const firebaseApp = firebase.initializeApp(config);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
