'use strict';

// Menu
$(".menu ul li a").click(function () {
    $(".s-h").css("display", "none");
    $($(this).data("target")).css("display", "flex");
    $("body").addClass("movingDots");
    

    // If its about section
    if ($(this).data("target") == ".about-section") {
        $(".gradient").css("display", "none");

        $(".about-title-blob").css("display","block");
        $(".work-title-blob").css("display","none");

        $(".glass").addClass("glass-blob");
        $(".glass").removeClass("glass-blob-work");
    }
    else if ($(this).data("target") == ".work-section"){
        $(".about-title-blob").css("display","none");
        $(".work-title-blob").css("display","block");
        $(".glass").removeClass("glass-blob");
        $(".glass").addClass("glass-blob-work");
    }
    // if its home-section
    else if ($(this).data("target") == ".home-section") {

        $(".gradient").removeClass("animate-bg");

        $("body").removeClass("movingDots");
        $("body").css("backgroundImage","none");

        $("#glass").css("display","none");

    }
    
    else {
        $(".gradient").css("display", "flex");
        $(".gradient").addClass("animate-bg");

        $(".about-title-blob").css("display","none");
        $(".about-title-blob").css("display","none");



    }
});


$("nav").css("display","none");

// COPY TO CLIPBOARD
let emailCopy = document.getElementsByClassName("fa-envelope");
emailCopy[0].addEventListener("click", copyClipboard)

function copyClipboard() {
    // Get the text field
    var copyText = "stphnie.dang@gmail.com"
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText);
}

// homepage btn Refresh vid
$(".logo img").click(function () {
    $(".s-h").css("display", "none");
    $($(this).data("target")).css("display", "flex");
    $('#myVideo').get(0).pause();
    $("#myVideo").get(0).load();
    $('#myVideo').get(0).play();
})


$(".logo img").hover(
    function () {
        $(".logo p").css("opacity", "1")
    },
    function () {
        $(".logo p").css("opacity", "0")
    }
)

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


// Contact form
var frmvalidator = new Validator(".contactform");
frmvalidator.addValidation("name", "req", "Please provide your name");
frmvalidator.addValidation("email", "req", "Please provide your email");
frmvalidator.addValidation("email", "email", "Please enter a valid email address");


$('form').submit(function (e) {
    e.preventDefault();

    // do ajax now
    console.log("submitted");
});