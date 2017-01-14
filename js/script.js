$(function changeSlide(){
	var carouselList = $("#carousel ul");
	var firstItem = carouselList.find("li:first");
	var lastItem = carouselList.find("li:last");

	carouselList.animate({'marginLeft':-434}, 500, moveFirstSlide);
		function moveFirstSlide(){
		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
	}
	setInterval(changeSlide, 3000);
})
