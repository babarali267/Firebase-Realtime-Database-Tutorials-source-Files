
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getDatabase ,set,get,ref } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADB9Jm-aLYRA4fQ6PnbeZEERFX0Ppjv20",
  authDomain: "myfirstproject-35627.firebaseapp.com",
  projectId: "myfirstproject-35627",
  storageBucket: "myfirstproject-35627.appspot.com",
  messagingSenderId: "555245803659",
  appId: "1:555245803659:web:4f4ef9fe0cd28c78481c8e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 const db = getDatabase(app)


function  writeUserData(userID,name,email){
     set(ref(db,'users/' + userID),{
          name:name,
          email:email
     })
}
writeUserData(4,"ameen","sa@gmail.com")

console.log("GOOD");


 function readData(){
     const userRef = ref(db,'users');

     get(userRef).then((snapshot)=>{
         snapshot.forEach((childsnapShot)=>{
                     console.log(childsnapShot.val());
         })  
     })
 }
 readData()