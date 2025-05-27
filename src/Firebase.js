// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6nQoxgGql2UhCsUwvH5j8Pgvsf5LwQL0",
  authDomain: "projectsintak.firebaseapp.com",
  projectId: "projectsintak",
  storageBucket: "projectsintak.firebasestorage.app",
  messagingSenderId: "45274022239",
  appId: "1:45274022239:web:fc2676135370fde40eb6ea",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const analytics = getAnalytics(app);

export { db };
