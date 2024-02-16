document.getElementById("submit").addEventListener("click", function (event) {
  
  event.preventDefault();

  checkData();
});
 var maincontainer=document.querySelector(".maincontainer")
var username = document.getElementById("username");
var email = document.getElementById("email");
var pass1 = document.getElementById("pass1");
var pass2 = document.getElementById("pass2");

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
    var container1=document.querySelector(".container1");
  container1.style.display="flex";
  maincontainer.style.display="none"; 
  }
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
  

    //Selected catgeory pages///


// var Select_catg=document.getElementById("Select_catg");
 

//  Select_catg.addEventListener("click",()=>{
  
      //  container1.style.display="flex";
      //  maincontainer.style.display="none";``


//  })
let button=document.querySelector("#next_page")
let category=document.querySelectorAll(".category1")
let button2=document.querySelector(".btn")
let span=document.getElementById("span");

// button2.addEventListener("click",()=>{
 

// })


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
        button2.classList.add("col4")
        button.setAttribute("href","Login.html")
        // container1.style.display="none";
        // maincontainer.style.display="flex";
        // Select_catg.style.backgroundColor="#77536F";
        // Select_catg.style.color="white";
        

      
    }
})

