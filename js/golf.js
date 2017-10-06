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
	document.getElementById("photo").src = golfInfo[x].photo;
	
	document.getElementById("weekday").innerHTML = golfInfo[x].cost.weekday;
	document.getElementById("weekend").innerHTML = golfInfo[x].cost.weekend;
	
	for(i=0; i < golfInfo[x].details.length; i++){
		document.getElementById("details").innerHTML += "<p>" + golfInfo[x].details[i] + "</p>";
	}
}
