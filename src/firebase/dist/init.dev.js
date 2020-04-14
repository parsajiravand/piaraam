"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _firebase = _interopRequireDefault(require("firebase"));

require("firebase/firestore");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var firebaseConfig = {
  apiKey: "AIzaSyBN31KDfO-Ow9B_ZpVGDKVTIItWL7BxrlQ",
  authDomain: "piaraam.firebaseapp.com",
  databaseURL: "https://piaraam.firebaseio.com",
  projectId: "piaraam",
  storageBucket: "piaraam.appspot.com",
  messagingSenderId: "968180393243",
  appId: "1:968180393243:web:c71282d8b9d9de869a9fbe",
  measurementId: "G-P3MDMKHTSQ"
}; // Initialize Firebase

var firebaseApp = _firebase["default"].initializeApp(firebaseConfig);
/* firebaseApp.firestore().settings({ timestampsInSnapshots: true }); */


_firebase["default"].analytics(); //export firestore database


var _default = firebaseApp.firestore();

exports["default"] = _default;