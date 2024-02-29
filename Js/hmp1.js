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
let usersData=JSON.parse(localStorage.getItem("usersData"))


let user_getref = doc(db,'user',usersData)
let user_getData = await getDoc(user_getref)
let fav_arry= user_getData.data().u_favcategory 

let ul = document.querySelector('.ca_popup')
    

    let i=0
for(i in fav_arry){
    console.log(fav_arry[i]);
   let li= document.createElement('li')
   li.innerText = fav_arry[i]
   ul.append(li)
}




/////////
let a = document.querySelector('.ca_popup').querySelectorAll('li')
      a.forEach((e)=>{
    // e.querySelector('a').classList.toggle('blacktheme')
    e.addEventListener('click',function(){category_selected(this)})
     })


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






async function category_selected(element){

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


setInterval(3000,letsget())
  

}



/////-------------likes ----------------------------------------------------------------------------
let like
let like_num

 function letsget(){

 like=document.querySelectorAll("#check_like")

 like_num=document.querySelector("#likes")

 like.forEach((x)=>{
    console.log(x);
   
    x.addEventListener("click", function(){updatelike(this)})})
}






// async function updatelike(x){

 



//     let p_id =x.parentElement.parentElement.parentElement.id
    
//     console.log(p_id);
//     let ref = doc(db,"post",p_id);

//    let postData= await  getDoc(ref)
//       let numlike=postData.data().p_like
//        let checklike = postData.data().liked_person
// console.log(typeof(checklike));
//    let checked = checklike.includes(usersData)

   
    

    
//     if(x.style.color!= 'blue' && !checked){
//         x.style.color= 'blue';   
//         let checklike = postData.data().liked_person
//         let pushing = checklike.push(usersData)
        
//         let new_liked_person = checklike
//         updateDoc(
//             ref, {
//              p_like:++numlike,
//              liked_person:new_liked_person

//             }
//           ).then(async ()=>{
//             let newlike = await  getDoc(ref)
//             x.parentElement.lastElementChild.innerText = newlike.data().p_like
//         })
    
        
//         }

        
//     else{x.style.color= 'black'  

//     let checklike = postData.data().liked_person
//     let index = checklike.indexOf(usersData)
//          checklike.splice(index,1)
//          let new_liked_person = checklike

         

//     updateDoc(

//         ref, {
//          p_like:--numlike,
//          liked_person:new_liked_person
//         }
//       ).then(async ()=>{
//         let newlike = await getDoc(ref)
//         x.parentElement.lastElementChild.innerText = newlike.data().p_like
  

//     }
// )

       
// }

// }  
      

