// Initialize Firebase
var config = {
    apiKey: "AIzaSyCIFMrfhGbcib6dl_qlvJ24DVsGxrKYirI",
    authDomain: "quickstart-web-5ef5f.firebaseapp.com",
    databaseURL: "https://quickstart-web-5ef5f.firebaseio.com",
    projectId: "quickstart-web-5ef5f",
    storageBucket: "quickstart-web-5ef5f.appspot.com",
    messagingSenderId: "573053998886"
};
firebase.initializeApp(config);

const dbText = document.getElementById('dbText');

// gets the reference text from realtime DB
const dbRef = firebase.database().ref().child('text');

// sets the value fetched from firebase to the header
dbRef.on('value', snap => dbText.innerText = snap.val());
