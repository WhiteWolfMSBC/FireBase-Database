var firebaseConfig = {
    apiKey: "AIzaSyCcmaQO9mv2HIHtxE92Ugb8Jw4xi4SRShM",
    authDomain: "emply-database.firebaseapp.com",
    databaseURL:"https://emply-database-default-rtdb.firebaseio.com/",
    projectId: "emply-database",
    storageBucket: "emply-database.appspot.com",
    messagingSenderId: "539928255615",
    appId: "1:539928255615:web:65c48b7cc4e5857be0f34a"
  };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);




//   fetching Data

function selectAllData(){
   var firebaseRef = firebase.database().ref('EmpDetails');
     //Use on method Also
   firebaseRef.once('value' , function(snapshot){
        snapshot.forEach(function(element){
            console.log(element.key);
                console.log(element.val());

                var id = element.val().id
                var name = element.val().Name;
                var email = element.val().EmailId;
                var extension = element.val().Extension;

                AddItemsToTable(id,name,email,extension);
            });
    })
}

window.onload=selectAllData;



// Table

var emp = 0;

function  AddItemsToTable(id,name,email,extension){
    var tbody=document.getElementById("dbTable");
    var trow=document.createElement("tr");
    var td1=document.createElement("td");
    var td2=document.createElement("td");
    var td3=document.createElement("td");
    var td4=document.createElement("td");
    var td5=document.createElement("td");


    td1.innerHTML = ++emp;
    td2.innerHTML = id;
    td3.innerHTML = name;
    td4.innerHTML = email;
    td5 .innerHTML = extension;

    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);
    trow.appendChild(td4);
    trow.appendChild(td5);

    tbody.appendChild(trow);
}