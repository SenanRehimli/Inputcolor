let input =document.querySelector('input');
let text=document.querySelector('p');
input.addEventListener('keypress' , (e) =>{
    if(e.key==="Enter"){
    text.style.color = input.value;
    text.style.fontSize = input.value;
    }
})

