
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
    import { getFirestore, doc, getDoc, getDocs, collection } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
    //import { GoogleAuthProvider, getAuth, signInWithPopup } from "https://www.gstatic.com/firebasejs/8.2.1/firebase-auth.js";

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
    window.GoogleAuth = new firebase.auth.GoogleAuthProvider();
    /*
    const provider = new GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

    firebase.auth().useDeviceLanguage();
    provider.setCustomParameters({
        'login_hint': 'user@example.com'
    });

    const auth = getAuth();
    signInWithPopup(auth, provider)
        .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
    });

*/
    const db = getFirestore(app);
    console.log(db);

    const users_ref = db.collection("Users");
    const user_interests_ref = db.collection("UserInterests");
    const user_roles_ref = db.collection("UserRoles");
    const visits_ref = db.collection("Visits");

    db.collection("Users")
        .get()
        .then(collectionData => {
            console.log('data collection : ', collectionData);
        }).catch(err => {
            console.log('error', err.response);
    });
