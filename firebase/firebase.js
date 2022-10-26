// Import the functions you need from the SDKs you need
import  firebase  from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA04NuXDgVAHxHwsKoaCohCx2nY9cR_MIw",
  authDomain: "microservice-firebase-user.firebaseapp.com",
  projectId: "microservice-firebase-user",
  storageBucket: "microservice-firebase-user.appspot.com",
  messagingSenderId: "408151887016",
  appId: "1:408151887016:web:5aedc9438863799c78c69d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
module.exports = { firebase } 

//หน้าตั้งค่าเพื่อเชื่อมต่อกลุ่ม Firebase 