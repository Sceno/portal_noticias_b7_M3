var slideItem = 0;
window.onload = function() {
	setInterval(passarSlide, 4000);

	var slidewidth = document.getElementById("slide-show").offsetWidth;
	var objs = document.getElementsByClassName("slide");
	for(var i=0;i<objs.length;i++) {
		objs[i].style.width = slidewidth+"px";
	}
}
function passarSlide() {
	var slidewidth = document.getElementById("slide-show").offsetWidth;
	
	if(slideItem >= 3) {
		slideItem = 0;
	} else {
		slideItem++;
	}

	document.getElementsByClassName("slide-show-area")[0].style.marginLeft = "-"+(slidewidth * slideItem)+"px";
}
function mudarSlide(pos) {
	slideItem = pos;
	var slidewidth = document.getElementById("slide-show").offsetWidth;
	document.getElementsByClassName("slide-show-area")[0].style.marginLeft = "-"+(slidewidth * slideItem)+"px";
}

function abriMenuMobile() {

	var menu = document.getElementById("menu");

	if (menu.style.display == 'none' || menu.style.display == '') {
		menu.style.display = "block";
	} else {
		menu.style.display = "none";
	}

}