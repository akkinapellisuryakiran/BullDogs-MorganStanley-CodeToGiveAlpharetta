
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
  import { getFirestore, doc, getDoc, getDocs, collection } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";


  const firebaseConfig = {
    apiKey: "AIzaSyCXQJXQLUF9qhOH_0QsLhUllOB0lPJ2t2Q",
    authDomain: "bulldogs-codetogive.firebaseapp.com",
    projectId: "bulldogs-codetogive",
    storageBucket: "bulldogs-codetogive.appspot.com",
    messagingSenderId: "787939459505",
    appId: "1:787939459505:web:f8629ce1a3484e8cd7fd90",
    measurementId: "G-PKY0CJSECL"
    //databaseURL: "https://bulldogs-codetogive-default-rtdb.firebaseio.com/",

  };

  // Initialize Firebase

  const app = firebase.initializeApp(firebaseConfig);
  const db = getFirestore(app);
  console.log(db);

  const users_ref = db.collection("Users");
  const user_interests_ref = db.collection("UserInterests");
  const user_roles_ref = db.collection("UserRoles");
  const visits_ref = db.collection("Visits");

  db.collection("Users")
      .get()
      .then(collectionData => {
        // you will get student data collection in collectionData object
        console.log('data collection : ', collectionData);
      }).catch(err => {
        // Error or Exception occure
        console.log('error', err.response);
      });
