 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-analytics.js";
  import { getDatabase, ref, set } from "firebase/database";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBq5RaYKOu17NVSDcsGOICevLUOgDherUI",
    authDomain: "hamropathao-b411d.firebaseapp.com",
    projectId: "hamropathao-b411d",
    storageBucket: "hamropathao-b411d.firebasestorage.app",
    messagingSenderId: "502762173754",
    appId: "1:502762173754:web:dcc4855eec140775e50c03",
    measurementId: "G-NRNFF2EZ87"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getAnalytics(app);


  console.log(db);

  