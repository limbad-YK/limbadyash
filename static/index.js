/* ------------------ active navigation bar ------*/
/*
var header = document.getElementsByid('block');

var btns = header.getElementsByClassName("nav");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}*/


/* -----------------slideshow---------------------*/
var slideIndex = 0;

/* 
  -------------- Automatic slideshow ----------------
*/
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}

/*
  ----------------- manual slideshow ----------------
*/

showSlide(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlide(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlide(slideIndex = n);
}

function showSlide(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
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

/*-------------- Progress bar ------------*/


/* ------------- navigation tab ----------------------*/


/* ------------- main sender function ---------*/

function sendMail(){
  var senderName=document.getElementById('m1').value;
  var sederEmail=document.getElementById('m2').value;
  var msg=document.getElementById('m3').value;

  Email.send({
    Host:"smtp.gmail.com",
    Username:"gdev4604@gmail.com",
    Password:"DevBetaAc@5566;",
    To:"yashlimbad2017@gmail.com",
    From:"gdev4604@gmail.com",
    Subject:"Ping from Portfolio",
    Body:`Hello Yash\n, ${senderName} : ${sederEmail} has just ping you this message ...
    
    ${msg}`
  })
  .then(function (message){
    alert("mail sent successfully")
  });
}
