 var inputemail_id=document.querySelector("#inputemail_id");
 var inputPass=document.querySelector("#inputPass");
 var input_box=document.querySelector(".input-butn");

 var loin_errormessage=document.querySelectorAll("#login_error")

 var form=document.querySelector("form");
 console.log(form);

 form.addEventListener("submit",(e)=>{

 e.preventDefault();
 checkvalid();

 

 })

 function checkvalid(){
    console.log("hhh")
     let inputemailvalue=inputemail_id.value.trim();
     let inputPassvalue=inputPass.value.trim();

    let login_email_regex=  /^[a-z0-9]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
    let login_password_regex=/[a-z] [A-Z] [0-9]/g ;


if(inputemailvalue == ""){
    // alert("invalid username")
    loginsetError(0,"invalid email_id" );
}
else if(!inputemail_id.value.match(login_email_regex)){
    alert("Check the user name ")
    
}
if(inputPassvalue == ""){
    loginsetError(1,"invalid email_id" );
    // alert("invalid passwords")
}
else if(!inputPass.value.match(login_password_regex)){

}




 }
 
  function loginsetError(input,message){

            loin_errormessage[input].className="error_visible";
            loin_errormessage.innerHTML=message;

             console.log(input);
             console.log(message);
    
  }