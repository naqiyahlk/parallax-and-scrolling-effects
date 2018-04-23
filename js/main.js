// jQuery(document).ready(function($){
//  //For Current title
// 	// Init ScrollMagic
// 	var controller = new ScrollMagic.Controller();
// 	var container = document.getElementsByClassName("container1");
	
// 	// var slideUpc = new TimelineMax()
// 	//  slideUpc.to(".title-c", 5, {opacity: 0, ease:Power2.easeOut, y: -100})

// 	 //.add(TweenMax.to(container,0.5, {}))
	
// 	 //.to(".description-c", 10, {opacity: 0, ease:SlowMo.ease, y: -100})
// 	 //.to(".picture-c", 10, {opacity: 0, ease:SlowMo.ease, y: -100});
	

// 	var ourScene = new ScrollMagic.Scene({
// 		triggerElement: '.title-c',
// 		duration: 100,
// 		triggerHook: 0.2,
// 		reverse: true,
		
// 	})
// 	.addIndicators() // this requires a plugin
	
// 	.setClassToggle('.current', 'done')
// 	.addTo(controller)
// 	.setTween(slideUpc)
// 	 ourScene.offset(-150)



// // For Current description 
// // Init ScrollMagic
// var controller1 = new ScrollMagic.Controller();

	
// 		var slideUpd = new TimelineMax()
// 	 slideUpd.to(".description-c", 5, {opacity: 0, ease:Power2.easeOut, y: -100})
	

// 	var ourScene1 = new ScrollMagic.Scene({
// 		triggerElement: '.description-c',
// 		duration: 100,
// 		triggerHook: 0.4,
// 		reverse: true,
		
// 	})
// 	.addIndicators() // this requires a plugin
// 	.setClassToggle('.description-c', 'fade-in')
// 	.setTween(slideUpd)
// 	.addTo(controller)
	
// 	 ourScene.offset(-100)


// // For Current Picture
// // Init ScrollMagic
// var controller2 = new ScrollMagic.Controller();

// 	var slideUpp = new TimelineMax()
// 	 slideUpp.to(".picture-c", 5, {opacity: 0, ease:Power2.easeOut, y: -100}) 
	
	
// 	var ourScene2 = new ScrollMagic.Scene({
// 		triggerElement: '.picture-c',
// 		duration: 100,
// 		triggerHook: 0.5,
// 		reverse: true,
		
// 	})
// 	.addIndicators() // this requires a plugin
// 	.setClassToggle('.picture-c', 'fade-in')
// 	.setTween(slideUpp)
// 	.addTo(controller)
	
// 	 ourScene.offset(100)


// //Entire Container to start slide up for second container


// var controllerhead = new ScrollMagic.Controller();

// var nextslide = new TimelineMax()
//      nextslide.to(".next", 10 ,{ease:SlowMo.easeIn, y: -500})

// var ourScenehead = new ScrollMagic.Scene({
// 		triggerElement: '.Current',
// 		duration: 100,
// 		triggerHook: 0.1,
// 		reverse: true,
	

// 	})
// 	.addIndicators() // this requires a plugin
// 	.setTween(nextslide)
// 	.setPin("li.next")
// 	.addTo(controller);
	
// 	 ourScene.offset(-100)
// });	

// jQuery(document).ready(function($){
//  //For Current title
// 	// Init ScrollMagic
// 	var controller = new ScrollMagic.Controller();
// 	var container = document.getElementsByClassName("container1");

// 	var slideUp = new TimelineMax()
// 	 slideUp.to(".title-c", 5,{opacity: 0, ease:SlowMo.ease, y: -100} )
// 	 		.to(".description-c", 5,{opacity: 0, ease:SlowMo.ease, y: -100} )
// 	 		.to(".picture-c", 5,{opacity: 0, ease:SlowMo.ease, y: -100} )
// 	 		.to(".next", 5 , {ease:Power2.easeIn, y: -500});

// 	 //.add(TweenMax.to(container,0.5, {}))
	
// 	 //.to(".description-c", 10, {opacity: 0, ease:SlowMo.ease, y: -100})
// 	 //.to(".picture-c", 10, {opacity: 0, ease:SlowMo.ease, y: -100});
	

// 	var ourScene = new ScrollMagic.Scene({
// 		triggerElement: '.current',
// 		duration: 100,
// 		triggerHook: 0.2,
// 		reverse: true,
		
// 	})
// 	.addIndicators() // this requires a plugin
	
// 	.setClassToggle('.current', 'done')
// 	.setTween(slideUp)
// 	.addTo(controller)
// 	 ourScene.offset(-150)

// });
// document.querySelector(".content").addEventListener(" DOMMouseScroll", effect());
// jQuery(document).ready(function($){
// 	console.log("hi");
// 	$(window).on('click', effect());
// });

jQuery(document).ready(function($){
	var container = document.getElementsByClassName("container1");

$('.container1').on('mousewheel', function(event) {
    console.log(event.deltaX, event.deltaY, event.deltaFactor);
});
	//window.addEventListener('scroll',effect);
    var handleScroll = function(evt){
  if (!evt) evt = event;
  var direction = (evt.detail<0 || evt.wheelDelta>0) ? 1 : -1;
  var delta = Math.max(-1, Math.min(1, (evt.wheelDelta || -evt.detail)));
  console.log(direction);
  console.log(delta);
  if( direction === -1)
  {	
  	effect();
  }
  else
  {
  	reverse();
  }// Use the value as you will
};
window.addEventListener('DOMMouseScroll',handleScroll,false); // for Firefox
window.addEventListener('mousewheel',    handleScroll,false); // for everyone else
});
function effect(){
	
	var current = document.querySelector(".container1");
	
	if(!current || typeof current == 'undefined')
	{
		return false;
	}


	// if (document.querySelector(".next").classList.contains("active")){
	// 	console.log("checking second slide")
	// 	document.querySelector(".next").classList.remove("slideUp");
	// 	document.querySelector(".next").classList.remove("active");
	// 	document.querySelector(".title-n").classList.add("fade-out");
	// 	document.querySelector(".description-n").classList.add("fade-out");
	// 	document.querySelector(".picture-n").classList.add("fade-out");
	// 	document.querySelector(".next").classList.add("slideUp2");
	// 	document.querySelector(".prev").classList.add("slideUp");
	// 	if (document.querySelector(".title-n").classList.contains('fade-out')){
	// 		console.log("in if ke andar ka if ")
	// 		document.querySelector(".prev").classList.add("active");
	// 	}

	// }
	// if((document.querySelector(".container1").classList.contains("slideUp2"))){
	// 	current.classList.remove("slideUp2");
	// }
	// if((document.querySelector(".container1").classList.contains("slideDown2"))){
	// 	current.classList.remove("slideDown2")
	// }
	current.classList.add("slideUp");
	setTimeout(function(){
            current.classList.remove("slideUp");
        }, 3000);
	current.classList.remove('container1');
	current.classList.add("fade-out");
	current.classList.add("prev");

	// 	for (var i = 0; i < current.childNodes.length; i++) {

// console.log(current.childNodes[i]);
	     
// 	}

	/* next element */
	if (document.querySelector(".current").classList.contains("prev")){

	var next = current.nextElementSibling;
	next.classList.remove('prev');
	next.classList.add('slideUp2');
	setTimeout(function(){
		  	console.log("timer")
            next.classList.remove("slideUp2");
        }, 3000);
	next.classList.add('position');
	next.classList.add('container1');

	};
	// next.classList.add("active")
	// for (var i = 0; i < next.childNodes.length; i++) {
	// 	next.childNodes[i].classList.remove("fade-out");     
	// }

	/*document.querySelector(".title-c").classList.add("fade-out");
	document.querySelector(".current").classList.add("slideUp");
	document.querySelector(".description-c").classList.add("fade-out");
	document.querySelector(".picture-c").classList.add("fade-out");*/
	/*.querySelector(".next").classList.add("slideUp");*/

	// if (document.querySelector(".title-c").classList.contains('fade-out')){
	// 	console.log("in if condition");
	// 	document.querySelector(".next").classList.add("active");
	// };

	// document.getElementsByClassName("description-c").classList.add("fade-out");
	// document.getElementsByClassName("picture-c").classList.add("fade-out");
}

function reverse(){
	console.log("reverse");

	var current = document.querySelector(".container1");
	
	if(!current || typeof current == 'undefined')
	{
		return false;
	}

	current.nextElementSibling.classList.remove("slideDown")
	current.classList.add("slideDown");
	setTimeout(function(){
		  	console.log("timer")
            current.classList.remove("slideDown");
        }, 3000);
	if(document.querySelector(".container1").classList.contains("position")){
		current.classList.remove("position")
	}

	current.classList.remove("container1");
	

	
	
	// current.previousElementSibling.classList.add("container1");


	var prev = current.previousElementSibling;
	console.log("hi")
	prev.classList.add("container1");
	prev.classList.remove("fade-out")
	prev.classList.remove("slideUp")
	prev.classList.add("slideDown2");
	setTimeout(function(){
		  	console.log("timer")
            prev.classList.remove("slideDown2");
        }, 3000);
	//.querySelector("titl")
	// document.querySelector(".title-c").classList.remove("fade-out");
	// document.querySelector(".current").classList.remove("slideUp");
	// document.querySelector(".description-c").classList.remove("fade-out");
	// document.querySelector(".picture-c").classList.remove("fade-out");
	// document.querySelector(".next").classList.remove("slideUp");
	// document.querySelector(".current").classList.add("slideDown");
	// document.querySelector(".next").classList.add("slideDown2");
}