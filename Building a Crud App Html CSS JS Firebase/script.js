
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
  import { getDatabase,set,ref,get,remove,update} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


  const db = getDatabase(app)

  const add_data = document.getElementById('add_data');
  const notification = document.getElementById('notification')

  function AddStudents(){
       const name = document.getElementById('name').value;
       const email = document.getElementById('email').value;
       const rollnumber = document.getElementById('rollnumber').value;

        set(ref(db,'students/' + rollnumber),{
             name:name,
             email:email,
             rollnumber:rollnumber
        })
        notification.innerText ="Added succesfuly";
         document.getElementById('name').value="";
        document.getElementById('email').value="";
         document.getElementById('rollnumber').value="";

         ReadData()

  }

  add_data.addEventListener('click',AddStudents)


//   Read Data

function ReadData (){
     const userRef = ref(db,'students/')

     get(userRef).then((snapshot)=>{
       
        const data = snapshot.val();

        const table = document.querySelector('table')
        let html = '';

         for (const  key in  data){
              const {name,email,rollnumber} = data[key];
              
              html += `
                 <tr>
                     <td> ${name}</td>
                     <td> ${email}</td>
                     <td> ${rollnumber}</td>
                     <td><button class="del" onclick="deleteData('${rollnumber}')">Delete</button></td>
                     <td><button class="up" onclick="updateData('${rollnumber}')">Update</button></td>
                    
                    
                 </tr>
              `
         }
         table.innerHTML = html

     })
}

ReadData()


// delte data

 window.deleteData = function(rollnumber){
    const userRef = ref(db,`students/${rollnumber}`)

     remove(userRef)
    notification.innerText = "Data Deleted Successfully";
    ReadData()
 }

// update data

 window.updateData = function(rollnumber){

    const userRef = ref(db,`students/${rollnumber}`)

     get(userRef).then((item)=>{
        document.getElementById('name').value=item.val().name;
        document.getElementById('email').value=item.val().email;
         document.getElementById('rollnumber').value=item.val().rollnumber;
     })

     document.querySelector('.update_Data').classList.add('show')

    const  update_btn = document.querySelector('#update_data')

    update_btn.addEventListener('click',()=>{
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const rollnumber = document.getElementById('rollnumber').value;
     
         update(ref(db),{
             [`students/${rollnumber}/name`] : name,
             [`students/${rollnumber}/email`] : email,
             [`students/${rollnumber}/rollnumber`] : rollnumber,
         }).then(()=>{
                   notification.innerText = "data Updated";
                   document.querySelector('.update_Data').classList.remove('show')
                   document.getElementById('name').value="";
                   document.getElementById('email').value="";
                    document.getElementById('rollnumber').value="";
                   ReadData()
         })
         


    })


    
 }