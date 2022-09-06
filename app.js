let button = document.getElementsByClassName('button');
let random=0;
let string='';
const colors=["#DFFF01","#FFBF01","#FF7F501","#DE3161","#9FE2BE","#40E0D1","#6495EB","#CCCCFE","#CD5C5B"];
document.getElementById("randomcolor").innerHTML="Color : "+colors[0];
document.querySelector(".container").style.backgroundColor=colors[0];
let classrandom=document.querySelector(".container").className;
button[0].addEventListener('click',(e)=>{
random=Math.floor(Math.random()*9);
document.querySelector(".container").style.backgroundColor=colors[random];
document.getElementById("randomcolor").innerHTML="Color : "+colors[random];
})