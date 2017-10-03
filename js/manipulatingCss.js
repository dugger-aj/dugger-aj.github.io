

function doubleHeight()
{
	document.getElementById('clown').style.width = "75%";
}

function returnToNormal()
{
	document.getElementById('clown').style.width = "50%";
	document.getElementById('clown').style.borderRadius = "20px";
}

function changeRadius()
{
	document.getElementById('clown').style.borderRadius = "100px";
}

function changeColor()
{
	var color = prompt("What color? (can be name, hex, or rgb)");
	var buttons = document.getElementsByClassName('myButtons');
	
	for(var i=0; i < buttons.length; i++)
    {
        buttons[i].style.color = color;
    }
}

function changeBorder()
{
	document.getElementById('clown').style.border = "10px solid black";
	
}

function changeBorderBack()
{
	document.getElementById('clown').style.border = "none";
	document.getElementById('clown').style.borderRadius = "20px";

}