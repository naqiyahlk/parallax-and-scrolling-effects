// parallax js
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene,{
	relativeInput: true,

});
$(document).ready(function() {
	$('#fullpage').fullpage({
		navigation: true,
		anchors:['parallax', 'focalworks','work','where'],
		slidesNavigation: true,
		scrollingSpeed: 1000,

     });

});

function myFunction(x) {
	// if((".slide").hasClass("slideUp")){
	// 	$(".slide").removeClass("slideUp");
	// 	$(".slide").removeClass("display");
	// }
	x.classList.toggle("change");
	if (document.querySelector('.slide').classList.contains('slideUp')){
		document.querySelector('.slide').classList.remove("slideUp");
		document.querySelector('.slide').classList.remove('display');
		document.querySelector('.slide').classList.remove('w3-animate-opacity');
		document.querySelector('.slide').classList.remove('slidedown');
	
	};
    
    document.querySelector(".slide").classList.toggle("hide");
    document.querySelector(".slide").classList.toggle("display");
    document.querySelector(".slide").classList.toggle("w3-animate-opacity");
    document.querySelector(".slide").classList.toggle("slidedown");
    document.querySelector(".menu-icon").classList.add("menu-open");
 }   // document.querySelector(".bar2").classList.toggle("change");
    // document.querySelector(".bar3").classList.toggle("change");

$(".menu-open").click(function(){
	$(".slide").addClass('hide');
});

$(".menu-link").click(function(){
	$(".slide").removeClass("display");
	$(".slide").addClass("hide");
	$(".slide").addClass("slideUp");
	$(".menu-icon").removeClass("change");
});

