// JavaScript Document
	var typed = new Typed('.element', {
strings: ["Character Designer.", "Anime Artist.","Costume Concept Artist.","2D Animator."],
typeSpeed:20,
backSpeed:30,
loop:true,
});

$('.timeline-panel').click(function() {
    $('.timeline-body', this).toggle(); // p00f
});

$('.counter').countUp();

  AOS.init();

