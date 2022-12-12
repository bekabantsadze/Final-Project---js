const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)

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

let slides = document.getElementsByClassName("slider__slide");
let navlinks = document.getElementsByClassName("slider__navlink");
let currentSlide = 0;

document.getElementById("nav-button--next").addEventListener("click", () => {
    changeSlide(currentSlide + 1)
});
document.getElementById("nav-button--prev").addEventListener("click", () => {
    changeSlide(currentSlide - 1)
});

function changeSlide(moveTo) {
    if (moveTo >= slides.length) {moveTo = 0;}
    if (moveTo < 0) {moveTo = slides.length - 1;}
    
    slides[currentSlide].classList.toggle("active");
    navlinks[currentSlide].classList.toggle("active");
    slides[moveTo].classList.toggle("active");
    navlinks[moveTo].classList.toggle("active");
    
    currentSlide = moveTo;
}

document.querySelectorAll('.slider__navlink').forEach((bullet, bulletIndex) => {
    bullet.addEventListener('click', () => {
        if (currentSlide !== bulletIndex) {
            changeSlide(bulletIndex);
        }
    })
})

// -------

let button = document.getElementById("button");

button.addEventListener('mousemove', (e) => {
    x = e.offsetX;
    y = e.offsetY;
    button.style.setProperty('--mouse-x', x + "px");
    button.style.setProperty('--mouse-y', y + "px");
});






let currentPages = 1;
let totalPages ;


function getUsersPages(currentPages) {
    fetch("https://reqres.in/api/users?page=" + currentPages, {
        method:"GET", 
    })
    .then(function(responseText){
        if (responseText.status !== 200) {
            throw responseText.status;
        }

        return responseText.json();
    })

    .then(function(responseJS){
        let ulList = document.createElement("ul");
        ulList.classList.add('ul-list');
        ulList.setAttribute('id','ul-list')
        const fragment =new DocumentFragment();

        responseJS.data.forEach(x => {
            let list = document.createElement('li');
            let image = document.createElement('img');
            image.src = x.avatar;
            ulList.appendChild(image);

            list.textContent = `${x.first_name} ${x.last_name}`;
            fragment.appendChild(list);
        })
        ulList.appendChild(fragment);
        document.getElementById("userinfomation").innerHTML="";
        document.getElementById("userinfomation").appendChild(fragment);
        document.getElementById("userinfomation").appendChild(ulList);
        totalPages = responseJS.total_pages;
    })
    
    .catch(function(error){
        if(error == 404){
            let paragraph =document.createElement('p') ;
            paragraph.textContent='Page not Found!';

            document.getElementById('userinfo').appendChild(paragraph);
        }
        if (error == 505) {
            let paragraph =document.createElement('p') ;
            paragraph.textContent='Page not Found!';

            document.getElementById('userinfo').appendChild(paragraph);
        }


    });
}

document.getElementById('next').addEventListener('click', function(){
    
    if (currentPages == totalPages) {
        return;
   }
    currentPages+=1;
    getUsersPages(currentPages);
});

document.getElementById('previous').addEventListener('click' , function(){
    if (currentPages == 1) {
        return;
    }
    currentPages-=1;
    getUsersPages(currentPages);
})

getUsersPages(currentPages);
