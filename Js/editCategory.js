let category=document.querySelectorAll(".category1")
let button=document.getElementById("next_page")
let button2=document.querySelector(".btn")
let span=document.getElementById("span")
let count=0
let arr=[]
let arr2=[]
// console.log(category);
span.classList.add("none")
button2.classList.add("col1")

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
    x.addEventListener("click",()=>{
        if(arr.includes(x)) {
            x.classList.remove("box")
            x.classList.add("cat")
            count=count-1
            removeItemAll(arr,x)
            removeItemAll(arr2,x.innerText)
            // console.log(arr);  
            console.log(arr2);
            if (count<3) {
                button2.classList.remove("col2")
                button2.classList.add("col1")
                button2.addEventListener("mouseover",()=>{
                    button2.classList.remove("col3")
                })
            }
        }
       else if(!(arr.includes(x))) {
        x.classList.remove("cat")
        x.classList.add("box")
        count=count+1
        arr.push(x)
        arr2.push(x.innerText)
        // console.log(arr);
        console.log(arr2);
        // console.log(count); 
        if (count>=3) {
            button2.classList.remove("col1")
            button2.classList.add("col2")
            button2.addEventListener("mouseover",()=>{
                button2.classList.add("col3")
            })
        }     
       }

    })
})
button.addEventListener("click",(event)=>{
    if (count<3) {
        event.preventDefault()  
        span.classList.remove("none")
        span.classList.add("flex")
        setTimeout(() => {
          span.classList.remove("flex")
          span.classList.add("none")
          },1500)
    }
    else{
        button2.classList.remove("col2")
        button2.classList.add("col4")

//SET Fav Ctegory...

setDoc(doc(db,"user",`u_id-${id}`), {
  u_name: username.value,
  u_email:email.value,
  u_password:pass1.value,   
  u_favcategory:arr2
})
localStorage.setItem("usersData",JSON.stringify(`u_id-${id}`))
alert('UserAdded')



 button.setAttribute("href","HomePage.html")

    }})


      

   let editCategory = document.querySelectorAll('.cat_text2')
  let i= 0
   for(i in  editCategory){
  if(  editCategory[i].innerText  == 'crime'){
    editCategory[i].style.display = 'none'

  }
   }