//TASK LIST
// Setting up variables for our HTML elements using DOM selection
const form = document.getElementById("taskform");
const button = document.querySelector("#taskform > button"); // Complex CSS query
const tasklist = document.getElementById("tasklist");
const taskInput = document.getElementById("taskInput");

var slider = document.getElementById("priorityInput");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}

// Event listener for Button click

form.addEventListener("submit", function(event) {
  event.preventDefault(); 

  let task = taskInput.value;
  let date = (new Date()).toLocaleDateString('en-US') //Convert to short date format
  let dD = dueDateInput.value;
  let prio = priorityInput.value + "%";
  let time = timeConvert(estimatedTimeInput.value)
  let note = notesInput.value;
  
  // Call the addTask() function using
  addTask(task, date, dD, prio, time, note, false);

  // Log out the newly populated taskList everytime the button has been pressed
  console.log(taskList);
})

// Create an empty array to store our tasks
var taskList = [];

function addTask(taskDescription, createdDate, dueDate, priorityRating, estimatedTime, notes, completionStatus) {
  let task = {
    taskDescription,
    createdDate,
    dueDate,
    priorityRating,
    estimatedTime,
    notes,
    completionStatus
  };

  // Add the task to our array of tasks
  taskList.push(task);
  console.log(taskList)
  // Separate the DOM manipulation from the object creation logic
  renderTask(task);
}

// Function to display the item on the page
function renderTask(task) {
  let item = document.createElement("li");
  item.innerHTML = "<p>" + task.taskDescription + "</p>";

  tasklist.appendChild(item);

  // Setup delete button DOM elements
  let delButton = document.createElement("button");
  delButton.className = "delete-button";
  let delButtonText = document.createTextNode("Delete");
  delButton.appendChild(delButtonText);
  item.appendChild(delButton); // Adds a delete button to every task

  // Listen for when the 
  delButton.addEventListener("click", function(event){
    item.remove(); // Remove the task item from the page when button clicked
    // Because we used 'let' to define the item, this will always delete the right element
  })

  // Setup completed button DOM elements
  let doneButton = document.createElement("button");
  doneButton.className = "done-button";
  let doneButtonText = document.createTextNode("Completed!");
  doneButton.appendChild(doneButtonText);
  item.appendChild(doneButton); // Adds a delete button to every task

  var list = document.querySelector('ul');
  list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.tasklist.toggle('checked');
    }
  }, false);
  
  // Clear the value of the input once the task has been added to the page
  form.reset();
}

//converting minutes to hours:mins
function timeConvert(n) {
var num = n;
var hours = (num / 60);
var rhours = Math.floor(hours);
var minutes = (hours - rhours) * 60;
var rminutes = Math.round(minutes);
return rhours + "hr : " + rminutes + "min";
}

//openning and closing the form
function openForm() {
  document.getElementById("taskform").style.display = "block";
}

function closeForm() {
  document.getElementById("taskform").style.display = "none";
}