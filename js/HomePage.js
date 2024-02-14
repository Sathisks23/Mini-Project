

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




