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



const timer = document.getElementById('stopwatch');

var hr = 0;
var min = 0;
var sec = 0;
var stoptime = true;

function startTimer() {
  if (stoptime == true) {
        stoptime = false;
        timerCycle();
    }
}
function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
  }
}

function timerCycle() {
    if (stoptime == false) {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);

    sec = sec + 1;

    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }

    if (sec < 10 || sec == 0) {
      sec = '0' + sec;
    }
    if (min < 10 || min == 0) {
      min = '0' + min;
    }
    if (hr < 10 || hr == 0) {
      hr = '0' + hr;
    }

    timer.innerHTML = hr + ':' + min + ':' + sec;

    setTimeout("timerCycle()", 1000);
  }
}

function resetTimer() {
    timer.innerHTML = "00:00:00";
    stoptime = true;
    hr = 0;
    sec = 0;
    min = 0;
}


//pomodoro

// Select Pomodoro display to edit timer content
const pomodoroDisplay = document.querySelector(".timer-display");

// Select start, pause & stop buttons
const startButton = document.querySelector(".start");
const stopButton = document.querySelector(".stop");
const pauseButton = document.querySelector(".pause");

// Select fields to increment total work & break sessions
const workSession = document.querySelector(".work-sessions");
const breakSession = document.querySelector(".break-sessions");

// Select div to display session type
const sessionType = document.querySelector(".session-type");
const buttonGroup = document.querySelector(".button-group");
// display initial timer state at the start
const progressBar = new ProgressBar.Circle(pomodoroDisplay, {
  strokeWidth: 2,
  text: {
    value: "25:00"
  },
  trailColor: "rgba(255, 255, 255, 0.308)",
  color: "#f3f3f3",
  svgStyle: {
    // Important: make sure that your container has same
    // aspect ratio as the SVG canvas. See SVG canvas sizes above.
    width: "85%"
  }
});

// Set a flag to check if pomodoro was paused
let timerRunning = true;

// Set a flag to check if timer was stopped
let timerStopped = false;

// set pomodoro interval time
let timerSeconds = 1500;
let currentSessionTime = 1500;

// set break interval time
let breakSeconds = 300;

//Set a variable to calculate time spent in current session
let timeSpent = 0;

// Declare  variable for setInterval
let timerInterval = null;

// Declare a variable to define type of session
let type = "work";

// set variables for counting total work & break sessions
let totalWorkSessions = 0;
let totalBreakSessions = 0;

// set function to initialize buttons at start of application
function initializeButtons() {
  startButton.style.display = "block";
  stopButton.style.display = "none";
  pauseButton.style.display = "none";
}

// set a function to toggle session type
const toggleSession = function() {
  if (type === "work") {
    type = "break";
    currentSessionTime = breakSeconds;
  } else {
    type = "work";
    currentSessionTime = timerSeconds;
  }
};

// Calculate session progress for progressbar
const calculateSessionProgress = () => {
  // calculate the completion rate of this session
  let sessionTotalTime = type === "work" ? timerSeconds : breakSeconds;
  return timeSpent / sessionTotalTime;
};

// set a display timer function to format time-
const displayTimer = function(timeInput) {
  // convert seconds into minutes
  var minutes = Math.floor(timeInput / 60);
  var remainingSeconds = timeInput - minutes * 60;
  // format time for single digit prepend by 0
  if (remainingSeconds < 10) {
    remainingSeconds = "0" + remainingSeconds;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  // return display time
  progressBar.text.innerText = `${minutes}:${remainingSeconds}`;
  workSession.textContent = totalWorkSessions;
  breakSession.textContent = totalBreakSessions;
  sessionType.textContent = type;
};

// Reset timer Seconds
const resetTimerSeconds = function() {
  currentSessionTime = 1500;
};

// Set a time function to run pomodoro intervals
const timerStart = function() {
  if (timerRunning) {
    timerInterval = setInterval(function() {
      timeSpent++;
      currentSessionTime--;
      displayTimer(currentSessionTime);
      progressBar.set(calculateSessionProgress());
      if (currentSessionTime < 0) {
        if (type === "work") {
          totalWorkSessions++;
        } else {
          totalBreakSessions++;
        }
        timeSpent = 0;
        timerRunning = false;
        clearInterval(timerInterval);
        toggleSession();
        initializeButtons();
        displayTimer(currentSessionTime);
        progressBar.set(calculateSessionProgress());
      }
    }, 1000);
  }
};

// Set a function to pause timer
const pauseTimer = function() {
  if (!timerRunning) {
    clearInterval(timerInterval);
  }
};

// set a function to stop timer
const stopTimerP = function() {
  if (timerStopped) {
    timeSpent = 0;
    clearInterval(timerInterval);
    resetTimerSeconds();
    displayTimer(currentSessionTime);
    progressBar.set(calculateSessionProgress());
    timerStopped = false;
  }
};

// Listen for clicks on the document
document.addEventListener("click", function(event) {
  // Start pomodoro on click on start button
  if (event.target.classList.contains("start")) {
    timerRunning = true;
    timerStart();
    startButton.style.display = "none";
    pauseButton.style.display = "block";
    stopButton.style.display = "block";
  }

  if (event.target.classList.contains("pause")) {
    timerRunning = false;
    pauseTimer();
    pauseButton.style.display = "none";
    startButton.style.display = "block";
  }

  if (event.target.classList.contains("stop")) {
    timerStopped = true;
    stopTimerP();
    initializeButtons();
  }
});

// display buttons at the start of timer
initializeButtons();
