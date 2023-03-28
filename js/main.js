'use strict';

// Menu
$(".menu ul li a").click(function () {
    $(".s-h").css("display", "none");
    $($(this).data("target")).css("display", "flex");

    // If its about section
    if ($(this).data("target") == ".about-section") {
        $(".gradient").css("display", "none");
    }
    // if its home-section
    else if ($(this).data("target") == ".home-section") {
        $(".gradient").removeClass("animate-bg");
    }
    else {
        $(".gradient").css("display", "flex");
        $(".gradient").addClass("animate-bg");
    }
});


// homepage btn Refresh vid
$(".logo img").click(function () {
    $(".s-h").css("display", "none");
    $($(this).data("target")).css("display", "flex");
    $('#myVideo').get(0).pause();
    $("#myVideo").get(0).load();
    $('#myVideo').get(0).play();
})

// Work Focused: Slideshow
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
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " active";
}
