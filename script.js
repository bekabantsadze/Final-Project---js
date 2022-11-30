 let navBar = document.getElementById('navigation');
 let burgerBar = document.getElementById('togglebar');

 
 burgerBar.addEventListener('click', function(){
     navBar.classList.toggle('active');
 })