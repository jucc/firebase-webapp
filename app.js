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

const inputText    = document.getElementById('newPoint');
const saveButton   = document.getElementById('saveButton');
const loadButton   = document.getElementById('loadButton');
const divData      = document.getElementById('showData');

const values = firestore.collection("samples/dataset/values");

saveButton.addEventListener("click", function() {
    const saveTxt = inputText.value;
    console.log("You typed " + saveTxt);
    values.add({value: saveTxt})
    .then(function(docRef) {
        console.log("Saved to db with id: " + docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
});

loadButton.addEventListener("click", function() {

    values.get().then((querySnapshot) => {
        dataset = []
        querySnapshot.forEach((doc) => {            
            console.log(`${doc.id} => ${doc.data()}`);
            dataset.push(doc.data().value)
        });
    
        Plotly.plot( divData, [{
        x: Array.from({length: dataset.length}, (x,i) => i),
        y: dataset }], {
        margin: { t: 2 } } )
    });
});