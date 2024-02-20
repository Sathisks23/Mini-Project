
var maincontainer=document.querySelector(".maincontainer")
var username = document.getElementById("username");
var email = document.getElementById("email");
var pass1 = document.getElementById("pass1");
var pass2 = document.getElementById("pass2");
let otp_random

document.getElementById("submit").addEventListener("click", function (event) {
  
  event.preventDefault();
 
 checkData();

  otp_random=Math.floor(Math.random()*100000);
  let mail_msg =`Hi ${username.value} welcome to our website please verifiy email id and  enter your otp
               OTP:<br> ${otp_random} <br>`;

  //  console.log("clicked new");

  Email.send({
    SecureToken : "273dd9f4-61d3-456a-b3f9-3b4561e69c48",
    To : email.value,
    From : "dckapnews@gmail.com",
    Subject : "Enter the OTP",
    Body : mail_msg
  }).then(
  message => alert(message)
  
  )  .catch(error => alert(error));
 



});





// validation part

function checkData() {
  var usernameValue = username.value.trim();
  var emailValue = email.value.trim();
  var pass1Value = pass1.value.trim();
  var pass2Value = pass2.value.trim();
  var count=0 

  if (usernameValue == "") {
     setError(username, "Username can't be blank");
    setTimeout(() => {
      setError(username, "");
      },1500)
   
  } else {
     setSuccess(username);
  }

  if (emailValue == "") {
    setError(email, "Email can't be blank")
    setTimeout(() => {
      setError(email, "");
      },1500)
   
  } else if (!isEmail(emailValue)) {
    setTimeout(() => {
      setError(email, "Email is not Valid");
      setError(email, "");
      },1500)

  } else {
     setSuccess(email);
     count++
  }


  if (pass1Value == "") {
    setError(pass1, "Password can't be blank");
    setTimeout(() => {
      setError(pass1, "");
      },1500)
    
  } else {
     setSuccess(pass1);
     count++
  }


  if (pass2Value == "") {
    setError(pass2, "Password can't be blank");
    setTimeout(() => {
      setError(pass2, "");
      },1500)
   
  } else if (pass1Value !== pass2Value) {
    setError(pass2, "Password does not match");
    setTimeout(() => {
      setError(pass2, "");
      },1500)
    
  } else {
     setSuccess(pass2);
     count++
  }
  if (count==3) {
  otpdiv()
  }
}


 let otpmaincontainer=document.getElementById("otpmaincontainer");

function otpdiv(){

  otpmaincontainer.style.display="block";

 let otpdiv=document.createElement('div');
 otpdiv.className='otpdiv';
 let label=document.createElement('label');
 label.className='otplabel';
 label.textContent="OTP:";
   let otpinput=document.createElement("input");
     otpinput.type="text";
     otpinput.id="otpinputvalue";
let otpbutton=document.createElement("button");
// otpbutton.addEventListener('click',otpbutton)
 otpbutton.textContent="ok";
 otpbutton.className="otpbtn";

   otpmaincontainer.append(otpdiv);
   otpdiv.append(label);
   otpdiv.append(otpinput);
   otpdiv.append(otpbutton);



   otpbutton.addEventListener("click",()=>{
    console.log("otp")
   let otp_value=document.getElementById("otpinputvalue").value;
   if(otp_value==otp_random){
    confirm("valid OTP")
    otpmaincontainer.remove()
    container1.style.display="flex";
    maincontainer.style.display="none";
    
   }
   else{
    alert("invalid OTP")
   }
   
  
    
  })

}




// function otpbutton(){
//   console.log('iii');
// }
var container1=document.querySelector(".container1");
function selectcat(){

  container1.style.display="flex";
  maincontainer.style.display="none"; 
}


function setError(u, msg) {
  var parentBox = u.parentElement;
  parentBox.className = "input-field error";
  var span = parentBox.querySelector("span");
  var fa = parentBox.querySelector(".fa");
  span.innerText = msg;
  fa.className = "fa fa-exclamation-circle";
}

function setSuccess(u) {
  var parentBox = u.parentElement;
  parentBox.className = "input-field success";
  var fa = parentBox.querySelector(".fa");
  fa.className = "fa fa-check-circle";
}

function isEmail(e) {
  var reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reg.test(e);
}   
   







   
   
   
   
   
   
   
   
   
   
   
   


pass1.onfocus = function() {
    document.getElementById("message").style.display = "block";
 
  }
  
  
  pass1.onblur = function() {
    document.getElementById("message").style.display = "none";
  }
  
  document.getElementById('pass1').addEventListener('keyup',validatefunc)
  
  
  function validatefunc(){

   
var length=document.getElementById("length")

      var lowerCaseLetters = /[a-z]/g;
      if( pass1.value.match(lowerCaseLetters)) {  
        letter.classList.remove("invalid");
        letter.classList.add("valid");
      } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
      }
    
      var upperCaseLetters = /[A-Z]/g;
      if( pass1.value.match(upperCaseLetters)) {  
        capital.classList.remove("invalid");
        capital.classList.add("valid");
   
      } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
      }
    
      var numbers = /[0-9]/g;
      if( pass1.value.match(numbers)) {  
        number.classList.remove("invalid");
        number.classList.add("valid");
     
      } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
      }
            
      if( pass1.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
     
      } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
      }

    } 
  

let button=document.querySelector("#next_page")
let category=document.querySelectorAll(".category1")
let button2=document.querySelector(".btn")
let span=document.getElementById("span");




let count=0
let arr=[]
// console.log(category);
span.classList.add("none")
// console.log(category);
span.classList.add("none")
button2.classList.add("col1")

category.forEach((x,category)=>{
    x.classList.add("cat")
    x.addEventListener("click",()=>{
        if(arr.includes(x)) {
            x.classList.remove("box")
            x.classList.add("cat")
            count=count-1
            arr.pop(x)
            console.log(arr);
            console.log(count);  
            if (count<3) {
                button2.classList.remove("col2")
                button2.classList.add("col1")
                button2.addEventListener("mouseover",()=>{
                  button2.classList.remove("col3")
              })
            }
        }
       else if(!(arr.includes(x))) {
        x.classList.remove("cat")
        x.classList.add("box")
        count=count+1
        arr.push(x)
        console.log(arr);
        console.log(count); 
        if (count>=3) {
            button2.classList.remove("col1")
            button2.classList.add("col2")
            button2.addEventListener("mouseover",()=>{
                button2.classList.add("col3")
            })
        }     
       }

    })
})
button2.addEventListener("click",(event)=>{
    if (count<3) {
        event.preventDefault()  
        span.classList.remove("none")
        span.classList.add("flex")
        setTimeout(() => {
          span.classList.remove("flex")
          span.classList.add("none")
          },1500)
    }
    else{
        button2.classList.remove("col2")
        button2.classList.add("col4");
        button.setAttribute("href","HomePage.html")

    }
})













//   // Import the functions you need from the SDKs you need
//   import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
//   // TODO: Add SDKs for Firebase products that you want to use
//   // https://firebase.google.com/docs/web/setup#available-libraries

//   // Your web app's Firebase configuration
//   const firebaseConfig = {
//     apiKey: "AIzaSyCoI2BPLeE8V14oDZkCWkCy-IARluJ5KGs",
//     authDomain: "dckap-news-904dc.firebaseapp.com",
//     projectId: "dckap-news-904dc",
//     storageBucket: "dckap-news-904dc.appspot.com",
//     messagingSenderId: "845776141467",
//     appId: "1:845776141467:web:49a16a51ae3d1673695a3e"
//   };

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   import{
//     getDatabase,ref,set,child,update,remove}
//     from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
//     const db =getDatabase();
//     ///////////////////////references/////////////////////



// ///////////////////insert database///////
  
// function insertData(){
//   set(ref(db,"dckapNews/"+email.value ),{
    
//   })
// }