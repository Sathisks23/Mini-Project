"use strict"
var error=document.getElementById("err2")
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


button.addEventListener("click",(event)=>{
click()
if (count<1) {
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
