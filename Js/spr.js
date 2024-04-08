

 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
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

 import { getFirestore,query,where, getDoc, getDocs, doc, setDoc, updateDoc, addDoc,  collection } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js"


//THeme change 
// let theme = JSON.parse(localStorage.getItem("theme"))
// let a = document.querySelector('.img_nav').querySelectorAll('a')
// a.forEach((e)=>{
// e.classList.toggle('blacktheme')})

// if(theme=='dark'){
//   document.body.style.backgroundColor='black'
//   document.body.style.color = 'white'
//   document.querySelector('header').style.backgroundColor = 'black'
//   document.querySelector('header').style.color = 'white'
//   document.querySelector('.img_nav').style.backgroundColor='black'
//   document.querySelector('.img_nav').style.color='white'
//   document.body.classList.toggle('blacktheme')
//   document.querySelector('header').classList.toggle('blacktheme')
//   document.querySelector('.search').classList.toggle('darkinput')
// //  document.getElementById('theme').classList.toggle('blacktheme')
// }else{
//   document.body.backgroundColor='white'
//   document.body.style.color = 'black'
//   document.querySelector('header').style.backgroundColor = 'white'
//   document.querySelector('header').style.color = 'black'
//   document.querySelector('.img_nav').style.backgroundColor='white'
//   // document.body.classList.toggle('blacktheme')
//   document.querySelector('header').classList.toggle('blacktheme')
//   document.querySelector('.search').classList.toggle('darkinput')
// //  document.getElementById('theme').classList.toggle('blacktheme')
// }













 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
let db = getFirestore(app)
// geting user Output

let uprofile  = document.getElementById('userpro')
let username =  document.getElementById('user_name')
let userbio = document.getElementById('bio')



let usersData=JSON.parse(localStorage.getItem("usersData"))


let user_getref = doc(db,'user',usersData)
let user_getData = await getDoc(user_getref)


let up=  document.getElementById('profile')
up.src=user_getData.data().u_dp




let    mul_user_getref = doc(db,'user',usersData)
let   mu_user_getData  =await  getDoc(mul_user_getref)
    mu_user_getData.data().u_id


    uprofile.src = mu_user_getData.data().u_dp
    username.innerText = mu_user_getData.data().u_name
    if(mu_user_getData.data().u_bio)
{
  userbio.innerText = mu_user_getData.data().u_bio
}else{
   userbio.innerText = ""
}




let post_getref =  collection(db,'post')
let q = query(post_getref,where('u_id','==',usersData))

 let querysap = await getDocs(q)
 
querysap.forEach(async(rec)=>{

   
 let uid =rec.data().u_id

 let    mul_user_getref = doc(db,'user',uid)
 let   mu_user_getData  =await  getDoc(mul_user_getref)
     mu_user_getData.data().u_id


     uprofile.src = mu_user_getData.data().u_dp
     username.innerText = mu_user_getData.data().u_name
     userbio.innerText = mu_user_getData.data().u_bio




let card = document.createElement('div')
 card.className = 'post_view'

 card.innerHTML = 

 ` <div class='post_head'> <img id='user_dp' src='${ mu_user_getData.data().u_dp}'> <h4 id='mini_uname'>${mu_user_getData.data().u_name}</h4></div>`+
        `<div class='description'><p id='post_desc'>'${rec.data().p_desc}'</p> </div>`+
        
       ` <div class='post_div'><img id='post' src='${rec.data().p_link}'></div>`+
       ` <div class='social_section'><div class='like_div'> <i  id='check_like'  class='fa-regular fa-thumbs-up'></i>  <b  id='likes'>${rec.data().p_like}</b> </div> <div class='comment_icon'> <i onclick='showcomment(this)'' class='fa-regular fa-comment'></i>  <b id='comment_counnt'>100</b></div> </div>`
        "<div class=;comment_section'>"
            "<div class='add_comment_section'> <img id='comment_dp' src='' ><input onkeyup='sendshow(this)' id='comment_input' placeholder='add a comment..' type='text'> <i id='sending' class='fa-regular fa-paper-plane'></i> <i   class='fa-regular fa-face-smile'></i></div>"
            " <div class='comments_list'>"
                "<div class='comment_div'> <img  id='cmnt_user_dp' src='' > <div class='cmnt_header'><p id='comment'>Yeah actually that is true,there many trees that have been cutting down we have to grow some trees in free space.</p><div class='replay'><i class='fa-solid fa-reply'></i><span class='replay_s'>replay</span></div></div> </div>"
             "</div>"
        "</div>"
    
var c = document.querySelector('.post_container')
c.append(card)



})


// var pro_img = document.getElementById('news11');
// var sub_username = document.querySelector('.sub_username1');
// var discription = document.getElementById('full_discription');
// var full_pic = document.getElementById('full_pic');

// var dp=document.getElementById('user_dp');




// var expantion = document.querySelectorAll('.post_container');





// expantion.forEach((x,index)=>{
//   // alert("img clicked");
 

//   x.addEventListener('click',()=>{
//     // alert(dp);

//     var pro_pic =dp.src; 
//     var ful_img = post.src;
//     var subname = mini_uname.innerText;
//     var discrib_post = post_desc.innerText;


//     pro_img.src=x.pro_pic;
//     sub_username.innerText =x.subname;
//     discription.innerText=x.discrib_post;
//     full_pic.src= x.ful_img;

//     console.log("value ="+x.subname);
//   })ar pro_img = document.getElementById('news11');
// var sub_username = document.querySelector('.sub_username1');
// var discription = document.getElementById('full_discription');
// var full_pic = document.getElementById('full_pic');

// var dp=document.getElementById('user_dp');




// var expantion = document.querySelectorAll('.post_container');





// expantion.forEach((x,index)=>{
//   // alert("img clicked");
 

//   x.addEventListener('click',()=>{
//     // alert(dp);

//     var pro_pic =dp.src; 
//     var ful_img = post.src;
//     var subname = mini_uname.innerText;
//     var discrib_post = post_desc.innerText;


//     pro_img.src=x.pro_pic;
//     sub_username.innerText =x.subname;
//     discription.innerText=x.discrib_post;
//     full_pic.src= x.ful_img;

//     console.log("value ="+x.subname);
//   })
// });


// });










// var news_expand = document.getElementById("news_expand");

// news_expand.style.display="none";
// news.addEventListener("click",()=>{
//     container.style.display = "none";
//     news_expand.style.display="block";
// })



// dark mode.............................

const body = document.querySelector('body');

var dark_theme = document.getElementById('theme');

dark_theme.addEventListener('click',dark_mode);





function dark_mode() {
  console.log("log");
  var theme = body.classList.toggle('blacktheme');
  document.querySelector('header').classList.toggle('blacktheme');
  document.querySelector('.search').classList.toggle('sty');
  document.querySelector('#searchinput').classList.toggle('ins');
  
  let img =document.getElementById('logo')
  let real_src=img.src.slice(22);

  if(document.querySelector('#img_nav').style.backgroundColor!="black"){

    img.src='Assests/darklogo.png'
    let category=document.querySelectorAll(".category1")
    let img_nav=document.querySelector("#img_nav")
      category.forEach((x)=>{
        x.backgroundColor ='black';
      })
    img_nav.style.backgroundColor="black";
    let a=document.querySelectorAll("a")
    a.forEach((x)=>{
      x.style.color ='white';
    })
      console.log(document.querySelector('#img_nav'));
    sessionStorage.setItem("drk_theme", theme);
  
}else{

    img.src='Assests/logo.png'
    let category=document.querySelectorAll(".category1")
    let img_nav=document.querySelector("#img_nav")
    category.forEach((x)=>{
      x.backgroundColor ='white';
})
img_nav.style.backgroundColor="white";
let a=document.querySelectorAll("a")
a.forEach((x)=>{
x.style.color ='black';
})
// console.log(document.querySelector('#img_nav'));
}

  sessionStorage.setItem("drk_theme", theme);

}

var get_theme = sessionStorage.getItem("drk_theme");

if (get_theme == "true") {
  dark_mode();
}

