// Toggle navbar and images

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }


   // Toggle Button

   function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }


  // Pop Up Chat Button


function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}


// top

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
    window.scrollY >= 500 ? goTopBtn.classList.add("active")
        : goTopBtn.classList.remove("active");
});


// Check box (Select and deselect)

function selects(){  
  document.getElementById("myCheck").checked = true;  
}  
function deSelect(){  
  document.getElementById("myCheck").checked = false; 
} 



// Crud DataBase Operation



// Importing DataBase & configrution database


  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCcmaQO9mv2HIHtxE92Ugb8Jw4xi4SRShM",
    authDomain: "emply-database.firebaseapp.com",
    projectId: "emply-database",
    storageBucket: "emply-database.appspot.com",
    messagingSenderId: "539928255615",
    appId: "1:539928255615:web:65c48b7cc4e5857be0f34a"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


  import {getDatabase ,ref , get,set ,child ,update , remove}
  from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js";


const db = getDatabase();


  // Emply Database

  const id = document.getElementById("empcode");
  const name = document.getElementById("name");
  const email= document.getElementById("email");
  const extension= document.getElementById("extension");

  const select = document.getElementById("selectemp");
  const add = document.getElementById("addemp");
  const update1= document.getElementById("updateemp");
  const del= document.getElementById("deleteemp");



  // Insert function
 
  function InsertData(){
    set(ref(db , "EmpDetails/" + empcode.value),{
      id : empcode.value,
      Name : name.value,
      EmailId : email.value,
      Extension : extension.value
    })
    .then(()=>{
      alert("Data Stored Successfully");
    })
    .catch((error)=>{
      alert("Unseccessful , error" + error);
    });
  }



  // Selecting the data

  function selectData(){
    const dbref = ref(db);

    get(child(dbref , "EmpDetails/" + empcode.value)).then((snapshot) =>{
      if (snapshot.exists()){
        name.value = snapshot.val().Name;
        email.value = snapshot.val().EmailId;
        extension.value = snapshot.val().Extension;

      }
      else{
        alert("Data Not Found In DataBae");
      }
    })
    .catch((error)=>{
      alert("Unsuccessful , error" + error)
    });
  }



  //Update data

  function updatedata(){

   update(ref(db , "EmpDetails/" + empcode.value),{
      Name : name.value,
      EmailId : email.value,
      Extension : extension.value
    })
    .then(()=>{
      alert("Data Updated Successfully");
    })
    .catch((error)=>{
      alert("Unseccessful , error" + error);
    });
  }



  // Delete data

  function delData(){
    remove(ref(db , "EmpDetails/" + empcode.value))
    .then(()=>{
      alert("Data Removed Successfully");
    })
    .catch((error)=>{
      alert("Unseccessful , error" + error);
    });
  }



  // Assign Events To Buttons


  add.addEventListener('click' , InsertData);
  select.addEventListener('click' , selectData);
  update1.addEventListener('click' , updatedata);
  del.addEventListener('click' , delData);





















































































































































































// const btn = document.getElementById("btn");
// const empcode = document.getElementById("empcode")
// const name = document.getElementById("name");
// const designation = document.getElementById("designation");
// const email = document.getElementById("email");
// const extension = document.getElementById("extension");
// const country = document.getElementById("country");
// const contactList = document.getElementById("empList");
// const uid = Math.random().toString(36).substr(2 , 9);


// // Read


// var array = new Array();

// btn.addEventListener("click", function  (e) {
//     e.preventDefault()
//     isValid = form.checkValidity()
//     if (isValid) {

//         var data = localStorage.getItem("contact")
//         var result = JSON.parse(data)

//         var details = {
//             uid:Math.random().toString(36).substr(2 , 9),
//             empcode: empcode.value,
//             name: name.value,
//             designation: designation.value,
//             email: email.value,
//             extension: extension.value,
//             country: country.value
//         }


//         if (result == null) {
//             array.push(details);
//             localStorage.setItem("contact", JSON.stringify(array))
//         } else {
//             result.push(details)
//             localStorage.setItem("contact", JSON.stringify(result))
//         }
   
//         resetForm();

//     } else {
//         console.log("write properly")
//     }

// })



// function resetForm() {
 
//   createContact()


//   uid=""
//   empcode.value = "";
//   name.value = ""
//   designation.value="",
//   email.value="",
//   extension.value="",
//   country.value=""

//   contactList.innerHTML = null

//   window.location.reload();
// }





// // Delete


// function onDeleteForm(contact, detail) {
//     var confirm = window.confirm("Do you want to Delete this Emply Details")

//     if (confirm) {

//         var data = localStorage.getItem("contact");
//         var result = JSON.parse(data);
//         result.splice(detail , 1);
//         localStorage.setItem("contact", JSON.stringify(result));
//         var element = contact;
//         element.parentElement.remove()

//         resetForm();
//     }
//     else {
//         console.log("Emply Details is't Deleted")
//     }

// }



// // Edit

// // Edit Details

// function onEditForm(uid){

//   var confirm = window.confirm("Do you want to Edit this Emply Details")

//   if (confirm) {

//     var EmplyData = localStorage.getItem("contact");
//     var EmplyResult = JSON.parse(EmplyData);

//     var EmplyId = EmplyResult.find((arrItem)=>{return arrItem.uid=EmplyResult});

//     console.log(EmplyId.uid);

//     EmplyResult.find((x) => x.EmplyId === "1");
//     EmplyResult.find((x) => x.EmplyId === "Sachin Saurabh");
//     EmplyResult.find((x) => x.EmplyId === "developer");
//     EmplyResult.find((x) => x.EmplyId === "sachin@gmail.com");
//     EmplyResult.find((x) => x.EmplyId === "245");
//     EmplyResult.find((x) => x.EmplyId === "India");



//     document.getElementById("empcode").value="MS507";

 
//     document.getElementById("name").value="Ravi Kumar";

  
//     document.getElementById("designation").value="FE";

   
//     document.getElementById("email").value="ravi@gmail.com";

 
//     document.getElementById("extension").value="20000";

    
//     document.getElementById("country").value="USA";


//     // localStorage.setItem("contact", JSON.stringify(EmplyId));


//       resetForm();

//   }
//   else {
//       console.log("Emply Details is't Edited")
//   }

// }



// // Create


// function createContact() {
//     var data = localStorage.getItem("contact")

//     var result = JSON.parse(data)

//     result.forEach((detail) => {

//         const inst = document.createElement("div");
//         inst.classList.add("contact")
//         inst.innerHTML = ` 
//         <table class="table table-hover table-xl table-lg table-md table-sm table-xs table-striped mt-5" >               
//         <thead style="background-color: #3c90d6;">
//         <tr>
//           <th>Select</th>
//           <th class="ms-1 text-center" scope="col">Id</th>
//           <th class="ms-1 text-center" scope="col">Emply Code</th>
//           <th class="ms-1 text-center" scope="col">Full Name</th>
//           <th class="ms-1 text-center" scope="col">Designation</th>
//           <th class="ms-1 text-center" scope="col">Email</th>
//           <th class="ms-1 text-center" scope="col">Extension</th>
//           <th class="ms-1 text-center" scope="col">Country</th>
//           <th class="ms-0 text-center" scope="col">Edit</th>
//           <th class="ms-0 text-center" scope="col">Delete</th>
//         </tr>
//       </thead>
//       <tbody>
//     <tr>
//       <td>
//               <div class="form-check">
//               <input class="form-check-input" id="myCheck" type="checkbox" value=""
//                   id="flexCheckChecked">
//               <label class="form-check-label" for="flexCheckChecked">
//                   Select
//               </label>
//           </div>
//       </td>
//       <td class="ms-1 text-center">${detail.uid}</td>
//       <td class="ms-1 text-center">${detail.empcode}</td>
//       <td class="ms-1 text-center">${detail.name}</td>
//       <td class="ms-1 text-center">${detail.designation}</td>
//       <td class="ms-1 text-center">${detail.email}</td>
//       <td class="ms-1 text-center">${detail.extension}</td>
//       <td class="ms-1 text-center">${detail.country}</td>
//       <td class="ms-0 text-center"><svg xmlns="http://www.w3.org/2000/svg" onclick="onEditForm()" class="icon icon-tabler icon-tabler-edit text-warning" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"></path><path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"></path><path d="M16 5l3 3"></path></svg></td>
//       <td class="ms-0 text-center"><svg xmlns="http://www.w3.org/2000/svg" onclick="onDeleteForm(this,${result.indexOf(detail)})" class="icon icon-tabler icon-tabler-trash text-danger" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><line x1="4" y1="7" x2="20" y2="7"></line><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path></svg></td>
//     </tr>
//       </tbody>
//       </table> 
//         `
//         contactList.appendChild(inst)
//     });

// }

// function createContact(){

// }
// createContact()

