'use strict';

$(".about-blob").css("display", "none");
$(".contact-blob").css("display", "none");
$(".about-title-blob").css("display","none");
$(".work-title-blob").css("display","none");
$(".contact-title-blob").css("display","none");
$(".glass").css("display","none");

// Menu ---------------------------------------------------------------------------------
$(".menu ul li a").click(function () {
    $(".s-h").css("display", "none");
    $($(this).data("target")).css("display", "flex");
    $(".bg-wrap").css("display","flex");

    // Hide the homepage video
    $("#myVideo").prop("muted", true);
    $("#mute-Btn .fa-volume-xmark").css("display","flex");
    $("#mute-Btn .fa-volume-high").css("display","none");


    $(".about-blob").css("display", "none");
    $(".contact-blob").css("display", "none");
    $(".about-title-blob").css("display","none");
    $(".work-title-blob").css("display","none");
    $(".contact-title-blob").css("display","none");
    $("body").addClass("movingDots");
    $(".gradient").addClass("animate-bg");



    // Highlight section selected
    if (!$(this).hasClass('clicked')) {
        // If this link is not already highlighted, highlight it and make
        // sure other links of class .link are not highlighted.
        $('.clicked').removeClass('clicked');
        $(this).addClass('clicked');
    }

    // If its about section
    if ($(this).data("target") == "#about") {
        $(".gradient").css("display", "none");
        $(".glass-blob-work").css("display","none");
        $(".glass-blob-contact").css("display","none");

        $(".glass-blob").css("display","block");
        $(".glass-blob").css("display","block");

        $(".about-blob").css("display", "flex");
        $(".about-title-blob").css("display","block");
    }

    // work page
    else if ($(this).data("target") == "#work"){
        $(".glass-blob").css("display","none");
        $(".glass-blob-contact").css("display","none");

        $(".glass-blob-work").css("display","block");
        $(".about-blob").css("display", "flex");
        $(".work-title-blob").css("display","block");
        $(".gradient").css("display", "flex");
    }

    // contact page
    else if($(this).data("target") == "#contact") {
        $(".glass-blob").css("display","none");
        $(".glass-blob-work").css("display","none");
        $(".gradient").css("display", "none");

        $(".glass-blob-contact").css("display","block");
        $(".contact-blob").css("display", "flex");
        $(".contact-title-blob").css("display","flex");
    }
});

// homepage btn Refresh vid
$(".logo img").click(function () {
    $(".s-h").css("display", "none");
    $($(this).data("target")).css("display", "flex");

    // Reload video
    $('#myVideo').get(0).pause();
    $("#myVideo").get(0).load();
    $('#myVideo').get(0).play();

    $(".bg-wrap").css("display","none");
    $("body").removeClass("movingDots");
    $(".glass-blob-work").css("display","none");
    $(".glass-blob").css("display","none");
    $('.clicked').removeClass('clicked');
})

// COPY TO CLIPBOARD 
let emailCopy = document.getElementsByClassName("fa-envelope");
emailCopy[0].addEventListener("click", copyClipboard)

function copyClipboard() {
    // Get the text field
    var copyText = "stphnie.dang@gmail.com"
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText);
}

// Shows name
$(".logo img").hover(
    function () {
        $(".logo p").css("opacity", "1")
    },
    function () {
        $(".logo p").css("opacity", "0")
    }
)

// Mute bg
$("#mute-Btn").on("click",function(){
    $("#mute-Btn i").toggle();
    $("#myVideo").prop("muted", !$("#myVideo").prop("muted"));
});

// Work focused
$(".image-work").on("click",function(){
    $("#work").css("display","none");
    $("nav").css("display","none");
    $(".glass").css("display","none");
    $("body").css("backgroundColor","#060606");
    $(".bg-wrap").css("display","none");
    $("#workF").css("display","flex");
    
    switch(this.id) {
        // MUSIC POSTER
        case "music-poster": 
        $("#workF").load("work-pages/posters.html .musicPosters .column"); 
        $.getScript("js/slideshow.js");
        break;
        case "gfnProd": 
        $("#workF").load("work-pages/posters.html .gfnProd .column"); 
        $.getScript("js/slideshow.js");
        break;
    }

});

// Contact form
// var frmvalidator = new Validator(".contactform");
// frmvalidator.addValidation("name", "req", "Please provide your name");
// frmvalidator.addValidation("email", "req", "Please provide your email");
// frmvalidator.addValidation("email", "email", "Please enter a valid email address");


$('form').submit(function (e) {
    e.preventDefault();

    // do ajax now
    console.log("submitted");
});
