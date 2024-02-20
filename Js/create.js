"use strict"

// -----------------------------------------------------------------Select The Category--------------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function() {
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
        });
    });
});



// --------------------------------------------------------------------Style(Bold,Italic...)-------------------------------------------------------------------------------------

let btns = document.querySelectorAll('button ')
     btns.forEach(element => {
        element.addEventListener('click', (event) => { 
            console.log(event.target.parentElement.id);
        } )
     });

document.getElementById('bold').addEventListener('click', function() {
    formatText('bold');
});

document.getElementById('underline').addEventListener('click', function() {
    formatText('underline');
});

document.getElementById('italic').addEventListener('click', function() {
    formatText('italic');
});

function formatText(style) {
    let textarea = document.getElementById('create');
    let start = textarea.selectionStart;
    let end = textarea.selectionEnd;
    let selectedText = textarea.value.substring(start, end);
    let newText = textarea.value
    console.log(newText);

    switch (style) {
        case 'bold':
            newText = '<b>' + selectedText + '</b>';
            break;
        case 'underline':
            newText = '<u>' + selectedText + '</u>';
            break;
        case 'italic':
            newText = '<i>' + selectedText + '</i>';
            break;
        default:
            newText = selectedText;
    }

    let textBefore = textarea.value.substring(0, start);
    let textAfter = textarea.value.substring(end, textarea.value.length);
    textarea.value = textBefore + newText + textAfter;
}

// ----------------------------------------------------------------------Cancel Button-----------------------------------------------------------------------------------

let cancelButton = document.querySelector('.can');
cancelButton.addEventListener('click', function()
 {
    window.location.href = "HomePage.html";
});

let div=document.querySelector(".create")
let imageUpload=document.getElementById("img") 

imageUpload.addEventListener('change', function() {
    let img =document.createElement("img")
    let input = this.files[0];
    let text;
    if (input) {
        text = URL.createObjectURL(input);
        // console.log(text);
    }
    img.accept=".jpg,.png,.jpeg,.webp"
    img.src = text; 
    div.prepend(img)
    
});