// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzo8LBAH0b86nIRd9izy2_KyvP49Y8yDw",
  authDomain: "stride-prac-1.firebaseapp.com",
  projectId: "stride-prac-1",
  storageBucket: "stride-prac-1.appspot.com",
  messagingSenderId: "24441169124",
  appId: "1:24441169124:web:1bd2777d3a82941c6f78f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;