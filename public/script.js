
//TASK LIST

// select everything
// select the todo-form
const todoForm = document.querySelector('.todo-form');
// select the input box
const todoInput = document.querySelector('.todo-input');
// select the <ul> with class="todo-items"
const todoItemsList = document.querySelector('.todo-items');

//Make the slider update when moved
var slider = document.getElementById("priorityInput");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}

// array which stores every todos
let todos = [];

// add an eventListener on form, and listen for submit event
todoForm.addEventListener('submit', function(event) {
  // prevent the page from reloading when submitting the form
  event.preventDefault();
  let task = todoInput.value;
  let date = (new Date()).toLocaleDateString('en-US') //Convert to short date format
  let dD = dueDateInput.value;
  let prio = priorityInput.value + "%";
  let time = timeConvert(estimatedTimeInput.value)
  let note = notesInput.value;
  
  // Call the addTask() function using
  addTodo(task, date, dD, prio, time, note, false);
  
  //addTodo(todoInput.value); // call addTodo function with input box current value
});

// function to add todo
function addTodo(item, createdDate, dueDate, priorityRating, estimatedTime, notes, completionStatus) {
  
  // if item is not empty
  if (item !== '') {
    // make a todo object, which has id, name, and completed properties
    const todo = {
      id: Date.now(),
      name: item,
      due: dueDate,
      weight: priorityRating,
      time: estimatedTime,
      note: notes,
      completed: false
    };

    // then add it to todos array
    todos.push(todo);
    addToLocalStorage(todos); // then store it in localStorage

    // finally clear the input box value
    todoInput.value = '';
    estimatedTimeInput.value = '';
    notesInput.value = '';
  }
}

// function to render given todos to screen
function renderTodos(todos) {
  // clear everything inside <ul> with class=todo-items
  todoItemsList.innerHTML = '';

  // run through each item inside todos
  todos.forEach(function(item) {
    // check if the item is completed
    const checked = item.completed ? 'checked': null;

    // make a <li> element and fill it
    const li = document.createElement('li');

    li.setAttribute('class', 'item');

    li.setAttribute('data-key', item.id);

    // if item is completed, then add a class to <li> called 'checked', which will add line-through style
    if (item.completed === true) {
      li.classList.add('checked');
    }

    li.innerHTML = "<input type='checkbox' class='checkbox' ${checked}><button class='delete-button'>X</button><p class='items'><strong>" + item.name + "</strong></br>Due: " + item.due + "</br>Weight: " + item.weight + "</br>Notes: " + item.note + "</p>";
    // finally add the <li> to the <ul>
    todoItemsList.append(li);
  });

}

// function to add todos to local storage
function addToLocalStorage(todos) {
  // conver the array to string then store it.
  localStorage.setItem('todos', JSON.stringify(todos));
  // render them to screen
  renderTodos(todos);
}

// function helps to get everything from local storage
function getFromLocalStorage() {
  const reference = localStorage.getItem('todos');
  // if reference exists
  if (reference) {
    // converts back to array and store it in todos array
    todos = JSON.parse(reference);
    renderTodos(todos);
  }
}

// toggle the value to completed and not completed
function toggle(id) {
  todos.forEach(function(item) {
    // use == not ===, because here types are different. One is number and other is string;
    if (item.id == id) {
      // toggle the value
      item.completed = !item.completed;
    }
  });

  addToLocalStorage(todos);
}

// deletes a todo from todos array, then updates localstorage and renders updated list to screen
function deleteTodo(id) {
  // filters out the <li> with the id and updates the todos array
  //console.log(id);
  todos = todos.filter(function(item) {
    // use != not !==, because here types are different. One is number and other is string
    return item.id != id;
  });
  
  // update the localStorage
  addToLocalStorage(todos);
}

// initially get everything from localStorage
getFromLocalStorage();

// after that addEventListener <ul> with class=todoItems. Because we need to listen for click event in all delete-button and checkbox
todoItemsList.addEventListener('click', function(event) {
  // check if the event is on checkbox
  if (event.target.type === 'checkbox') {
    // toggle the state
    toggle(event.target.parentElement.getAttribute('data-key'))
    //console.log(event.target.parentElement.nodeName);
  }

  // check if that is a delete-button
  if (event.target.classList.contains('delete-button')) {
    // get id from data-key attribute's value of parent <li> where the delete-button is present
    deleteTodo(event.target.parentElement.getAttribute('data-key'));
    //console.log(event.target.parentElement.nodeName)
  }
});


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
const minBtn = document.querySelector('#min-button');
const opnBtn = document.querySelector('#open-button');

opnBtn.addEventListener('click', () => {
  document.getElementById("taskform").style.display = "block";
});


minBtn.addEventListener('click', () => {
  document.getElementById("taskform").style.display = "none";
});

//COVEY QUADRANTS
const refreshBtn = document.querySelector('#refresh-button');

refreshBtn.addEventListener('click', () => {
  renderCovey();
});

function renderCovey(){
  //remove current covey so there aren't duplicates
  /*
  document.getElementById('urgimp').removeChild(document.getElementById('urgimp').lastElementChild);
  document.getElementById('notimp').removeChild(document.getElementById('notimp').lastElementChild);
  document.getElementById('urgnot').removeChild(document.getElementById('urgnot').lastElementChild);
  document.getElementById('notnot').removeChild(document.getElementById('notnot').lastElementChild);
*/

  //cycle through the array to decide where to put the tasks
  todos.forEach(function(item) {
    var today = new Date();
    let date1 = new Date(today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate());
    let date2 = new Date(item.due);
    var Difference_In_Time = date2.getTime() - date1.getTime();
    var timeRemaining = Math.floor(Difference_In_Time / (1000 * 3600 * 24));
    var weight = (item.weight).slice(0, -1);

    if (timeRemaining <= 14 && weight >= 30) {
      let cov = document.createElement("li");
      cov.innerHTML = "<p>" + item.name + "</p>";
      urgimp.appendChild(cov);
    }
    else if (timeRemaining <= 14 && weight < 30) {
      let cov = document.createElement("li");
      cov.innerHTML = "<p>" + item.name + "</p>";
      urgnot.appendChild(cov);
    }
    else if (timeRemaining > 14 && weight >= 30) {
      let cov = document.createElement("li");
      cov.innerHTML = "<p>" + item.name + "</p>";
      notimp.appendChild(cov);
    }
    else if (timeRemaining > 14 && weight < 30) {
      let cov = document.createElement("li");
      cov.innerHTML = "<p>" + item.name + "</p>";
      notnot.appendChild(cov);
  }})
};

//STOPWATCH
const timer = document.getElementById('stopwatch');

var hr = 0;
var min = 0;
var sec = 0;
var stoptime = true;

const startTime = document.querySelector('#starttimer');
const stopTime = document.querySelector('#stoptimer');
const resetTime = document.querySelector('#resettimer');

startTime.addEventListener('click', () => {
  startTimer();
})
stopTime.addEventListener('click', () => {
  stopTimer();
})
resetTime.addEventListener('click', () => {
  resetTimer();
})

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

//when the start button is pressed, the timer will start by executing the timercycle function
function startTimer() {
  if (stoptime == true) {
        stoptime = false;
        timerCycle();
    }
}

//when the stop button is pressed the timer will pause
function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
  }
}

//when the reset button is pressed the timer will go back to 0
function resetTimer() {
    timer.innerHTML = "00:00:00";
    stoptime = true;
    hr = 0;
    sec = 0;
    min = 0;
}


//POMODORO TIMER

const startButton = document.querySelector('#pomodoro-start')
const stopButton = document.querySelector('#pomodoro-stop')

let type = 'Work'
let timeSpentInCurrentSession = 0

let currentTaskLabel = document.querySelector('#pomodoro-clock-task')

let updatedWorkSessionDuration
let updatedBreakSessionDuration
let workDurationInput = document.querySelector('#input-work-duration')
let breakDurationInput = document.querySelector('#input-break-duration')
workDurationInput.value = '25'
breakDurationInput.value = '5'

let isClockStopped = true

var ProgressBar = require('progressbar.js')
var circle = new ProgressBar.Circle('#pomodoro-container');


const progressBar = new ProgressBar.Circle('#pomodoro-timer', {
  strokeWidth: 2,
  text: {
    value: '25:00',
  },
  trailColor: '#f4f4f4',
})

// START
startButton.addEventListener('click', () => {
  toggleClock()
})
// STOP
stopButton.addEventListener('click', () => {
  toggleClock(true)
})

let isClockRunning = false

// in seconds = 25 mins
let workSessionDuration = 1500
let currentTimeLeftInSession = 1500
// in seconds = 5 mins;
let breakSessionDuration = 300

const toggleClock = (reset) => {
  togglePlayPauseIcon(reset)
  if (reset) {
    stopClock()
  } else {
    //console.log(isClockStopped)
    if (isClockStopped) {
      setUpdatedTimers()
      isClockStopped = false
    }
    if (isClockRunning === true) {
      // pause
      clearInterval(clockTimer)
      // update icon to the play one
      // set the vale of the button to start or pause
      isClockRunning = false
    } else {
      // start
      clockTimer = setInterval(() => {
        stepDown()
        displayCurrentTimeLeftInSession()
        progressBar.set(calculateSessionProgress())
      }, 1000)
      isClockRunning = true
    }
    // new
    showStopIcon()
  }
}

const displayCurrentTimeLeftInSession = () => {
  const secondsLeft = currentTimeLeftInSession
  let result = ''
  const seconds = secondsLeft % 60
  const minutes = parseInt(secondsLeft / 60) % 60
  let hours = parseInt(secondsLeft / 3600)
  // add leading zeroes if it's less than 10
  function addLeadingZeroes(time) {
    return time < 10 ? `0${time}` : time
  }
  if (hours > 0) result += `${hours}:`
  result += `${addLeadingZeroes(minutes)}:${addLeadingZeroes(seconds)}`
  progressBar.text.innerText = result.toString()
}

function addLeadingZeroes(time) {
  return time < 10 ? `0${time}` : time
}

const stopClock = () => {
  setUpdatedTimers()
  displaySessionLog(type)
  clearInterval(clockTimer)
  isClockStopped = true
  isClockRunning = false
  currentTimeLeftInSession = workSessionDuration
  displayCurrentTimeLeftInSession()
  type = 'Work'
  timeSpentInCurrentSession = 0
}

const stepDown = () => {
  if (currentTimeLeftInSession > 0) {
    // decrease time left / increase time spent
    currentTimeLeftInSession--
    timeSpentInCurrentSession++
  } else if (currentTimeLeftInSession === 0) {
  timeSpentInCurrentSession = 0;
  // Timer is over -> if work switch to break, viceversa
  if (type === 'Work') {
    currentTimeLeftInSession = breakSessionDuration;
    displaySessionLog('Work');
    type = 'Break';
    setUpdatedTimers();
    // new
    currentTaskLabel.value = 'Break';
    currentTaskLabel.disabled = true;
  } else {
    currentTimeLeftInSession = workSessionDuration;
    type = 'Work';
    setUpdatedTimers();
    // new
    if (currentTaskLabel.value === 'Break') {
      currentTaskLabel.value = workSessionLabel;
    }
    currentTaskLabel.disabled = false;
    displaySessionLog('Break');
  }
}
  displayCurrentTimeLeftInSession()
}

const displaySessionLog = (type) => {
  const sessionsList = document.querySelector('#pomodoro-sessions')
  // append li to it
  const li = document.createElement('li')
  if (type === 'Work') {
  sessionLabel = currentTaskLabel.value ? currentTaskLabel.value : 'Work'
  workSessionLabel = sessionLabel
} else {
  sessionLabel = 'Break'
}
  let elapsedTime = parseInt(timeSpentInCurrentSession / 60)
  elapsedTime = elapsedTime > 0 ? elapsedTime : '< 1'
  const text = document.createTextNode(`${sessionLabel} : ${elapsedTime} min`)
  li.appendChild(text)
  sessionsList.appendChild(li)
}

// UPDATE WORK TIME
workDurationInput.addEventListener('input', () => {
  updatedWorkSessionDuration = minuteToSeconds(workDurationInput.value)
})
// UPDATE PAUSE TIME
breakDurationInput.addEventListener('input', () => {
  updatedBreakSessionDuration = minuteToSeconds(breakDurationInput.value)
})

const minuteToSeconds = (mins) => {
  return mins * 60
}

const setUpdatedTimers = () => {
  if (type === 'Work') {
    currentTimeLeftInSession = updatedWorkSessionDuration
      ? updatedWorkSessionDuration
      : workSessionDuration
    workSessionDuration = currentTimeLeftInSession
  } else {
    currentTimeLeftInSession = updatedBreakSessionDuration
      ? updatedBreakSessionDuration
      : breakSessionDuration
    breakSessionDuration = currentTimeLeftInSession
  }
}

const togglePlayPauseIcon = (reset) => {
  const playIcon = document.querySelector('#play-icon')
  const pauseIcon = document.querySelector('#pause-icon')
  if (reset) {
    // when resetting -> always revert to play icon
    if (playIcon.classList.contains('hidden')) {
      playIcon.classList.remove('hidden')
    }
    if (!pauseIcon.classList.contains('hidden')) {
      pauseIcon.classList.add('hidden')
    }
  } else {
    playIcon.classList.toggle('hidden')
    pauseIcon.classList.toggle('hidden')
  }
}

const showStopIcon = () => {
  const stopButton = document.querySelector('#pomodoro-stop')
  stopButton.classList.remove('hidden')
}

const calculateSessionProgress = () => {
  // calculate the completion rate of this session
  const sessionDuration =
    type === 'Work' ? workSessionDuration : breakSessionDuration
  return (timeSpentInCurrentSession / sessionDuration) * 10
}


//DICTIONARY
//DOM selection for content element
const content = document.querySelector('.content');
const searchButton = document.querySelector("#search-btn");

//XML HTTP Request
var request = new XMLHttpRequest();

//Open connection
request.open("GET", "https://www.dictionaryapi.com/api/v3/references/thesaurus/json/umpire?key=your-api-key");

//Handling response
searchButton.addEventListener("click", () => {
  //console.log('click');
  //request.onload = function() {

    let data = JSON.parse(this.response);
    
    if (request.status >= 200 && request.status < 400) {
      console.log(data);
      
      data.forEach(function(id){
        if (wordInput.value == id) {
          console.log('true');
        }else{
          console.log('false');
        }
      });
      

    } else {
      alert("Oops something went wrong! Error: Unable to process your API request. Status: " + request.status + ". Please try again later");
    }
  //}
})

//Send request to API server
request.send();

//Content population


