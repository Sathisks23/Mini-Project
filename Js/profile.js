// // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCoI2BPLeE8V14oDZkCWkCy-IARluJ5KGs",
//   authDomain: "dckap-news-904dc.firebaseapp.com",
//   projectId: "dckap-news-904dc",
//   storageBucket: "dckap-news-904dc.appspot.com",
//   messagingSenderId: "845776141467",
//   appId: "1:845776141467:web:49a16a51ae3d1673695a3e"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
//  import { getFirestore, getDoc, getDocs, doc, setDoc, updateDoc, addDoc,  collection } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";


// let db = getFirestore(app);

var news = document.querySelector("#news_1");
var container = document.querySelector("#second_container");
var news_expand = document.getElementById("news_expand");
var publish = document.querySelector(".publish");

news_expand.style.display="none";
// container.style.display="none";
news.addEventListener("click",()=>{
    container.style.display = "none";
    news_expand.style.display="block";
})
















// --------------------------------------------------------------------
// let see_more = document.querySelectorAll('#see_more')
//     see_more.forEach(item=>{
//         item.addEventListener('click',function(){showmore(this)})
//     })

// function showmore(mm){
//     if(  mm.parentElement.firstElementChild.id!='see_more' &&  mm.parentElement.lastElementChild.innerText=='See More..' ){
//         mm.parentElement.firstElementChild.style.display = 'block';
//         mm.innerText = 'See Less..'
//     }else if( mm.parentElement.lastElementChild.innerText=='See Less..'){ 
//         mm.parentElement.firstElementChild.style.display = 'none';
//         mm.innerText = 'See More..'
//     }

// }
// function showcomment(e){
//     e.parentElement.parentElement.parentElement.lastElementChild.classList.toggle('d_block')
// }

// function sendshow(e){

//     if(e.value.trim().length>0){e.parentElement.querySelector('#sending').classList.add('d_block')}
//     else{e.parentElement.querySelector('#sending').classList.remove('d_block')}


// }

// --------------------------------------------------------------------------------------------