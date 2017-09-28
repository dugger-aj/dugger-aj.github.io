//document.getElementById('clown').style.display = "block";



function doubleHeight()
{
	document.getElementById('clown').style.height = "400px";
}

function returnToNormal()
{
	document.getElementById('clown').style.height = "200px";
	document.getElementById('clown').style.borderRadius = "4px";
}

function changeRadius()
{
	document.getElementById('clown').style.borderRadius = "100px";
}

function changeColor()
{
	var color = prompt("What color? (can be name, hex, or rgb)");
	var buttons = document.getElementsByClassName('myButtons');
	
	for(var i=0, len=buttons.length; i<len; i++)
    {
        buttons[i].style.color = color;
    }
}

function changeBorder()
{
	document.getElementById('clown').style.border = "10px solid black";
	document.getElementById('clown').style.borderRadius = "8px";

	
}

function changeBorderBack()
{
	document.getElementById('clown').style.border = "none";
	document.getElementById('clown').style.borderRadius = "4px";

}