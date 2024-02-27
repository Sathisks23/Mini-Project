"use strict"

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



//---------Showing profile

var news = document.querySelector("#news_1");
var container = document.querySelector("#second_container");
var news_expand = document.getElementById("news_expand");
// var publish = document.querySelector(".publish");

news_expand.style.display="none";
// container.style.display="none";
news.addEventListener("click",()=>{
    container.style.display = "none";
    news_expand.style.display="block";
})

/// fireBase Integration


  

//Getting User Outputs

let uname = document.getElementById('id_name')
let urname = document.getElementById('urname')
let ubio = document.getElementById('ubio')
let udb = document.getElementById('profile_pic')
let usersData=JSON.parse(localStorage.getItem("usersData"))


//retrive user details  form firebase

// let getRef = doc(db, "user", usersData);

//   let getData = await getDoc(getRef);

  
  //  ubio.innerText=getData.data().u_bio
  // urname.innerText = getData.data().u_rname
  // uname.innerText = getData.data().u_name
  // udb.src = getData.data().udb


//retrive Post detail 
let news_container = document.getElementById('news_container')


let post_getRef = collection(db, "post");

  let post_getData = await getDocs(post_getRef);

     post_getData.forEach((record)=>{
    
      if(record.data().u_id==usersData){
        let firstdiv = document.createElement('div');
        firstdiv.className = 'first_news';
        news_container.append(firstdiv)
    
        let newsdiv = document.createElement('div');
        newsdiv.className = 'news_1';
        firstdiv.append(newsdiv)
  
  
        let icondiv = document.createElement('div');
        icondiv.className = "icon_discription";
        newsdiv.append(icondiv)
  
        let boxicon = document.createElement('div');
        boxicon.className = "box_icon";
        icondiv.append(boxicon)
  
        let profile_dp = document.createElement('img');
            profile_dp.src = record.data().u_dp
      profile_dp.id = 'news1';
      boxicon.append(profile_dp)
  
  let sub_username = document.createElement('p');
  sub_username.innerText= record.data().u_name
       sub_username.className = 'sub_username';
       boxicon.append(sub_username)
  
       let discription = document.createElement('div');
       discription.className = 'discription';
       newsdiv.append(discription)
    
       let desc =  document.createElement('p');
       desc.innerText = record.data().p_desc
       desc.id  = 'desc';
       discription.append(desc)
  
       let own_news = document.createElement('div');
       own_news.className = 'own_news';
     newsdiv.append(own_news)
  
     let dis_img = document.createElement('img');
     dis_img.src = record.data().p_link
     dis_img.className = 'dis_img';
     own_news.append(dis_img)
  
     let like_command = document.createElement('div');
     like_command.id = 'like_command';
     newsdiv.append(like_command)
  
     let div1 = document.createElement('div');
     div1.className = 'empty_d1';
     like_command.append(div1)
  
  
     let thumbsup = document.createElement('i');
     thumbsup.className = "fa-regular fa-thumbs-up";
     div1.append(thumbsup)
  
    //  let likecount = document.createElement('span');
    //  likecount.id='likecount';
    //  likecount.innerText = 
    //   div1.append(likecount)
  
      let div2 = document.createElement('div');
     div1.className = 'empty_d2';
     like_command.append(div2)
      let comment = document.createElement('i');
      comment.className = "fa-regular fa-comment";
      div2.append(comment)
  
      let cmtcount = document.createElement('span');
      cmtcount.id='cmtcount';
     div2.append(cmtcount)
      }
   
    
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