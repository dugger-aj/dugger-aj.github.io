// JavaScript Document
var golfInfo;
var details;
var xhr = new XMLHttpRequest();
xhr.open('GET', "golfdata.json", true);
xhr.responseType = 'text';
xhr.send();


xhr.onload = function () {
    if (xhr.status === 200) {
        golfInfo = JSON.parse(xhr.responseText);
        console.log(golfInfo);
        enterData(0);
    } // end if
} // end function

function enterData(x){
	
	document.getElementById("courseName").innerHTML = golfInfo[x].name;
	document.getElementById("description").innerHTML = golfInfo[x].description;
    var myVideo = document.getElementById("video");
    myVideo.setAttribute("src",golfInfo[x].video);
    
    document.getElementById("theVideo").play();
    
	document.getElementById("weekday").innerHTML = golfInfo[x].cost.weekday;
	document.getElementById("weekend").innerHTML = golfInfo[x].cost.weekend;
	
	details = "";
	for(i=0; i < golfInfo[x].details.length; i++){
		details += "<p>" + golfInfo[x].details[i] + "</p>";
	}
	document.getElementById("details").innerHTML = details;
}
