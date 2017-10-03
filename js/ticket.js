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

var primaryContact = document.getElementById("contact");
var contactedByField = document.getElementById("contactedBy");
var deviceField = document.getElementById("device");
var assignGroupField = document.getElementById("assignGroup");
var expertGroupField = document.getElementById("expertGroup");
var expertAssigneeField = document.getElementById("expertAssignee");
var assigneeField = document.getElementById("assignee");
var categoryField = document.getElementById("category");

fillTheForm(primaryContact,people);
fillTheForm(contactedByField,contactedBy);
fillTheForm(deviceField,devices);
fillTheForm(assignGroupField,groups);
fillTheForm(expertGroupField,groups);
fillTheForm(expertAssigneeField,people);
fillTheForm(assigneeField,people);
fillTheForm(categoryField,category);


function fillTheForm(field, theArray){
	
	for(var i=0; i < theArray.length; i++)
	{
		var option = document.createElement("option");
		option.value = i;
		option.innerHTML = theArray[i];
		field.appendChild(option);
	};
	
};













