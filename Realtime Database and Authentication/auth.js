
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
  import { getAuth,createUserWithEmailAndPassword ,signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app)



 function  SingUpUser () { 
   const email = document.getElementById('email').value;
   const password = document.getElementById('password').value;

   createUserWithEmailAndPassword(auth,email,password).then((userCredintial)=>{
      console.log(userCredintial.user.uid);
   })

  }

   const signUp = document.getElementById('signup')
  
    signUp.addEventListener('click',SingUpUser)


    function  SingInUser () { 
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
     
        signInWithEmailAndPassword(auth,email,password).then((userCredintial)=>{
           console.log(userCredintial.user.uid);
           console.log("Login");
        })
     
       }


       const signIn = document.getElementById('sign_in')
  
       signIn.addEventListener('click',SingInUser)