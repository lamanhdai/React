import firebase from 'firebase';

let config = {
  apiKey: "AIzaSyDDnTdm_bpr6c7MrKQCRaOsVm-lGhoGkEs",
  authDomain: "reactproject-4909b.firebaseapp.com",
  databaseURL: "https://reactproject-4909b.firebaseio.com",
  projectId: "reactproject-4909b",
  storageBucket: "reactproject-4909b.appspot.com",
  messagingSenderId: "561527761608"
};

export const firebaseApp = firebase.initializeApp(config);

export const db = firebaseApp.database();
export const auth = firebaseApp.auth();
export const storageKey = 'pain-login-regnipelk';

export const isAuthenticated = () => {
  return !!auth.currentUser || !!localStorage.getItem(storageKey);
}