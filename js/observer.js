const nav = document.querySelector("nav");
const sectionOne = document.querySelector(".site-hero");


const sectionOneOptions = {
  rootMargin: "-100px 0px 0px 0px"
};


const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      nav.classList.add("nav-scrolled");
    } else {
      nav.classList.remove("nav-scrolled");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);


//Portfolio Animation
window.addEventListener('scroll',()=>{
  let content = document.querySelector('.portofolio');
  let contentPosition = content.getBoundingClientRect().top;
  let screenPosition = window.innerHeight /2;
  if (contentPosition < screenPosition){
    content.classList.add('portfolio-animation');
  }
});