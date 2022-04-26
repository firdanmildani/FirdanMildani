var modal = document.getElementById("myModal");

var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

const burger = document.querySelector('.burger');
const navbar = document.querySelector('.navbar-nav');
const navItem = document.querySelectorAll('.nav-item');
const navLinks = document.querySelectorAll('.nav-link');


Array.from(document.querySelectorAll(".portofolio-pics")).forEach(item => {
    item.addEventListener("click", event => {
    modal.style.display = "flex";
    modalImg.src = event.target.src;
    // captionText.innerHTML = document.querySelectorAll(".portofolio-pics").alt;
    });
        
});


var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}

function closeModal(){
  window.addEventListener("click", event => {
    if (event.target !== modalImg) {
      modal.style.display = "none";
    }
  });
}


//Navbar
const navSlide = () => {
  burger.addEventListener('click', () =>{
    navbar.classList.toggle('nav-active');

    navItem.forEach((link, index) =>{
      if(link.style.animation){
        link.style.animation = ''
      } else{
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
      }
    });

  });

}

const navClose = () => {
  for (var i = 0 ; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click' , ()=>{
      navbar.classList.remove('nav-active');

      navItem.forEach((link, index) =>{
        if(link.style.animation){
          link.style.animation = ''
        } else{
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
        }
      });
    }); 
 }
}

//  window.onclick = function(event) {

//   if (event.target == nav) {

//     navbar.classList.remove('nav-active');

//   }
//  }

navSlide();
navClose();



