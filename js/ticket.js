var people = [
	"Select One",
    "Harry Potter",
    "Ginny Weasley",
    "Ron Weasley",
    "Hermione Granger",
    "Fred Weasley",
    "George Weasley",
    "Arthur Weasley",
    "Nymphadora Tonks",
    "Remus Lupin",
    "Mad-Eye Moody",
    "Albus Dumbledore",
    "Draco Malfoy"
];

var devices = [
	"Select One",
	"Wand",
	"Cauldron",
	"Quill",
	"Deluminator",
	"Invisibility Cloak",
	"Resurrection Stone",
	"The Marauder's Map",
	"Remembrall"
];

var contactedBy = [
	"Select One",
	"Owl",
	"Letter",
	"Floo Network",
	"Muggle Phone"
];

var groups = [
	"Select One",
	"Gryffindor",
	"Ravenclaw",
	"Hufflepuff",
	"Slytherin"
];

var category = [
	"Select One",
	"Wand Malfunction",
	"Gnome infestation",
	"Moaning Myrtle",
	"Annoying House Elf",
	"New book",
	"Broken quill",
	"New Owl Request"
];

var resolutionCode = [
	"Select One",
	"Resolved Successfully",
	"Withdrawn",
	"Could not reproduce",
	"Solved by Workaround"	
];

fillTheForm(document.getElementById("contact"),people);
fillTheForm(document.getElementById("contactedBy"),contactedBy);
fillTheForm(document.getElementById("device"),devices);
fillTheForm(document.getElementById("assignGroup"),groups);
fillTheForm(document.getElementById("expertGroup"),groups);
fillTheForm(document.getElementById("expertAssignee"),people);
fillTheForm(document.getElementById("assignee"),people);
fillTheForm(document.getElementById("category"),category);
fillTheForm(document.getElementById("code"),resolutionCode);

function fillTheForm(field, theArray){
	
	for(var i=0; i < theArray.length; i++)
	{
		var option = document.createElement("option");
		option.value = i;
		option.innerHTML = theArray[i];
		field.appendChild(option);
	};
	
};













