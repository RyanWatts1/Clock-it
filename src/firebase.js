import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCguVTE8vhbZNcnJtI-tBqW_66sG_ld-Zg",
    authDomain: "just-clock-it-8f51c.firebaseapp.com",
    databaseURL: "https://just-clock-it-8f51c.firebaseio.com",
    projectId: "just-clock-it-8f51c",
    storageBucket: "just-clock-it-8f51c.appspot.com",
    messagingSenderId: "223346536356",
    appId: "1:223346536356:web:0dd20c772e89d8e168db31",
    measurementId: "G-P4W4TNFQLS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 

  export default firebase 