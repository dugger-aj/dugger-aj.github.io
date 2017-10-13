//clicking picture makes messages appear.
function augusta(){
	
	// messingw with session storage and the click count
	if(typeof(Storage) !== "undefined") {
        if (sessionStorage.clickcount) {
            sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
        } else {
            sessionStorage.clickcount = 1;
		}
	}
	
	//setting array of smart remarks to user
	var smartRemarks = ["Augusta National is the best course on the planet. It is definitely on my bucketlist", "Why did you click it twice?", "That is fine, keep clicking.","Seriously? Ok no more! You have to clear Session Storage wit the button below:"];
	
	//checking if the click count is higher than the length of the array.
	if(sessionStorage.clickcount <= smartRemarks.length){
		
		//creating paragraph and text nodes and appending to div
		var paragraph = document.createElement("P");
		paragraph.id = "child";
		var textForPara = document.createTextNode(smartRemarks[sessionStorage.clickcount-1]);

		paragraph.appendChild(textForPara);
		document.getElementById("coolNewStuff").appendChild(paragraph);
	}
}

//clearing session storage with button
document.getElementById("clearStorageButton").onclick = function (){
	sessionStorage.clear();
	document.getElementById("coolNewStuff").innerHTML = "";
};

//adding event listener to div
document.getElementById("removeChild").addEventListener("click", removeChild);

function removeChild(){
	var parent = document.getElementById("coolNewStuff");
	
	while (parent.firstChild) {
		parent.removeChild(parent.firstChild);
	}
}

function changeBorder(){
	document.getElementById("augustaPic").style.borderRadius = "8px";
}

//creating object
var valleyView = {
	name: "Valley View",
	holes: "18",
	city: "Layton",
	state: "UT",
	price: 44,
	img: "images/golf.jpg",
	printThis : function() {
       return "<p>" + this.name + "</p><p>Number of Holes: " + this.holes + "</p><p>Location: " + this.city + ", " + this.state + "</p><p>Price: $" + this.price + "</p>";
    }
};

// throwing that object in local storage and retrieving it. I then display it on the page afterwards
if (typeof(Storage) !== "undefined") {
	
    localStorage.setItem('valleyView',JSON.stringify(valleyView));
	var localValleyView = localStorage.getItem("valleyView");
	var parsedValleyViewObject = JSON.parse(localValleyView);
	var valleyViewPicture = document.createElement("IMG");
	valleyViewPicture.setAttribute("src", parsedValleyViewObject.img);
	document.getElementById("valleyViewWrapper").appendChild(valleyViewPicture);
	
} else {
    alert("No support for web storage");
}

function doThis (){
	
	document.getElementById("valleyViewInfo").innerHTML = valleyView.printThis();	
	
}
