let button = document.getElementsByClassName('button');
let random=0;
let string='';
const colors=["red","blue","green","brown","yellow","purple","orange","indigo","violet"];
document.getElementById("randomcolor").innerHTML="Color : "+colors[0];
document.querySelector(".container").style.backgroundColor=colors[0];
let classrandom=document.querySelector(".container").className;
button[0].addEventListener('click',(e)=>{
random=Math.floor(Math.random()*9);
document.querySelector(".container").style.backgroundColor=colors[random];
document.getElementById("randomcolor").innerHTML="Color : "+colors[random];
})