var slideIndex = 1;
var timer;
showSlides(slideIndex);
timer = setTimeout(carousel, 5000);

// Next/previous controls
function plusSlides(n) {
    // Clearing timeout each time user clicks an arrow, left or right
    clearTimeout(timer);
    showSlides(slideIndex += n);
    // Restarting carousel and timeout after user is done viewing a certain image
    timer = setTimeout(carousel, 5000);
}

// Thumbnail image controls
function currentSlide(n) {
    // Clearing timeout each time user clicks an arrow, left or right
    clearTimeout(timer);
    showSlides(slideIndex = n);
    // Restarting carousel and timeout after user is done viewing a certain image
    timer = setTimeout(carousel, 5000);
}

function showSlides(n) {
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

function carousel() {
    plusSlides(+1);
}
