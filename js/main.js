'use strict';

// Menu ---------------------------------------------------------------------------------
$(".menu ul li a").click(function () {
    $(".s-h").css("display", "none");
    $($(this).data("target")).css("display", "flex");
    $(".bg-wrap").css("display","flex");
    $(".glass-blob").css("display","block");

    // If its about section
    if ($(this).data("target") == "#about") {
        $(".gradient").css("display", "none");
        $(".about-blob").css("display", "flex");
        $(".about-title-blob").css("display","block");
        $(".work-title-blob").css("display","none");

        $(".glass").addClass("glass-blob");
        $(".glass").removeClass("glass-blob-work");
        $(".contact-blob").css("display", "none");
    }

    // work page
    else if ($(this).data("target") == "#work"){
        $(".about-title-blob").css("display","none");
        $(".work-title-blob").css("display","block");
        $(".glass").removeClass("glass-blob");
        $(".glass").addClass("glass-blob-work");
        $(".gradient").css("display", "flex");
        $(".contact-blob").css("display", "none");
        $(".about-blob").css("display", "none");
    }

    else if($(this).data("target") == "#contact") {
        $(".gradient").css("display", "none");
        $(".contact-blob").css("display", "flex");
        $(".about-blob").css("display", "none");
    }
    $("body").addClass("movingDots");
    $(".gradient").addClass("animate-bg");

});


// homepage btn Refresh vid
$(".logo img").click(function () {
    $(".s-h").css("display", "none");
    $($(this).data("target")).css("display", "flex");
    $('#myVideo').get(0).pause();
    $("#myVideo").get(0).load();
    $('#myVideo').get(0).play();

    $(".bg-wrap").css("display","none");
    $("body").removeClass("movingDots");
    $(".glass-blob-work").css("display","none");
    $(".glass-blob").css("display","none");
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

$(".logo img").hover(
    function () {
        $(".logo p").css("opacity", "1")
    },
    function () {
        $(".logo p").css("opacity", "0")
    }
)

// Work focused

$(".image-work").on("click",function(){
    $("#work").css("display","none");
    $("nav").css("display","none");
    $("#glass").css("display","none");
    $("body").css("backgroundColor","#060606");
    $(".bg-wrap").css("display","none");
    $("#workF").css("display","flex");
    
    switch(this.id) {
        // MUSIC POSTER
        case "music-poster": 
        $("#workF").load("work-pages/posters/music-poster.html"); 
        $.getScript("js/slideshow.js");
        break;
        case "gfnProd": 
        $("#workF").load("work-pages/posters/music-poster.html"); 
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
