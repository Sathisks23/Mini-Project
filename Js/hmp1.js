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

let up=  document.getElementById('profile')
up.src=user_getData.data().u_dp
let first = fav_arry[0]


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





category_selected(first)



async function category_selected(element){

    main_view.innerHTML = ''

  
let post_getref =  collection(db,'post')
let q
try{q = query(post_getref,where('c_name','==',element.innerText))}catch{ q = query(post_getref,where('c_name','==',element)) }
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
     card.id=rec.id

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
    ` <div class='post_head' > <img id='user_dp' src='${ mu_user_getData.data().u_dp}'> <h4>${mu_user_getData.data().u_name}</h4></div>`+
     `<div class='description'><b>${rec.data().p_title}</b><p id='post_desc'>${rec.data().p_desc}</p> </div>`+
     
    ` <div class='post_div'><img id='post' src='${rec.data().p_link}'></div>`+
    ` <div class='social_section'><div class='like_div'> ${findlike} <b  id='likes'>${rec.data().p_like}</b> </div> <div class='comment_icon'> <i onclick='showcomment(this)'' class='fa-regular fa-comment'></i>  <b id='comment_counnt'>0</b></div> </div>`
     "<div class=;comment_section'>"
         "<div class='add_comment_section'> <img id='comment_dp' src='' ><input id='comment_input' placeholder='add a comment..' type='text'> <i id='sending' class='fa-regular fa-paper-plane'></i> <i   class='fa-regular fa-face-smile'></i></div>"
         " <div class='comments_list'>"
             "<div class='comment_div'> <img  id='cmnt_user_dp' src='' > <div class='cmnt_header'><p id='comment'>Yeah actually that is true,there many trees that have been cutting down we have to grow some trees in free space.</p><div class='replay'><i class='fa-solid fa-reply'></i><span class='replay_s'>replay</span></div></div> </div>"
          "</div>"
     "</div>"


main_view.append(card)



setTimeout(1500,letsget())

 
}    

)


  

}






//-----------------------------------Storing elemenent


function letsget(){

    let like=document.querySelectorAll("#check_like")
let like_num=document.querySelector("#likes")

console.log(like);


like.forEach((x)=>{
    console.log(x);
   
    x.addEventListener("click", function(){updatelike(this)})})

    let see_more = document.querySelectorAll('#see_more')
    see_more.forEach(item=>{
        item.addEventListener('click', function(){showmore(this)})
    })

}




//for see more ...

function showmore(mm){
    if(  mm.parentElement.firstElementChild.id!='see_more' &&  mm.parentElement.lastElementChild.innerText=='See More..' ){
        mm.parentElement.firstElementChild.style.display = 'block';
        mm.innerText = 'See Less..'
    }else if( mm.parentElement.lastElementChild.innerText=='See Less..'){ 
        mm.parentElement.firstElementChild.style.display = 'none';
        mm.innerText = 'See More..'
    }

}





/////-------------likes ----------------------------------------------------------------------------


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
    
        
        }

        
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
      
///.............................................. Trending Views.........................

let trend_post_ref = collection(db,'post')
let most_like = query(trend_post_ref, orderBy("p_like",'desc'), limit(1));
let res = await getDocs(most_like)
let trend_div = document.querySelector('.trending_views')

res.forEach((rec)=>{
    console.log(rec.data());

   let card = document.createElement('div')
      card.className = 'trend_post_view'
let p
      if(rec.data().p_desc.length>=100){ 
        let string1 =  rec.data().p_desc.slice(0,rec.data().p_desc.length/2)
        let string2 =  rec.data().p_desc.slice(rec.data().p_desc.length/2)
        p =` <p id="trend_description">${string1}<span id='more'>${string2}</span> <span id="see_more">See More..</span></p> `
      }else{
        p= ` <p id="trend_description">${rec.data().p_desc}</p> `
      }

    card.innerHTML =` <img id="trend_post" src=${rec.data().p_link} alt=""> ${p}`
    
    
trend_div.append(card)

})  

    







//------------------------------------------------------Edit Category-------------------------------------------

let category=document.querySelectorAll(".category1")
let button=document.getElementById("next_page")
let button2=document.querySelector(".btn")
let span=document.getElementById("span")
let count=0
let arr=[]
let arr2=[]
// console.log(category);
span.classList.add("none")
button2.classList.add("col4")

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
            removeItemAll(fav_arry,x.innerText);
            // console.log(fav_arry);
            console.log(fav_arry.length);
            // removeItemAll(arr,x)


         /////update array/////////////////////////////
         let ref = doc(db,"user",usersData);

         updateDoc(
           ref, {
         
             u_favcategory:fav_arry
         
           })
           if (fav_arry.length==0){
            x.style.boxShadow = "0px 0px 2px 2px #6452D0";
            fav_arry.push(x.innerText);
            alert("select one category")
           }
       
        }
       else if(!(fav_arry.includes(x.innerText))) {
        fav_arry.push(x.innerText);
        // console.log(fav_arry);

        console.log(fav_arry.length);
        x.style.boxShadow = "0px 0px 2px 2px #6452D0";
        let ref = doc(db,"user",usersData);

        updateDoc(
          ref, {
        
            u_favcategory:fav_arry
        
          })
        
   
       
    }

    })
})
button.addEventListener("click",(event)=>{
   event.preventDefault()
    if (fav_arry.length!=0) {
       

//------------------------Update--------------------        
let ref = doc(db,"user",usersData);

updateDoc(
  ref, {

    u_favcategory:fav_arry

  }
).then(()=>{
    location.replace("hmpg.html");
  
}).catch((e)=>{console.log(e);})




    }
    else{
        alert("no");
    }
    })



/*//////////////////// Editi  Catgeory page /////////////////////////////////*/

let container1= document.querySelector(".container1")
 
let navbar_div=document.getElementById("navbar_div");

 let Category_div=document.querySelector(".Category_div");
 

 let editi_catgeory=document.querySelector("#editi_catgeory");
 editi_catgeory.addEventListener("click",()=>{
   

    trending_views.style.display="none";
    main_view.style.display="none";
//    navbar_div.classList.add("navbar_div");
   container1.classList.add("block");
document.querySelector(".categories_nav").style.opacity = "0.2";

document.querySelector("header").style.opacity = "0.2";



   let editCategory = document.querySelectorAll("#text");
   let j= 0
   let k= 0
   


      for(k in fav_arry){
        for(j in  editCategory){
            if( editCategory[j].innerText == fav_arry[k]){
              

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




//------------------------------------------------------------------------ CREATE JS------------------------------------------


// ----------------------------------------------------------Select The Category--------------------------------------------------------------------------------

let category_name
let category_id
let select
// document.addEventListener("DOMContentLoaded", function() {
    let selectButton = document.querySelector('.select');
    let dropCategory = document.querySelector('.drop-category');
    let categoryItems = dropCategory.querySelectorAll('li');

    selectButton.addEventListener('click', function() {
        dropCategory.style.display = (dropCategory.style.display === 'block') ? 'none' : 'block';
    });

    categoryItems.forEach(function(item) {
        
        item.addEventListener('click', function() {
            selectButton.textContent = this.textContent;
            dropCategory.style.display = 'none';
            category_name= this.innerText
            category_id = this.id
            // console.log(category);
        });
    });
// });



// ----------------------------------------------------------Style(Bold,Italic...)-------------------------------------------------------------------------------------

let area = document.getElementById('create');
area.addEventListener('click' ,function(){
    area.focus();
});

let bold = document.getElementById('bold');
let underline = document.getElementById('underline');
let italic = document.getElementById('italic');

bold.addEventListener('click', function() {
  document.execCommand('bold');
});

underline.addEventListener('click', function() {
  document.execCommand('underline');
});

italic.addEventListener('click', function() {
  document.execCommand('italic');
});

// --------------------------------------------------------------Cancel Button-----------------------------------------------------------------------------------

let cancelButton = document.querySelector('.can');
cancelButton.addEventListener('click', function()
 {
    window.location.href = "hmpg.html";
});

//----------------------------------------------------------------Publish Button-----------------------------------------------------------------------------

let publishButton = document.querySelector('.btn');
publishButton.addEventListener('click', function()
 {
    window.location.href = "hmpg.html";
});
// --------------------------------------------------------------Adding Image---------------------------------------------------------------------

// let div = document.querySelector(".create")
// let imageUpload = document.getElementById("img") 

// imageUpload.addEventListener('change', function() {
//     let img = document.createElement("img")
//     let input = this.files[0];
//     let text;
//     if (input) {
//         text = URL.createObjectURL(input);
//         // text  = img.src
//         console.log(text);
//         // console.log(text);
//     }
//     // img.accept =".jpg,.png,.jpeg,.webp"
//     img.src = text; 
//     // img.id = 'p_image'
//     div.prepend(img)
    
// });
let imageUpload = document.getElementById("img");

imageUpload.addEventListener('change', function() {
    let input = this.files[0];
    let text;
    if (input) {
        text = URL.createObjectURL(input);
        let existingImg = document.getElementById("img-src");
        if(existingImg) {
            existingImg.src = text;
        } else {
            console.error("Image element with id 'img-src' not found.");
        }
    }
});


//-------------------------------------------------------------------Adding data in firebase----------------------------------------------------------


let publish =document.getElementById('submit')
    publish.addEventListener('click',create_post)
let title = document.getElementById('lines')
let desc = document.getElementById('create')

//------------------------------------------------------------------------------------------------------------------------------------------------------


  // Import the functions you need from the SDKs you need
//   import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
  import{getStorage,ref as sref,uploadBytesResumable,getDownloadURL} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
 

// Initialize Firebase

let post_ref =collection(db,'post')


// let user_getRef = doc(db, "category", usersData);
// let user_getData1 =  await  getDoc(getRef);




async function create_post(){
    

  let getData = await getDocs(post_ref)
let id = getData.size
console.log(id);
console.log(category_id);

let getRef = doc(db, "category", `ca_id-${category_id}`);
let getData1 =  await  getDoc(getRef);
let p_array = getData1.data().post_id


p_array.push(`p_id-${++id}`)



let usersData=JSON.parse(localStorage.getItem("usersData"))




let pimage = document.getElementById('img').files[0]

let meta_data = {contentype:img.type}
let task = sref(getStorage(),'images'+pimage.name)
let store = uploadBytesResumable(task,pimage,meta_data)
store.then(getDownloadURL(store.snapshot.ref).then((downloadURL)=>{
 
  let post_data = 
  {
    c_name:category_name,
    p_desc:desc.innerText,
    p_title:title.value,
    p_link:downloadURL,
    u_id:usersData,
    p_like:0,
    p_comment:[],
    liked_person:[]
  }

console.log(post_data);

let ca_data =
 {
    ca_id:`ca_id-${category_id}`,
    ca_name:category_name,
    post_id:p_array,
  }

console.log(ca_data);

setDoc(doc(db,'post',`p_id-${++id}`),post_data).then(()=>{alert('Post created')}).catch((error)=>{console.log(error)})
setDoc(doc(db,'category',`ca_id-${category_id}`),ca_data).then(()=>{alert('Category created')}).catch((error)=>{console.log(error)})
        
 }))
  
}
// ----------------------------------------------------------------blurr and popup-----------------------------------------------------------------------

// var openButton = document.getElementById("open");
// console.log(openButton); 

// openButton.addEventListener('click', function() {
//   console.log("Button clicked"); 
//   container.style.display =  'block';
//   mainDiv.classList.toggle('blur');
// });








///////////////////////////////
 let create_btn = document.getElementById("create_btn");
  let create_main_div = document.getElementById("create_main");
  let container = document.getElementsByClassName("container");
  let main_div = document.querySelector(".main_div");

 create_btn.addEventListener("click",()=>{
 
  
  trending_views.style.visibility= "hidden";
//   create_main_div.classList.add("create_main_div");
  document.querySelector(".categories_nav").style.opacity = "0.2";
  document.querySelector("header").style.opacity = "0.2";
  main_div.classList.remove("main_div");
  main_view.style.display="none";
  main_div.classList.add("dispaly_block");


 })
