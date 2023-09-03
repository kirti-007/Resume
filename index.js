let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 1200); 
} 

let container = document.querySelector(".container");
function mode(){
  container.classList.toggle("lightmode");
}

// function change(){
//   var img = document.getElementById("img").src
//   if(img){
//     document.getElementById("img").src = 'moon.jpg'
//   } else if(!img){
//     document.getElementById("img").src = 'sun.png'
//     alert(img)
//   }
// }