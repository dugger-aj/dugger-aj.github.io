function makeTextBigger (el){
	var elem = document.getElementById(el);
	elem.style.transition = "font-size 2.0s linear 0s";
	elem.style.fontSize = "200%";
	
	moveAndColorCircle();
}

function makeTextNormal (el){
	var elem = document.getElementById(el);
	elem.style.transition = "font-size 2.0s linear 0s";
	elem.style.fontSize = "140%";
}

function makeBoxAppear (){
	var para = document.getElementById("myPara");
	var pic = document.getElementById("clownAh");
	//pic.src = "images/clownAh.jpg";
	para.style.transition = "opacity 3s linear 0s";
	para.style.opacity = 1;
	pic.style.transition = "opacity 3s linear 0s";
	pic.style.opacity = 1;
	
}

function makeCircle (){
	
	var pic = document.getElementById("square");
	pic.style.transition = "opacity 3s, border-radius 3s";
	pic.style.opacity = 1;
	document.getElementById("square").style.borderRadius = "50%";
	
}

function moveAndColorCircle(){
	var elem = document.getElementById("circle");
	elem.style.animation = "circle 5s  linear 0s infinite";
}