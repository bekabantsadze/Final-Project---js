 let navBar = document.getElementById('navigation');
 let burgerBar = document.getElementById('togglebar');

 
 burgerBar.addEventListener('click', function(){
     navBar.classList.toggle('active');
 })


 let Name = document.getElementById("Name")
 let mail = document.getElementById("mail")
 let massage = document.getElementById("massage")
 let phone = document.getElementById("phone")
 let submit = document.getElementById("submit")


 Name.addEventListener("change", () =>{
   console.log(Name.value)
 } )

 submit.addEventListener("click", () => {
   if(Name.value.length < 1 ){
       alert("please enter name")
   }
   if(mail.value.length < 1 ){
    alert("please enter mail")
}
if(phone.value.length < 1 ){
    alert("please enter phone numbers")
}
   if(massage.value.length < 1 ){
    alert("please enter massage")}
   })
   if( Name.value.length > 0 && mail.value.length >0 && massage.value.length > 0 ){
    localStorage.setItem("Name", Name.value);
    localStorage.setItem("mail", mail.value);
    localStorage.setItem("phone", phone.value);
    localStorage.setItem("massage", massage.value);
}



let target = document.querySelector("footer");

let scrollToTopBtn = document.querySelector(".scrollToTopBtn");
let rootElement = document.documentElement;
function callback(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      scrollToTopBtn.classList.add("showBtn");
    } else {
      scrollToTopBtn.classList.remove("showBtn");
    }
  });
}
function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);
let observer = new IntersectionObserver(callback);
observer.observe(target);


// -----acordion----
let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
// ------slider------
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// -------

let button = document.getElementById("button");

button.addEventListener('mousemove', (e) => {
    x = e.offsetX;
    y = e.offsetY;
    button.style.setProperty('--mouse-x', x + "px");
    button.style.setProperty('--mouse-y', y + "px");
});