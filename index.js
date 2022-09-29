var pos=0;
var taskInput=document.getElementsByClassName("input")[0];
var addTaskBtn=document.getElementsByClassName("addButton")[0];
var taskscontainer=document.getElementsByClassName("container")[0];

addTaskBtn.addEventListener("click",addTask)

function createNewTaskElement(taskString){

	var listItem=document.createElement("li");
    listItem.className="item"
    
	//input (text)
	var editInput=document.createElement("input");//text
    //label
    var label=document.createElement("label");//label
	//button.edit
	var editButton=document.createElement("button");//edit button
    //button.delete
	var deleteButton=document.createElement("button");//delete button

    label.innerText=taskString;
	editInput.type="text";
    editInput.className="item_input";
    editInput.style.display="none";
	editButton.innerText="Edit";//innerText encodes special characters, HTML does not.
	editButton.className="edit";
	deleteButton.innerText="Delete";
	deleteButton.className="delete";


	listItem.appendChild(label);
	listItem.appendChild(editInput);
	listItem.appendChild(editButton);
	listItem.appendChild(deleteButton);
	return listItem;
}

function addTask(){
	console.log("Add Task...");
	//Create a new list item with the text from the #new-task:
	var listItem=createNewTaskElement(taskInput.value);

	//Append listItem to incompleteTaskHolder
	taskscontainer.appendChild(listItem);
	bindTaskEvents(listItem);

	taskInput.value="";

}

function bindTaskEvents(taskListItem){
	console.log("bind list item events");

	var editButton=taskListItem.querySelector("button.edit");
	var deleteButton=taskListItem.querySelector("button.delete");

    //Bind editTask to edit button.
    if(editButton.innerText=="Edit")
	    editButton.onclick=editTask;
    else
        editButton.onclick=saveTask;
			//Bind deleteTask to delete button.
    deleteButton.onclick=deleteTask;

}


function editTask(){
    console.log("Edit Task...");
    console.log("Change 'edit' to 'save'");
    
    
    var listItem=this.parentNode;
    
    var editInput=listItem.querySelector('input[type=text]');
    var label=listItem.querySelector("label");
    var buttoncheck=listItem.querySelector("button.edit");
    editInput.value=label.innerText;
    editInput.style.display="inline-block";
    label.style.display="none";
    buttoncheck.innerText="Save";
    buttoncheck.onclick=saveTask;

 }
    
    
function saveTask(){
    console.log("Save Task...");

    var listItem=this.parentNode;
    
    var editInput=listItem.querySelector('input[type=text]');
    var label=listItem.querySelector("label");
    var buttoncheck=listItem.querySelector("button.edit");
    label.innerText=editInput.value;
    editInput.style.display="none";
    label.style.display="inline-block";
    buttoncheck.innerText="Edit";
    buttoncheck.onclick=editTask;

 }
    
function deleteTask(){
    console.log("Delete Task...");
    var listItem=this.parentNode;
    var ul=listItem.parentNode;
    //Remove the parent list item from the ul.
    ul.removeChild(listItem);
    
}