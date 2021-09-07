// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3549PI-_oOAvI4RH0lLJvxoQTdwATbIQ",
  authDomain: "kwitter-67f9b.firebaseapp.com",
  databaseURL: "https://kwitter-67f9b-default-rtdb.firebaseio.com",
  projectId: "kwitter-67f9b",
  storageBucket: "kwitter-67f9b.appspot.com",
  messagingSenderId: "832672904952",
  appId: "1:832672904952:web:f47e24d36faabf8548ed0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

  function addUser() { user_name = document.getElementById("room_name").value;
   firebase.database().ref("/").child(user_name).update({ purpose:"adding user" }); }