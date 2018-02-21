
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

const outputHeader = document.getElementById('hotdogStatus');
const inputText    = document.getElementById('newStatus');
const saveButton   = document.getElementById('saveButton');

var dbRef = firebase.database().ref().child('text');
dbRef.on('value', snap => outputHeader.innerText = snap.val());

