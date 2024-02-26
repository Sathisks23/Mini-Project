 // Import the functions you need from the SDKs you need
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
var bio=document.getElementById("bio")

let ProfileImg = document.querySelector("#change");
    let inputfile= document.querySelector("#drop_zone");

inputfile.onchange = function(){
    ProfileImg.src = URL.createObjectURL(inputfile.files[0]) 
}

var count=0

error.classList.add("none")



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






button.addEventListener("click",(event)=>{
click()
if (count<1) {
    event.preventDefault()
}
else{
    // console.log("hi");
    event.preventDefault()
    setDoc(doc(db,"user",`u_id-${++id}`), {
      u_name: inputname.value,
      u_bio:bio.value,
      // u_favcategory:arr2
    }).then(()=>alert("user added"));
    a.setAttribute("href","profile.html")
}
})
button2.addEventListener("click",()=>{
  a2.setAttribute("href","profile.html")
})

