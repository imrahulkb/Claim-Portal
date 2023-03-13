import firebase from 'firebase/app';
import 'firebase/auth';

var firebaseConfig = {

  apiKey: 'AIzaSyBUctS2mlPY58Y-E1AypSUz7OO0zhlBLC8',
  authDomain: 'themesbrand-admin.firebaseapp.com',
  databaseURL: 'https://themesbrand-admin.firebaseio.com',
  projectId: 'themesbrand-admin',
  storageBucket: 'themesbrand-admin.appspot.com',
  messagingSenderId: '427667224207',
  appId: '427667224207:web:3b97af80b8b4824619a2fa',
  measurementId: 'G-S4LDYNV7FY',
  
};

firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    localStorage.setItem("authUser", JSON.stringify(user))
  } else {
    localStorage.removeItem("authUser")
  }
})

export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();