

//for see more ...
let see_more = document.querySelectorAll('#see_more')
    see_more.forEach(item=>{
        item.addEventListener('click',function(){showmore(this)})
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



    
//Theme  Change

function changetheme(){
    let img =document.getElementById('logo')
    let b=img.src.slice(22)
    console.log(b);
      document.body.classList.toggle('blacktheme')
      document.querySelector('header').classList.toggle('blacktheme')
      document.querySelector('.search').classList.toggle('darkinput')
     document.getElementById('theme').classList.toggle('blacktheme')
     document.getElementById('homebtn').classList.toggle('homeclr')
      
 let a = document.querySelector('.ca_popup').querySelectorAll('li')
      a.forEach((e)=>{
    e.querySelector('a').classList.toggle('blacktheme')
     })
    document.querySelector('.logo_div').classList.toggle('black')

        if(b=='Assests/logo.png'){
            img.src='Assests/darklogo.png'
            document.getElementById('trending_log').src='Assests/darktrendlogo.png'
            document.getElementById('themebtn').src ='Assests/darkthemelogo.png'

         }else{
            img.src='Assests/logo.png'
            document.getElementById('trending_log').src='Assests/trending_log.png'
            document.querySelector('#themebtn').src ='Assests/themechange.png'
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
let like_count = 0
let like=document.getElementById('likes')
let check  = document.querySelector('#check_like')
  function uplike(btn){
    
   
 if(btn.style.color!= 'blue'){btn.style.color= 'blue';  like_count+=1;  btn.parentElement.lastElementChild.innerText = like_count}
 else{btn.style.color= 'black' ;like_count-=1 ;btn.parentElement.lastElementChild.innerText = like_count}
    
  }


