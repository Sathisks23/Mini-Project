import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore,getDocs,setDoc,addDoc,doc,collection} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoI2BPLeE8V14oDZkCWkCy-IARluJ5KGs",
  authDomain: "dckap-news-904dc.firebaseapp.com",
  projectId: "dckap-news-904dc",
  storageBucket: "dckap-news-904dc.appspot.com",
  messagingSenderId: "845776141467",
  appId: "1:845776141467:web:49a16a51ae3d1673695a3e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


let usersData=JSON.parse(localStorage.getItem("usersData"))

 if(usersData){
      location.replace("hmpg.html");
    }



const email_id=document.querySelector("#email_id")
const password=document.querySelector("#passowrd");

const btn =document.querySelector("#submit");
let two = false

btn.addEventListener("click",(event)=>{
    event.preventDefault();
    
console.log("hello");
    if(email_id.value.trim()==""){
    
       
        error(email_id,"email id can not empty")
        two = false

    }
    else{
        
        success(email_id);
        email_validate()
        two = true
    }

    if(password.value.trim()==""){
 
        
        error(password,"password can not empty");
        two = false

    }
    else{
       

        success(password);
        two = true
console.log(password.value);
       
    }


  if(two==true){
  email_validate()

  }



});

///firebase Email Validation 


// console.log(no);




let i= 0
async function   email_validate(){

    let getRef = collection(db, "user");
    let no = []
    
            let getData1 = await getDocs(getRef);
    
            console.log(getData1.size);
           
            getData1.forEach((record)=>{
               
          let row = [record.data().u_email,record.data().u_password ,record.id]
               no.push(row)
    
                
            });
    


     for(i in no){
        if((no[i][0])==email_id.value && no[i][1]==password.value){

            localStorage.setItem("usersData",JSON.stringify(no[i][2]));

             location.replace('hmpg.html') 

        } 
        
     } 
}















var p=document.querySelectorAll(".Erro_msg");

function error(element,msg){
  
    element.style.border='3px red solid';
    const parent=element.parentElement;
   
    console.log(p);
  
    p.forEach(elem => {
        elem.style. display="block";
        elem.innerText=msg;
    });



 }
 
 function success(element,msg){
    element.style.border='3px green solid';
    const parent=element.parentElement;
   
    p.forEach(elem => {
        elem.innerText= msg;
    elem.style.display = "none";
    });
   

    // p.classList.remove("block");
    // p.classList.add("none");
   
 }


 




// console.log(no[9][1]==password.value,typeof(password.value),typeof(no[9][1]));