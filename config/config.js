import firebase from "firebase";
// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyDptuYnK0-P0b_hSGJc7oqL0Ei9gKMbo2A",
  authDomain: "instagramclone-298e3.firebaseapp.com",
  databaseURL: "https://instagramclone-298e3.firebaseio.com",
  projectId: "instagramclone-298e3",
  storageBucket: "instagramclone-298e3.appspot.com",
  messagingSenderId: "736872292052",
  appId: "1:736872292052:web:ab474a50e658036a7d2541",
  measurementId: "G-82NJDNZ28G"
};
// Initialize Firebase
firebase.initializeApp(config);
export const f = firebase;
export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
