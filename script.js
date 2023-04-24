
/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0px";
  } else {
    document.getElementById("navbar").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
}
// DOMContentLoaded  end

 // Get all anchor tags on the page
const links = document.querySelectorAll('a');

// Loop through each link and set the target attribute to "_blank"
links.forEach(link => {
  link.setAttribute('target', '_blank');
});


// autoplay slider

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Auto Slide
var slideIndexAuto = 0; // Rename the variable to slideIndexAuto to avoid conflict
showSlidesAuto();

function showSlidesAuto() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndexAuto++;
  if (slideIndexAuto > slides.length) { slideIndexAuto = 1 }
  slides[slideIndexAuto - 1].style.display = "block";
  setTimeout(showSlidesAuto, 2500); // Change image every 2 seconds
}

// slider javascript

