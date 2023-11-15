
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getDatabase ,set,get,ref } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  
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
