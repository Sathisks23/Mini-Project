

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

  import { getFirestore,query,where, getDoc, getDocs, orderBy,limit,doc, setDoc, updateDoc, addDoc,  collection } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js"

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
let db = getFirestore(app)




addEventListener('load',()=>{
    category_selected(0)
})




















//for see more ...
let see_more = document.querySelectorAll('#see_more')
    see_more.forEach(item=>{
        item.addEventListener('click', function(){showmore(this)})
    })

function showmore(mm){
    if(  mm.parentElement.firstElementChild.id!='see_more' &&  mm.parentElement.lastElementChild.innerText=='See More..' ){
        mm.parentElement.firstElementChild.style.display = 'block';
        mm.innerText = 'See Less..'
    }else if( mm.parentElement.lastElementChild.innerText=='See Less..'){ 
        mm.parentElement.firstElementChild.style.display = 'none';
        mm.innerText = 'See More..'
    }

}


let a = document.querySelector('.ca_popup').querySelectorAll('li')
a.forEach((e)=>{

e.addEventListener('click',function(){category_selected(this)})
})
    


//Theme  Change
let theme =document.getElementById('theme')
    theme.addEventListener('click',changetheme)

function changetheme(){
    let img =document.getElementById('logo')
    let b=img.src.slice(22)
    console.log(b);
      document.body.classList.toggle('blacktheme')
      document.querySelector('header').classList.toggle('blacktheme')
      document.querySelector('.search').classList.toggle('darkinput')
     document.getElementById('theme').classList.toggle('blacktheme')
     
      
 let a = document.querySelector('.ca_popup').querySelectorAll('li')
      a.forEach((e)=>{
    e.querySelector('a').classList.toggle('blacktheme')
    e.addEventListener('click',function(){category_selected(this)})
     })
    document.querySelector('.logo_div').classList.toggle('black')

        if(b=='Assests/logo.png'){
            img.src='Assests/darklogo.png'
            document.getElementById('trending_log').src='Assests/darktrendlogo.png'
            document.getElementById('themebtn').src ='Assests/darkthemelogo.png'
            // theme.innerText = "Dark Theme"
         }else{
            img.src='Assests/logo.png'
            document.getElementById('trending_log').src='Assests/trending_log.png'
            document.querySelector('#themebtn').src ='Assests/themechange.png'
            // theme.innerText = "Ligth Theme"

        }
}

//for scrolling .......
let main_view = document.querySelector('.main_view')

let trending_views = document.querySelector('.trending_views')
    trending_views.addEventListener('wheel',trending_views_scroll)
    
    function trending_views_scroll(){
      main_view.style.position = 'fixed'
      main_view.style.top = '100px'
     trending_views.style.position = 'absolute'
    }

    main_view.addEventListener('wheel' ,mainscroll)
    function mainscroll(){
    console.log('scroll');
     trending_views.style.position = 'fixed'
     trending_views.style.top = '100px'
     main_view.style.position = 'absolute'
}


//Comment section.........
function showcomment(e){
    e.parentElement.parentElement.parentElement.lastElementChild.classList.toggle('d_block')
}
function sendshow(e){
    if(e.value.trim().length>0){e.parentElement.querySelector('#sending').classList.add('d_block')}
    else{e.parentElement.querySelector('#sending').classList.remove('d_block')}
    
}


//Likes  ..................................

// let like_count = 0
// let like=document.querySelectorAll(".like_div")
//     like.forEach((e)=>{e.addEventListener('click' ,uplike)})
// let like_icon=like.firstElementChild

// console.log(like_icon);
// let check  = document.querySelector('#check_like')
//   function uplike(btn){
    
//    console.log('d');
//  if(btn.style.color!= 'blue'){btn.style.color= 'blue';  like_count+=1;  btn.parentElement.lastElementChild.innerText = like_count}
//  else{btn.style.color= 'black' ;like_count-=1 ;btn.parentElement.lastElementChild.innerText = like_count}
    
//   }







//firebase retrive post 
let usersData=JSON.parse(localStorage.getItem("usersData"))


let user_getref = doc(db,'user',usersData)
let user_getData = await getDoc(user_getref)
let fav_arry= user_getData.data().u_favcategory 

let up=  document.getElementById('profile')
up.src=user_getData.data().u_dp




let i=0


    

//    for(i in fav_arry){

   

//         let post_getref =  collection(db,'post')
//        let q = query(post_getref,where('c_name','==',fav_arry[i]))

//         let querysap = await getDocs(q)
        
//        querysap.forEach(async(rec)=>{
          
//         let uid =rec.data().u_id

//         let    mul_user_getref = doc(db,'user',uid)
//         let   mu_user_getData  =await  getDoc(mul_user_getref)
//             mu_user_getData.data().u_id

//     let card = document.createElement('div')
//         card.className = 'post_view'

//         card.innerHTML = 
//        ` <div class='post_head'> <img id='user_dp' src='${ mu_user_getData.data().u_dp}'> <h4>'${mu_user_getData.data().u_name}'</h4></div>`+
//         `<div class='description'><p id='post_desc'>'${rec.data().u_desc}'</p> </div>`+
        
//        ` <div class='post_div'><img id='post' src='${rec.data().p_link}'></div>`+
//        ` <div class='social_section'><div class='like_div'> <i onclick='uplike(this)' id='check_like'  class='fa-regular fa-thumbs-up'></i>  <b  id='likes'>0</b> </div> <div class='comment_icon'> <i onclick='showcomment(this)'' class='fa-regular fa-comment'></i>  <b id='comment_counnt'>100</b></div> </div>`
//         "<div class=;comment_section'>"
//             "<div class='add_comment_section'> <img id='comment_dp' src='' ><input onkeyup='sendshow(this)' id='comment_input' placeholder='add a comment..' type='text'> <i id='sending' class='fa-regular fa-paper-plane'></i> <i   class='fa-regular fa-face-smile'></i></div>"
//             " <div class='comments_list'>"
//                 "<div class='comment_div'> <img  id='cmnt_user_dp' src='' > <div class='cmnt_header'><p id='comment'>Yeah actually that is true,there many trees that have been cutting down we have to grow some trees in free space.</p><div class='replay'><i class='fa-solid fa-reply'></i><span class='replay_s'>replay</span></div></div> </div>"
//              "</div>"
//         "</div>"
    

// main_view.append(card)
        
//         })

//     }

    //  Categories

 
   async function category_selected(element){

      
console.log(window.location.href , element.value);

      
    if(element.innerText!='My favourtie' && element!=0){

        main_view.innerHTML = ''

        let post_getref =  collection(db,'post')
        let q = query(post_getref,where('c_name','==',element.innerText))
        
         let querysap = await getDocs(q)
         
        querysap.forEach(async(rec)=>{
           
           console.log(rec.data());
         let uid =rec.data().u_id

         console.log(uid);
 
         let    mul_user_getref = doc(db,'user',uid)
         let   mu_user_getData  =await  getDoc(mul_user_getref)
            //  mu_user_getData.data().u_id
 
     let card = document.createElement('div')
         card.className = 'post_view'


         let ref = doc(db,"post",rec.id);
            let postData= await  getDoc(ref)
            let numlike=postData.data().p_like
             let checklike = postData.data().liked_person
        console.log(checklike);
         let checked = checklike.includes(usersData)
        console.log(checked);
         let findlike 


         if(checked==true){
            findlike=  " <i id='check_like' style='color:blue;'  class='fa-regular fa-thumbs-up'></i> "

        }else{
            findlike=  " <i id='check_like'   class='fa-regular fa-thumbs-up'></i> "
       
        }
 
         card.innerHTML = 
        ` <div class='post_head'> <img id='user_dp' src='${ mu_user_getData.data().u_dp}'> <h4>${mu_user_getData.data().u_name}</h4></div>`+
         `<div class='description'><b>${rec.data().p_title}</b><p id='post_desc'>${rec.data().p_desc}</p> </div>`+
         
        ` <div class='post_div'><img id='post' src='${rec.data().p_link}'></div>`+
        ` <div class='social_section'><div class='like_div'> ${findlike} <b  id='likes'>${rec.data().p_like}</b> </div> <div class='comment_icon'> <i onclick='showcomment(this)'' class='fa-regular fa-comment'></i>  <b id='comment_counnt'>100</b></div> </div>`
         "<div class=;comment_section'>"
             "<div class='add_comment_section'> <img id='comment_dp' src='' ><input id='comment_input' placeholder='add a comment..' type='text'> <i id='sending' class='fa-regular fa-paper-plane'></i> <i   class='fa-regular fa-face-smile'></i></div>"
             " <div class='comments_list'>"
                 "<div class='comment_div'> <img  id='cmnt_user_dp' src='' > <div class='cmnt_header'><p id='comment'>Yeah actually that is true,there many trees that have been cutting down we have to grow some trees in free space.</p><div class='replay'><i class='fa-solid fa-reply'></i><span class='replay_s'>replay</span></div></div> </div>"
              "</div>"
         "</div>"


main_view.append(card)

     
    }    
    
    )


// My favourite 
       
         }else {

       

            main_view.innerHTML = ''



            let user_getref = doc(db,'user',usersData)
let user_getData = await getDoc(user_getref)
let fav_arry= user_getData.data().u_favcategory 

            main_view.innerHTML = ''

            for(i in fav_arry){

   

        let post_getref =  collection(db,'post')
       let q = query(post_getref,where('c_name','==',fav_arry[i]))

        let querysap = await getDocs(q)
        
       querysap.forEach(async(rec)=>{
          
        let uid =rec.data().u_id

        let    mul_user_getref = doc(db,'user',uid)
        let   mu_user_getData  =await  getDoc(mul_user_getref)
            // mu_user_getData.data().u_id


            let ref = doc(db,"post",rec.id);
            let postData= await  getDoc(ref)
            let numlike=postData.data().p_like
             let checklike = postData.data().liked_person
        console.log(checklike);
         let checked = checklike.includes(usersData)
        console.log(checked);
         let findlike 

        if(checked==true){
            findlike=  " <i id='check_like' style='color:blue;'  class='fa-regular fa-thumbs-up'></i> "

        }else{
            findlike=  " <i id='check_like'   class='fa-regular fa-thumbs-up'></i> "
       
        }

    




    let card = document.createElement('div')
        card.className = 'post_view'
        card.id=rec.id
        card.innerHTML = 
       ` <div class='post_head' > <img id='user_dp' src='${ mu_user_getData.data().u_dp}'> <h4>${mu_user_getData.data().u_name}</h4></div>`+
        `<div class='description'><p id='post_desc'>'${rec.data().p_desc}'</p> </div>`+
        
      ` <div class='post_div'><img id='post' src='${rec.data().p_link}'></div>`+
       ` <div class='social_section'><div class='like_div'>${findlike} <b  id='likes'>${rec.data().p_like}</b> </div> <div class='comment_icon'> <i  class='fa-regular fa-comment'></i>  <b id='comment_counnt'>${rec.data().p_comment.length-1}</b></div> </div>`
        "<div class=;comment_section'>"
            "<div class='add_comment_section'> <img id='comment_dp' src='' ><input onkeyup='sendshow(this)' id='comment_input' placeholder='add a comment..' type='text'> <i id='sending' class='fa-regular fa-paper-plane'></i> <i   class='fa-regular fa-face-smile'></i></div>"
            " <div class='comments_list'>"
                "<div class='comment_div'> <img  id='cmnt_user_dp' src='' > <div class='cmnt_header'><p id='comment'>Yeah actually that is true,there many trees that have been cutting down we have to grow some trees in free space.</p><div class='replay'><i class='fa-solid fa-reply'></i><span class='replay_s'>replay</span></div></div> </div>"
             "</div>"
        "</div>"
    

main_view.append(card)
        
        // })

    // }

//    async function category_selected(element){
       
//           let post_getref =  collection(db,'post')
//        let q = query(post_getref,where('c_name','==',element.innerText))
       
//         let querysap = await getDocs(q)
        
//        querysap.forEach(async(rec)=>{
          
//         let uid =rec.data().u_id

//         let    mul_user_getref = doc(db,'user',uid)
//         let   mu_user_getData  =await  getDoc(mul_user_getref)
//             // mu_user_getData.data().u_id

//     let card = document.createElement('div')
//         card.className = 'post_view'

//         card.innerHTML = 
//        ` <div class='post_head'> <img id='user_dp' src='${ mu_user_getData.data().u_dp}'> <h4>'${mu_user_getData.data().u_name}'</h4></div>`+
//         `<div class='description'><p id='post_desc'>'${rec.data().u_desc}'</p> </div>`+
        
//        ` <div class='post_div'><img id='post' src='${rec.data().p_link}'></div>`+
//        ` <div class='social_section'><div class='like_div'> <i onclick='uplike(this)' id='check_like'  class='fa-regular fa-thumbs-up'></i>  <b  id='likes'>0</b> </div> <div class='comment_icon'> <i onclick='showcomment(this)'' class='fa-regular fa-comment'></i>  <b id='comment_counnt'>100</b></div> </div>`
//         "<div class=;comment_section'>"
//             "<div class='add_comment_section'> <img id='comment_dp' src='' ><input onkeyup='sendshow(this)' id='comment_input' placeholder='add a comment..' type='text'> <i id='sending' class='fa-regular fa-paper-plane'></i> <i   class='fa-regular fa-face-smile'></i></div>"
//             " <div class='comments_list'>"
//                 "<div class='comment_div'> <img  id='cmnt_user_dp' src='' > <div class='cmnt_header'><p id='comment'>Yeah actually that is true,there many trees that have been cutting down we have to grow some trees in free space.</p><div class='replay'><i class='fa-solid fa-reply'></i><span class='replay_s'>replay</span></div></div> </div>"
//              "</div>"
//         "</div>"
    

// main_view.append(card)


    }





       )}





}
setInterval(3000,letsget())

<<<<<<< HEAD
function removeItemAll(arr, value) {
    var i = 0;
    while (i < arr.length) {
      if (arr[i] === value) {
        arr.splice(i, 1);
      } else {
        ++i;
      }
    }
    return arr;
  }
category.forEach((x,category)=>{
    x.classList.add("cat")
    button2.classList.remove("col2")
    button2.classList.add("col4")
    x.addEventListener("click",()=>{
        if(fav_arry.includes(x.innerText)) {
            // x.classList.remove("box")
            // x.classList.add("cat")
            x.style.boxShadow = "none";
            // removeItemAll(arr,x)
            // removeItemAll(arr2,x.innerText)
            removeItemAll(fav_arry,x.innerText);

         /////update array/////////////////////////////
         let ref = doc(db,"user",usersData);

         updateDoc(
           ref, {
         
             u_favcategory:fav_arry
         
           })
        //  ).then(()=>{
        //    alert("Updated Successfully")
        //  }).catch((e)=>{console.log(e);})
         
         
        //  button.setAttribute("href","HomePage.html")
=======
}

;

//Likes  ............................................................................

let like
let like_num

 function letsget(){

 like=document.querySelectorAll("#check_like")

 like_num=document.querySelector("#likes")

 like.forEach((x)=>{
    console.log(x);
   
    x.addEventListener("click", function(){updatelike(this)})})
}
>>>>>>> 4139c67c2a0d1a7165965aafebd318307a3f710c




<<<<<<< HEAD
            
=======


async function updatelike(x){

 



    let p_id =x.parentElement.parentElement.parentElement.id
    
    console.log(p_id);
    let ref = doc(db,"post",p_id);

   let postData= await  getDoc(ref)
      let numlike=postData.data().p_like
       let checklike = postData.data().liked_person
console.log(typeof(checklike));
   let checked = checklike.includes(usersData)

   
    

    
    if(x.style.color!= 'blue' && !checked){
        x.style.color= 'blue';   
        let checklike = postData.data().liked_person
        let pushing = checklike.push(usersData)
        
        let new_liked_person = checklike
        updateDoc(
            ref, {
             p_like:++numlike,
             liked_person:new_liked_person

            }
          ).then(async ()=>{
            let newlike = await  getDoc(ref)
            x.parentElement.lastElementChild.innerText = newlike.data().p_like
        })
    
        
>>>>>>> 4139c67c2a0d1a7165965aafebd318307a3f710c
        }

<<<<<<< HEAD
        console.log(fav_arry);
    }

    })
})
button.addEventListener("click",(event)=>{
    let fav_arry_length=fav_arry.length
    console.log(fav_arry);
    if (fav_arry_length>=3) {
        // button2.classList.remove("col2")
        // button2.classList.add("col4")

//------------------------Update--------------------        
let ref = doc(db,"user",usersData);

updateDoc(
  ref, {

    u_favcategory:fav_arry

  }
).then(()=>{
  alert("Updated Successfully")
   location.replace("HomePage.html")
}).catch((e)=>{console.log(e);})



// 
    }
    else{
        console.log("no");
    }
    
   


})


=======
        
    else{x.style.color= 'black'  

    let checklike = postData.data().liked_person
    let index = checklike.indexOf(usersData)
         checklike.splice(index,1)
         let new_liked_person = checklike

         

    updateDoc(

        ref, {
         p_like:--numlike,
         liked_person:new_liked_person
        }
      ).then(async ()=>{
        let newlike = await getDoc(ref)
        x.parentElement.lastElementChild.innerText = newlike.data().p_like
  

    }
)

       
}

}  
>>>>>>> 4139c67c2a0d1a7165965aafebd318307a3f710c
      


///.............................................. Trending Views.........................

let post_ref = collection(db,'post')
let most_like = query(post_ref, orderBy("p_like"), limit(10));
let res = await getDocs(most_like)
res.forEach((rec)=>{console.log(rec.data());})  





///change_password////////////////////////
//  let change_pass=document.getElementById("change_pass");

//  change_pass.addEventListener("click",()=>{
//     console.log("hiii");

<<<<<<< HEAD






/*//////////////////// Editi  Catgeory page /////////////////////////////////*/

let container1= document.querySelector(".container1")
 
let navbar_div=document.getElementById("navbar_div");

 let Category_div=document.querySelector(".Category_div");

 let editi_catgeory=document.querySelector("#editi_catgeory");
 editi_catgeory.addEventListener("click",()=>{
    

    trending_views.style.display="none";
//    navbar_div.classList.add("navbar_div");
   container1.classList.add("block");
document.querySelector(".categories_nav").style.opacity = "0.2";

document.querySelector("header").style.opacity = "0.2";



   let editCategory = document.querySelectorAll("#text");
   let j= 0
   let k= 0
   
//  let parent=editCategory.parentElement;
//  console.log(parent);

      for(k in fav_arry){
        for(j in  editCategory){
            if( editCategory[j].innerText == fav_arry[k]){
                // parent.classList.add("box");

                editCategory[j].parentElement.style.boxShadow = "0px 0px 2px 2px #6452D0";

            
              }
        }
      }



 
   



 })


/*Logout  pagess*/

 let logout=document.querySelector("#logout");

  
logout.addEventListener("click",()=>{

  localStorage.removeItem("usersData");
  location.replace("index.html");




})
=======
//  });
>>>>>>> 4139c67c2a0d1a7165965aafebd318307a3f710c
