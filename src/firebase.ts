import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAAKSvv_kM42_OXFQLbr37G7F8_t_rX5Bo",
  authDomain: "smart-cookers.firebaseapp.com",
  projectId: "smart-cookers",
  storageBucket: "smart-cookers.appspot.com",
  messagingSenderId: "111371468833",
  appId: "1:111371468833:web:5e95d202d4b4cd7bc42360",
  measurementId: "G-LDFHW0D005"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export  {storage, firebase as default};