// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8hc4VLrBs0Gi3Cn2xHr03M1FKqz05f1U",
  authDomain: "hamropathoa.firebaseapp.com",
  projectId: "hamropathoa",
  storageBucket: "hamropathoa.firebasestorage.app",
  messagingSenderId: "347800899526",
  appId: "1:347800899526:web:c4ea373002a00db0e8acc7",
  measurementId: "G-J8ZXEZWCNW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
