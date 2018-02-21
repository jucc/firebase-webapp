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
var firestore = firebase.firestore();

const outputHeader = document.getElementById('hotdogStatus');
const inputText    = document.getElementById('newStatus');
const saveButton   = document.getElementById('saveButton');
const loadButton   = document.getElementById('loadButton');

document.getElementById('dbText').innerText = "Hot dog status:"

// gets the reference document with sandwich data from firestore DB

// Always alternate collection.document.collection.document...
//const docRef = firestore.collection("samples").doc("sandwichData");
const docRef = firestore.doc("samples/sandwichdata");

// when the user clicks the button, saves the new sandwich data to firestore

saveButton.addEventListener("click", function() {
    const saveTxt = inputText.value;
    console.log("You typed " + saveTxt);    
    // set will replace or create the data in firestore and return a promise
    docRef.set({hotdogstatus: saveTxt}).then(function() {
        console.log("Successfully saved to firestore")
    }).catch(function(){
        console.log("Error saving to firestore: " + error);
    });
});

loadButton.addEventListener("click", function() {
    const saveTxt = inputText.value;
    docRef.get().then(function(doc) {
        if (doc && doc.exists) {
            outputHeader.innerText = doc.data().hotdogstatus
    }}).catch(function(){
        console.log("Error loading from firestore: " + error);
    });
});
