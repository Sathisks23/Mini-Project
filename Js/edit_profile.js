"use strict"
var error1=document.getElementById("err1")
var error2=document.getElementById("err2")
var user=document.getElementById("text")
var inputname=document.getElementById("text2")
var button=document.getElementById("btn")
var button2=document.getElementById("btn2")
var a=document.getElementById("btn_link")
var a2=document.getElementById("cancel_link")
var edit=document.querySelector(".color")
let imageUpload = document.getElementById("drop_zone");
let img = document.getElementById("change");

imageUpload.addEventListener('change', function() {
    let input = this.files[0];
    let text;
    if (input) {
        text = URL.createObjectURL(input);
        // console.log(text);
    }
    img.src = text; 
});

var count=0

error1.classList.add("none")
error2.classList.add("none")



function click() {
    var usernameRegex = /^[a-zA-Z0-9_]{3,}/g;
    var nameRegex =/[a-z]{3,}/gi;

    if (!usernameRegex.test(user.value)) {
        error1.classList.remove("none")
        error1.classList.add("block")
      }
      else{
        error1.classList.remove("block")
        error1.classList.add("none")
        count++
      }
    if (!nameRegex.test(inputname.value)) {
        error2.classList.remove("none")
        error2.classList.add("block")
      }
      else{
        error2.classList.remove("block")
        error2.classList.add("none")
        count++
      }
    setTimeout(() => {
        error1.classList.remove("block")
        error1.classList.add("none")
        error2.classList.remove("block")
        error2.classList.add("none")
    },1500)
}


button.addEventListener("click",(event)=>{
click()
if (count<2) {
    event.preventDefault()
}
else{
    console.log("hi");
    a.setAttribute("href","HomePage.html")
}
})
button2.addEventListener("click",()=>{
  a2.setAttribute("href","profile.html")
})
