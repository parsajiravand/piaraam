import firebase from "firebase";
import "firebase/firestore";
var firebaseConfig = {
  apiKey: "AIzaSyBN31KDfO-Ow9B_ZpVGDKVTIItWL7BxrlQ",
  authDomain: "piaraam.firebaseapp.com",
  databaseURL: "https://piaraam.firebaseio.com",
  projectId: "piaraam",
  storageBucket: "piaraam.appspot.com",
  messagingSenderId: "968180393243",
  appId: "1:968180393243:web:c71282d8b9d9de869a9fbe",
  measurementId: "G-P3MDMKHTSQ"
};
// Initialize Firebase

const firebaseApp = firebase.initializeApp(firebaseConfig);
/* firebaseApp.firestore().settings({ timestampsInSnapshots: true }); */
firebase.analytics();

//export firestore database
export default firebaseApp.firestore();
