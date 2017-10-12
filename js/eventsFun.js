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