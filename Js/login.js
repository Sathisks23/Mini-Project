
const email_id=document.querySelector("#email_id")
const password=document.querySelector("#passowrd");
const submit=document.querySelector("#submit");


submit.addEventListener("click",(event)=>{
    event.preventDefault();

console.log("hello");
    if(email_id.value.trim()==""){
        error(email_id,"email id can not empty")
    }
    else{
        success(email_id);
    }

    if(password.value.trim()==""){
        error(password,"password can not empty");
    }
    else{
        success(password);
    }

});

  
// const  erroe_msg=document.getElementById("Erro_msg1");
// console.log(p); 
// const  erroe_msg=document.getElementById("Erro_msg1");
// console.log(p);

function error(element,msg){
    // console.log(element);
    // console.log(msg);
    element.style.border='3px red solid';
    const parent=element.parentElement;
    var p=document.querySelectorAll(".Erro_msg");
    p.style. visibility="visible";
    p.textContent=msg;
//   p.classList.remove("none");  
//   p.classList.add(".block");


 }
 
 function success(element,msg){
    element.style.border='3px green solid';
    const parent=element.parentElement;
    p.textContent= msg;
    p.style.visibility = "hidden";

    // p.classList.remove("block");
    // p.classList.add("none");
   
 }


 



  

