 // Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore,getDocs,getDoc,setDoc,addDoc,doc,collection} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import{getStorage,ref as sref,uploadBytesResumable,getDownloadURL} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoI2BPLeE8V14oDZkCWkCy-IARluJ5KGs",
  authDomain: "dckap-news-904dc.firebaseapp.com",
  projectId: "dckap-news-904dc",
  storageBucket: "dckap-news-904dc.appspot.com",
  messagingSenderId: "845776141467",
  appId: "1:845776141467:web:49a16a51ae3d1673695a3e"
};


let usersData=JSON.parse(localStorage.getItem("usersData"))



// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
  
let ref = collection(db,'user')
let getData = await getDocs(ref)
let id = getData.size;


var error=document.getElementById("err2")
var inputname=document.getElementById("text2")
var button=document.getElementById("btn")
var button2=document.getElementById("btn2")
var a=document.getElementById("btn_link")
var a2=document.getElementById("cancel_link")
var edit=document.querySelector(".color")
var bio1=document.getElementById("bio")

let ProfileImg = document.querySelector("#change");
    let inputfile= document.querySelector("#drop_zone");

inputfile.onchange = function(){
    ProfileImg.src = URL.createObjectURL(inputfile.files[0]) 
}

var count=0

error.classList.add("none")

let getRef1 = doc(db, "user", usersData);

let getData1 = await getDoc(getRef1);
console.log(getData1.data().u_email); 


function click() {
    var nameRegex =/[a-z]{3,}/gi;

    if (nameRegex.test(inputname.value)) {
        error.classList.remove("block")
        error.classList.add("none")
        count=1
      }
      else{
        error.classList.remove("none")
        error.classList.add("block")
      }
    setTimeout(() => {
        error.classList.remove("block")
        error.classList.add("none")
    },1500)
}

// retrive User

// let  ref1 = doc(db,'user',)



let bio 
let dp
let email
let faver
let pass



button.addEventListener("click",(event)=>{

click()





if (count<1) {
  event.preventDefault()
}
else{    
  event.preventDefault()
 
  let pimage = document.getElementById('drop_zone').files[0]

  let meta_data = {contentype:pimage.type}
  let task = sref(getStorage(),'images'+pimage.name)
  let usersData=JSON.parse(localStorage.getItem("usersData"))
  let store = uploadBytesResumable(task,pimage,meta_data)
  store.then(getDownloadURL(store.snapshot.ref).then((downloadURL)=>{
       dp = downloadURL
  }))
    
       bio= getData1.data().u_bio
       dp = dp
       email = getData1.data().u_email
       faver = getData1.data().u_favcategory
       pass = getData1.data().u_password
    

    setDoc(doc(db,"user",usersData), {
      u_bio:bio,
      u_dp:dp,
      u_email:email,
      u_favcategory:faver,
      u_password:pass,

      u_name: inputname.value,
      u_bio:bio1.value,
      
    }).then(()=>alert("user added"));
    a.setAttribute("href","profile.html")
}
})
button2.addEventListener("click",()=>{
  a2.setAttribute("href","profile.html")
})

