var firebaseConfig = {
  apiKey: "AIzaSyA900HJUAHQduCQngQuopu1D-OPKTNp6EY",
  authDomain: "sportswebsite-6ee29.firebaseapp.com",
  databaseURL: "https://sportswebsite-6ee29-default-rtdb.firebaseio.com",
  projectId: "sportswebsite-6ee29",
  storageBucket: "sportswebsite-6ee29.appspot.com",
  messagingSenderId: "645831543339",
  appId: "1:645831543339:web:36f9e665d882d90816386e",
  measurementId: "G-CMTNBCSZND"
};
firebase.initializeApp(firebaseConfig);
  
var UserInputsRef=firebase.database().ref('UserInputs')
document.getElementById('testForm').addEventListener('submit',submitForm);
function submitForm(e){
  e.preventDefault();
  var year=getInputVal('year');
  readYear(year);
  saveMessages(year);
}
function getInputVal(id){
  return document.getElementById(id).value;
}
function readYear(year){
  var winners;
  var ref = firebase.database().ref(year);
  ref.on('value', (data) => {
   winners = data.val();
   document.getElementById("result").innerHTML ="<br>"+ "1. " + winners[1];
})
}
function saveMessages(year){
      var newuserInputsRef = UserInputsRef.push();
      newuserInputsRef.set({
        year:year
   })
  }
  