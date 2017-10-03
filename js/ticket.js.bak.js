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

document.getElementById("ticketBody").addEventListener("load", fillTheForm());

function fillTheForm(){
	var primaryContact = document.getElementById("contact");
	var contactedByField = document.getElementById("contactedBy");
	var deviceField = document.getElementById("device");
	var assignGroupField = document.getElementById("assignGroup");
	var expertGroupField = document.getElementById("expertGroup");
	var expertAssigneeField = document.getElementById("expertAssignee");
	var assigneeField = document.getElementById("assignee");
	var categoryField = document.getElementById("category");
	
	for(var i=0; i < people.length; i++)
	{
		var option = document.createElement("option");
		option.value = i;
		option.innerHTML = people[i];
		primaryContact.appendChild(option);
	};
	
	for(var i=0; i < contactedBy.length; i++)
	{
		var option = document.createElement("option");
		option.value = i;
		option.innerHTML = contactedBy[i];
		contactedByField.appendChild(option);
	};
	
	for(var i=0; i < devices.length; i++)
	{
		var option = document.createElement("option");
		option.value = i;
		option.innerHTML = devices[i];
		deviceField.appendChild(option);
	};
	
	for(var i=0; i < groups.length; i++)
	{
		var option = document.createElement("option");
		option.value = i;
		option.innerHTML = groups[i];
		assignGroupField.appendChild(option);
	};
	
	for(var i=0; i < groups.length; i++)
	{
		var option = document.createElement("option");
		option.value = i;
		option.innerHTML = groups[i];
		expertGroupField.appendChild(option);
	};
	
	for(var i=0; i < people.length; i++)
	{
		var option = document.createElement("option");
		option.value = i;
		option.innerHTML = people[i];
		expertAssigneeField.appendChild(option);
	};
	
	for(var i=0; i < people.length; i++)
	{
		var option = document.createElement("option");
		option.value = i;
		option.innerHTML = people[i];
		assigneeField.appendChild(option);
	};
	
	for(var i=0; i < category.length; i++)
	{
		var option = document.createElement("option");
		option.value = i;
		option.innerHTML = category[i];
		categoryField.appendChild(option);
	};
};













