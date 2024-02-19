"use strict"

// -----------------------------------------------------------------Select The Category--------------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function() 
{
    let selectButton = document.querySelector('.select');
    let dropCategory = document.querySelector('.drop-category');
    selectButton.addEventListener('click', function()
    {
        dropCategory.style.display = (dropCategory.style.display === 'block') ? 'none' : 'block';
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








   









