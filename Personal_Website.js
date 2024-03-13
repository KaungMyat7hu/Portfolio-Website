const menu = document.querySelector("#menu");
const navbar = document.querySelector(".navbar");
const scrollbar = document.querySelector(".scroll-bar");
const bars = document.querySelectorAll(".bar span");
const about = document.querySelector("#about");
for(var i=0;i<bars.length;i++) {
	bars[i].style.animation = "none";
}

menu.addEventListener("click",()=>{
	menu.classList.toggle("fa-times");
	menu.style.transition = "2s linear";
	navbar.classList.toggle("nav-toggle");
});



window.onscroll =()=>{
	menu.classList.remove("fa-times");
	navbar.classList.remove("nav-toggle");
	scrolling();
	console.log(window.scrollY,window.innerHeight);
	
}


function scrolling (){
const maxHeight = window.document.body.scrollHeight -  window.innerHeight;
const percentage = ((window.scrollY)/maxHeight)*100;
scrollbar.style.width = percentage + "%";

if(percentage>15 && percentage <40){

bars[0].style.animation = "anime1 1s linear forwards";
bars[1].style.animation = "anime2 .8s ease-in forwards"; 
bars[2].style.animation = "anime3 .7s ease-in-out forwards"; 
bars[3].style.animation = "anime4 .4s ease-out forwards"; 
bars[4].style.animation = "anime5 .5s linear forwards"; 
 }
else{
for(var i=0;i<bars.length;i++) {
	bars[i].style.animation = "none";
}

}


}
