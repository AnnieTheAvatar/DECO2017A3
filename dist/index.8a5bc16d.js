// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this,
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"7GifH":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "97912cc17f1f5bdf37964fbc8a5bc16d"; // @flow
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets/*: {|[string]: boolean|} */ , acceptedAssets/*: {|[string]: boolean|} */ , assetsToAccept/*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    // $FlowFixMe
    ws.onmessage = function(event/*: {data: string, ...} */ ) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH
            );
            // Handle HMR Update
            var handled = false;
            assets.forEach((asset)=>{
                var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
                if (didAccept) handled = true;
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function(e) {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
        errorHTML += `\n      <div>\n        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">\n          🚨 ${diagnostic.message}\n        </div>\n        <pre>\n          ${stack}\n        </pre>\n        <div>\n          ${diagnostic.hints.map((hint)=>'<div>' + hint + '</div>'
        ).join('')}\n        </div>\n      </div>\n    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    link.getAttribute('href').split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle/*: ParcelRequire */ , asset/*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle/*: ParcelRequire */ , id/*: string */ , depsByBundle/*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle/*: ParcelRequire */ , id/*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"4OAbU":[function(require,module,exports) {
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
};
// array which stores every todos
let todos = [];
// add an eventListener on form, and listen for submit event
todoForm.addEventListener('submit', function(event) {
    // prevent the page from reloading when submitting the form
    event.preventDefault();
    let task = todoInput.value;
    let date = new Date().toLocaleDateString('en-US')//Convert to short date format
    ;
    let dD = dueDateInput.value;
    let prio = priorityInput.value + "%";
    let time = timeConvert(estimatedTimeInput.value);
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
function renderTodos(todos1) {
    // clear everything inside <ul> with class=todo-items
    todoItemsList.innerHTML = '';
    // run through each item inside todos
    todos1.forEach(function(item) {
        // check if the item is completed
        const checked = item.completed ? 'checked' : null;
        // make a <li> element and fill it
        const li = document.createElement('li');
        li.setAttribute('class', 'item');
        li.setAttribute('data-key', item.id);
        // if item is completed, then add a class to <li> called 'checked', which will add line-through style
        if (item.completed === true) li.classList.add('checked');
        li.innerHTML = "<input type='checkbox' class='checkbox' ${checked}><button class='delete-button fas fa-trash'></button><p class='items'><strong>" + item.name + "</strong></br>Due: " + item.due + "</br>Weight: " + item.weight + "</br>Notes: " + item.note + "</p>";
        // finally add the <li> to the <ul>
        todoItemsList.append(li);
    });
}
// function to add todos to local storage
function addToLocalStorage(todos1) {
    // conver the array to string then store it.
    localStorage.setItem('todos', JSON.stringify(todos1));
    // render them to screen
    renderTodos(todos1);
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
        if (item.id == id) // toggle the value
        item.completed = !item.completed;
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
    if (event.target.type === 'checkbox') // toggle the state
    toggle(event.target.parentElement.getAttribute('data-key'));
    // check if that is a delete-button
    if (event.target.classList.contains('delete-button')) // get id from data-key attribute's value of parent <li> where the delete-button is present
    deleteTodo(event.target.parentElement.getAttribute('data-key'));
});
//converting minutes to hours:mins
function timeConvert(n) {
    var num = n;
    var hours = num / 60;
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return rhours + "hr : " + rminutes + "min";
}
//openning and closing the form
const minBtn = document.querySelector('#min-button');
const opnBtn = document.querySelector('#open-button');
opnBtn.addEventListener('click', ()=>{
    document.getElementById("taskform").style.display = "block";
    opnBtn.style.visibility = "hidden";
    minBtn.style.visibility = "visible";
});
minBtn.addEventListener('click', ()=>{
    document.getElementById("taskform").style.display = "none";
    opnBtn.style.visibility = "visible";
    minBtn.style.visibility = "hidden";
});
//COVEY QUADRANTS
const refreshBtn = document.querySelector('#refresh-button');
refreshBtn.addEventListener('click', ()=>{
    renderCovey();
});
function renderCovey() {
    //remove current covey so there aren't duplicates
    /*
  document.getElementById('urgimp').removeChild(document.getElementById('urgimp').lastElementChild);
  document.getElementById('notimp').removeChild(document.getElementById('notimp').lastElementChild);
  document.getElementById('urgnot').removeChild(document.getElementById('urgnot').lastElementChild);
  document.getElementById('notnot').removeChild(document.getElementById('notnot').lastElementChild);
*/ //cycle through the array to decide where to put the tasks
    todos.forEach(function(item) {
        //find difference between today and the due date
        var today = new Date();
        let date1 = new Date(today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate());
        let date2 = new Date(item.due);
        var Difference_In_Time = date2.getTime() - date1.getTime();
        var timeRemaining = Math.floor(Difference_In_Time / 86400000);
        //numerical value of weight
        var weight = item.weight.slice(0, -1);
        //if the time remaining is less than 14 days it counts as urgent
        //if the weight is higher than 30% it counts as important
        //find the overlap between urgent and important to find which quadrant to put the task in
        if (timeRemaining <= 14 && weight >= 30) {
            let cov = document.createElement("li");
            cov.innerHTML = "<p>" + item.name + "</p>";
            urgimp.appendChild(cov);
        } else if (timeRemaining <= 14 && weight < 30) {
            let cov = document.createElement("li");
            cov.innerHTML = "<p>" + item.name + "</p>";
            urgnot.appendChild(cov);
        } else if (timeRemaining > 14 && weight >= 30) {
            let cov = document.createElement("li");
            cov.innerHTML = "<p>" + item.name + "</p>";
            notimp.appendChild(cov);
        } else if (timeRemaining > 14 && weight < 30) {
            let cov = document.createElement("li");
            cov.innerHTML = "<p>" + item.name + "</p>";
            notnot.appendChild(cov);
        }
    });
}
//STOPWATCH
const timer = document.getElementById('stopwatch');
var hr = 0;
var min = 0;
var sec = 0;
var stoptime = true;
const startTime = document.querySelector('#starttimer');
const stopTime = document.querySelector('#stoptimer');
const resetTime = document.querySelector('#resettimer');
startTime.addEventListener('click', ()=>{
    startTimer();
});
stopTime.addEventListener('click', ()=>{
    stopTimer();
});
resetTime.addEventListener('click', ()=>{
    resetTimer();
});
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
        if (sec < 10 || sec == 0) sec = '0' + sec;
        if (min < 10 || min == 0) min = '0' + min;
        if (hr < 10 || hr == 0) hr = '0' + hr;
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
    if (stoptime == false) stoptime = true;
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
const startButton = document.querySelector('#pomodoro-start');
const stopButton = document.querySelector('#pomodoro-stop');
let type = 'Work';
let timeSpentInCurrentSession = 0;
let currentTaskLabel = document.querySelector('#pomodoro-clock-task');
let updatedWorkSessionDuration;
let updatedBreakSessionDuration;
let workDurationInput = document.querySelector('#input-work-duration');
let breakDurationInput = document.querySelector('#input-break-duration');
workDurationInput.value = '25';
breakDurationInput.value = '5';
let isClockStopped = true;
var ProgressBar = require('progressbar.js');
var circle = new ProgressBar.Circle('#pomodoro-container');
const progressBar = new ProgressBar.Circle('#pomodoro-timer', {
    strokeWidth: 2,
    text: {
        value: '25:00'
    },
    trailColor: '#f4f4f4'
});
// START
startButton.addEventListener('click', ()=>{
    toggleClock();
});
// STOP
stopButton.addEventListener('click', ()=>{
    toggleClock(true);
});
let isClockRunning = false;
// in seconds = 25 mins
let workSessionDuration = 1500;
let currentTimeLeftInSession = 1500;
// in seconds = 5 mins;
let breakSessionDuration = 300;
const toggleClock = (reset)=>{
    togglePlayPauseIcon(reset);
    if (reset) stopClock();
    else {
        //console.log(isClockStopped)
        if (isClockStopped) {
            setUpdatedTimers();
            isClockStopped = false;
        }
        if (isClockRunning === true) {
            // pause
            clearInterval(clockTimer);
            // update icon to the play one
            // set the vale of the button to start or pause
            isClockRunning = false;
        } else {
            // start
            clockTimer = setInterval(()=>{
                stepDown();
                displayCurrentTimeLeftInSession();
                progressBar.set(calculateSessionProgress());
            }, 1000);
            isClockRunning = true;
        }
        // new
        showStopIcon();
    }
};
const displayCurrentTimeLeftInSession = ()=>{
    const secondsLeft = currentTimeLeftInSession;
    let result = '';
    const seconds = secondsLeft % 60;
    const minutes = parseInt(secondsLeft / 60) % 60;
    let hours = parseInt(secondsLeft / 3600);
    // add leading zeroes if it's less than 10
    function addLeadingZeroes(time) {
        return time < 10 ? `0${time}` : time;
    }
    if (hours > 0) result += `${hours}:`;
    result += `${addLeadingZeroes(minutes)}:${addLeadingZeroes(seconds)}`;
    progressBar.text.innerText = result.toString();
};
function addLeadingZeroes(time) {
    return time < 10 ? `0${time}` : time;
}
const stopClock = ()=>{
    setUpdatedTimers();
    displaySessionLog(type);
    clearInterval(clockTimer);
    isClockStopped = true;
    isClockRunning = false;
    currentTimeLeftInSession = workSessionDuration;
    displayCurrentTimeLeftInSession();
    type = 'Work';
    timeSpentInCurrentSession = 0;
};
const stepDown = ()=>{
    if (currentTimeLeftInSession > 0) {
        // decrease time left / increase time spent
        currentTimeLeftInSession--;
        timeSpentInCurrentSession++;
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
            if (currentTaskLabel.value === 'Break') currentTaskLabel.value = workSessionLabel;
            currentTaskLabel.disabled = false;
            displaySessionLog('Break');
        }
    }
    displayCurrentTimeLeftInSession();
};
const displaySessionLog = (type1)=>{
    const sessionsList = document.querySelector('#pomodoro-sessions');
    // append li to it
    const li = document.createElement('li');
    if (type1 === 'Work') {
        sessionLabel = currentTaskLabel.value ? currentTaskLabel.value : 'Work';
        workSessionLabel = sessionLabel;
    } else sessionLabel = 'Break';
    let elapsedTime = parseInt(timeSpentInCurrentSession / 60);
    elapsedTime = elapsedTime > 0 ? elapsedTime : '< 1';
    const text = document.createTextNode(`${sessionLabel} : ${elapsedTime} min`);
    li.appendChild(text);
    sessionsList.appendChild(li);
};
// UPDATE WORK TIME
workDurationInput.addEventListener('input', ()=>{
    updatedWorkSessionDuration = minuteToSeconds(workDurationInput.value);
});
// UPDATE PAUSE TIME
breakDurationInput.addEventListener('input', ()=>{
    updatedBreakSessionDuration = minuteToSeconds(breakDurationInput.value);
});
const minuteToSeconds = (mins)=>{
    return mins * 60;
};
const setUpdatedTimers = ()=>{
    if (type === 'Work') {
        currentTimeLeftInSession = updatedWorkSessionDuration ? updatedWorkSessionDuration : workSessionDuration;
        workSessionDuration = currentTimeLeftInSession;
    } else {
        currentTimeLeftInSession = updatedBreakSessionDuration ? updatedBreakSessionDuration : breakSessionDuration;
        breakSessionDuration = currentTimeLeftInSession;
    }
};
const togglePlayPauseIcon = (reset)=>{
    const playIcon = document.querySelector('#play-icon');
    const pauseIcon = document.querySelector('#pause-icon');
    if (reset) {
        // when resetting -> always revert to play icon
        if (playIcon.classList.contains('hidden')) playIcon.classList.remove('hidden');
        if (!pauseIcon.classList.contains('hidden')) pauseIcon.classList.add('hidden');
    } else {
        playIcon.classList.toggle('hidden');
        pauseIcon.classList.toggle('hidden');
    }
};
const showStopIcon = ()=>{
    const stopButton1 = document.querySelector('#pomodoro-stop');
    stopButton1.classList.remove('hidden');
};
const calculateSessionProgress = ()=>{
    // calculate the completion rate of this session
    const sessionDuration = type === 'Work' ? workSessionDuration : breakSessionDuration;
    return timeSpentInCurrentSession / sessionDuration * 10;
};
//DICTIONARY
//DOM selection for content element
const searchButton = document.querySelector("#search-btn");
searchButton.addEventListener('click', ()=>{
    var nonexistent = document.getElementById('nope');
    var word = document.getElementById('word');
    var definition = document.getElementById('def');
    var synonym = document.getElementById('syns');
    var moreInfo = document.getElementById('more');
    var wordToSearch = document.getElementById('wordInput').value;
    var request1 = new XMLHttpRequest();
    request1.open('GET', 'https://www.dictionaryapi.com/api/v3/references/thesaurus/json/' + wordToSearch + '?key=3ce6e0c2-e860-433c-a9ee-6bb91c895f31', true);
    request1.onload = function() {
        var data = JSON.parse(this.response);
        if (request1.status >= 200 && request1.status < 400) {
            if (data[0] == undefined || data[0].meta == undefined) {
                //create an error for if the search was unsuccessful
                nonexistent.style.visibility = 'visible';
                nonexistent.innerHTML = "<li>Sorry, we cannot find that word in the dictionary</li>";
            } else {
                //make the results visible
                document.getElementById('searchResult').style.visibility = 'visible';
                //remove the warning if the search is successful
                nonexistent.innerHTML = "";
                //print the word that is being displayed
                word.innerHTML += data[0].meta.id;
                //cycle through the definitions to display them on the page and seperate them with a space and comma
                let definitions = data[0].shortdef;
                for(var i = 0; i < definitions.length; i++)definition.innerHTML += definitions[i] + ", ";
                //cycle through the synonyms to display them on the page, and seperate them with a space and comma
                let synonyms = data[0].meta.syns[0];
                for(var i = 0; i < synonyms.length; i++)synonym.innerHTML += synonyms[i] + ", ";
                //add a link for the dictionary page
                moreInfo.innerHTML = "<a href='https://www.merriam-webster.com/thesaurus/" + wordToSearch + "'target='_blank'>More Information</a>";
            }
        } else alert("There was an error accessing the dictionary, please try again.");
    };
    request1.send();
});
//Cute little tips
//create an array with different phrases
var tips = document.getElementById('tips');
var tips2 = document.getElementById('tips2');
var tipList = [
    'Stay Hydrated!',
    'Remember to take breaks',
    'You\'re smart!',
    'Take your time',
    'Study Hard',
    'Keep it up!',
    'Good work!'
];
window.onload = function() {
    tips.innerHTML = tipList[Math.floor(Math.random() * tipList.length)];
    tips2.innerHTML = tipList[Math.floor(Math.random() * tipList.length)];
};

},{"progressbar.js":"4E32u"}],"4E32u":[function(require,module,exports) {
module.exports = {
    // Higher level API, different shaped progress bars
    Line: require('./line'),
    Circle: require('./circle'),
    SemiCircle: require('./semicircle'),
    Square: require('./square'),
    // Lower level API to use any SVG path
    Path: require('./path'),
    // Base-class for creating new custom shapes
    // to be in line with the API of built-in shapes
    // Undocumented.
    Shape: require('./shape'),
    // Internal utils, undocumented.
    utils: require('./utils')
};

},{"./line":"4uRIl","./circle":"7iYMW","./semicircle":"47uYs","./square":"cwZY0","./path":"3h3DT","./shape":"25CzL","./utils":"4umgY"}],"4uRIl":[function(require,module,exports) {
// Line shaped progress bar
var Shape = require('./shape');
var utils = require('./utils');
var Line = function Line1(container, options) {
    this._pathTemplate = 'M 0,{center} L 100,{center}';
    Shape.apply(this, arguments);
};
Line.prototype = new Shape();
Line.prototype.constructor = Line;
Line.prototype._initializeSvg = function _initializeSvg(svg, opts) {
    svg.setAttribute('viewBox', '0 0 100 ' + opts.strokeWidth);
    svg.setAttribute('preserveAspectRatio', 'none');
};
Line.prototype._pathString = function _pathString(opts) {
    return utils.render(this._pathTemplate, {
        center: opts.strokeWidth / 2
    });
};
Line.prototype._trailString = function _trailString(opts) {
    return this._pathString(opts);
};
module.exports = Line;

},{"./shape":"25CzL","./utils":"4umgY"}],"25CzL":[function(require,module,exports) {
// Base object for different progress bar shapes
var Path = require('./path');
var utils = require('./utils');
var DESTROYED_ERROR = 'Object is destroyed';
var Shape = function Shape1(container, opts) {
    // Throw a better error if progress bars are not initialized with `new`
    // keyword
    if (!(this instanceof Shape1)) throw new Error('Constructor was called without new keyword');
    // Prevent calling constructor without parameters so inheritance
    // works correctly. To understand, this is how Shape is inherited:
    //
    //   Line.prototype = new Shape();
    //
    // We just want to set the prototype for Line.
    if (arguments.length === 0) return;
    // Default parameters for progress bar creation
    this._opts = utils.extend({
        color: '#555',
        strokeWidth: 1,
        trailColor: null,
        trailWidth: null,
        fill: null,
        text: {
            style: {
                color: null,
                position: 'absolute',
                left: '50%',
                top: '50%',
                padding: 0,
                margin: 0,
                transform: {
                    prefix: true,
                    value: 'translate(-50%, -50%)'
                }
            },
            autoStyleContainer: true,
            alignToBottom: true,
            value: null,
            className: 'progressbar-text'
        },
        svgStyle: {
            display: 'block',
            width: '100%'
        },
        warnings: false
    }, opts, true); // Use recursive extend
    // If user specifies e.g. svgStyle or text style, the whole object
    // should replace the defaults to make working with styles easier
    if (utils.isObject(opts) && opts.svgStyle !== undefined) this._opts.svgStyle = opts.svgStyle;
    if (utils.isObject(opts) && utils.isObject(opts.text) && opts.text.style !== undefined) this._opts.text.style = opts.text.style;
    var svgView = this._createSvgView(this._opts);
    var element;
    if (utils.isString(container)) element = document.querySelector(container);
    else element = container;
    if (!element) throw new Error('Container does not exist: ' + container);
    this._container = element;
    this._container.appendChild(svgView.svg);
    if (this._opts.warnings) this._warnContainerAspectRatio(this._container);
    if (this._opts.svgStyle) utils.setStyles(svgView.svg, this._opts.svgStyle);
    // Expose public attributes before Path initialization
    this.svg = svgView.svg;
    this.path = svgView.path;
    this.trail = svgView.trail;
    this.text = null;
    var newOpts = utils.extend({
        attachment: undefined,
        shape: this
    }, this._opts);
    this._progressPath = new Path(svgView.path, newOpts);
    if (utils.isObject(this._opts.text) && this._opts.text.value !== null) this.setText(this._opts.text.value);
};
Shape.prototype.animate = function animate(progress, opts, cb) {
    if (this._progressPath === null) throw new Error(DESTROYED_ERROR);
    this._progressPath.animate(progress, opts, cb);
};
Shape.prototype.stop = function stop() {
    if (this._progressPath === null) throw new Error(DESTROYED_ERROR);
    // Don't crash if stop is called inside step function
    if (this._progressPath === undefined) return;
    this._progressPath.stop();
};
Shape.prototype.pause = function pause() {
    if (this._progressPath === null) throw new Error(DESTROYED_ERROR);
    if (this._progressPath === undefined) return;
    if (!this._progressPath._tweenable) // It seems that we can't pause this
    return;
    this._progressPath._tweenable.pause();
};
Shape.prototype.resume = function resume() {
    if (this._progressPath === null) throw new Error(DESTROYED_ERROR);
    if (this._progressPath === undefined) return;
    if (!this._progressPath._tweenable) // It seems that we can't resume this
    return;
    this._progressPath._tweenable.resume();
};
Shape.prototype.destroy = function destroy() {
    if (this._progressPath === null) throw new Error(DESTROYED_ERROR);
    this.stop();
    this.svg.parentNode.removeChild(this.svg);
    this.svg = null;
    this.path = null;
    this.trail = null;
    this._progressPath = null;
    if (this.text !== null) {
        this.text.parentNode.removeChild(this.text);
        this.text = null;
    }
};
Shape.prototype.set = function set(progress) {
    if (this._progressPath === null) throw new Error(DESTROYED_ERROR);
    this._progressPath.set(progress);
};
Shape.prototype.value = function value() {
    if (this._progressPath === null) throw new Error(DESTROYED_ERROR);
    if (this._progressPath === undefined) return 0;
    return this._progressPath.value();
};
Shape.prototype.setText = function setText(newText) {
    if (this._progressPath === null) throw new Error(DESTROYED_ERROR);
    if (this.text === null) {
        // Create new text node
        this.text = this._createTextContainer(this._opts, this._container);
        this._container.appendChild(this.text);
    }
    // Remove previous text and add new
    if (utils.isObject(newText)) {
        utils.removeChildren(this.text);
        this.text.appendChild(newText);
    } else this.text.innerHTML = newText;
};
Shape.prototype._createSvgView = function _createSvgView(opts) {
    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    this._initializeSvg(svg, opts);
    var trailPath = null;
    // Each option listed in the if condition are 'triggers' for creating
    // the trail path
    if (opts.trailColor || opts.trailWidth) {
        trailPath = this._createTrail(opts);
        svg.appendChild(trailPath);
    }
    var path = this._createPath(opts);
    svg.appendChild(path);
    return {
        svg: svg,
        path: path,
        trail: trailPath
    };
};
Shape.prototype._initializeSvg = function _initializeSvg(svg, opts) {
    svg.setAttribute('viewBox', '0 0 100 100');
};
Shape.prototype._createPath = function _createPath(opts) {
    var pathString = this._pathString(opts);
    return this._createPathElement(pathString, opts);
};
Shape.prototype._createTrail = function _createTrail(opts) {
    // Create path string with original passed options
    var pathString = this._trailString(opts);
    // Prevent modifying original
    var newOpts = utils.extend({
    }, opts);
    // Defaults for parameters which modify trail path
    if (!newOpts.trailColor) newOpts.trailColor = '#eee';
    if (!newOpts.trailWidth) newOpts.trailWidth = newOpts.strokeWidth;
    newOpts.color = newOpts.trailColor;
    newOpts.strokeWidth = newOpts.trailWidth;
    // When trail path is set, fill must be set for it instead of the
    // actual path to prevent trail stroke from clipping
    newOpts.fill = null;
    return this._createPathElement(pathString, newOpts);
};
Shape.prototype._createPathElement = function _createPathElement(pathString, opts) {
    var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', pathString);
    path.setAttribute('stroke', opts.color);
    path.setAttribute('stroke-width', opts.strokeWidth);
    if (opts.fill) path.setAttribute('fill', opts.fill);
    else path.setAttribute('fill-opacity', '0');
    return path;
};
Shape.prototype._createTextContainer = function _createTextContainer(opts, container) {
    var textContainer = document.createElement('div');
    textContainer.className = opts.text.className;
    var textStyle = opts.text.style;
    if (textStyle) {
        if (opts.text.autoStyleContainer) container.style.position = 'relative';
        utils.setStyles(textContainer, textStyle);
        // Default text color to progress bar's color
        if (!textStyle.color) textContainer.style.color = opts.color;
    }
    this._initializeTextContainer(opts, container, textContainer);
    return textContainer;
};
// Give custom shapes possibility to modify text element
Shape.prototype._initializeTextContainer = function(opts, container, element) {
// By default, no-op
// Custom shapes should respect API options, such as text.style
};
Shape.prototype._pathString = function _pathString(opts) {
    throw new Error('Override this function for each progress bar');
};
Shape.prototype._trailString = function _trailString(opts) {
    throw new Error('Override this function for each progress bar');
};
Shape.prototype._warnContainerAspectRatio = function _warnContainerAspectRatio(container) {
    if (!this.containerAspectRatio) return;
    var computedStyle = window.getComputedStyle(container, null);
    var width = parseFloat(computedStyle.getPropertyValue('width'), 10);
    var height = parseFloat(computedStyle.getPropertyValue('height'), 10);
    if (!utils.floatEquals(this.containerAspectRatio, width / height)) {
        console.warn('Incorrect aspect ratio of container', '#' + container.id, 'detected:', computedStyle.getPropertyValue('width') + '(width)', '/', computedStyle.getPropertyValue('height') + '(height)', '=', width / height);
        console.warn('Aspect ratio of should be', this.containerAspectRatio);
    }
};
module.exports = Shape;

},{"./path":"3h3DT","./utils":"4umgY"}],"3h3DT":[function(require,module,exports) {
// Lower level API to animate any kind of svg path
var shifty = require('shifty');
var utils = require('./utils');
var Tweenable = shifty.Tweenable;
var EASING_ALIASES = {
    easeIn: 'easeInCubic',
    easeOut: 'easeOutCubic',
    easeInOut: 'easeInOutCubic'
};
var Path = function Path1(path, opts) {
    // Throw a better error if not initialized with `new` keyword
    if (!(this instanceof Path1)) throw new Error('Constructor was called without new keyword');
    // Default parameters for animation
    opts = utils.extend({
        delay: 0,
        duration: 800,
        easing: 'linear',
        from: {
        },
        to: {
        },
        step: function() {
        }
    }, opts);
    var element;
    if (utils.isString(path)) element = document.querySelector(path);
    else element = path;
    // Reveal .path as public attribute
    this.path = element;
    this._opts = opts;
    this._tweenable = null;
    // Set up the starting positions
    var length = this.path.getTotalLength();
    this.path.style.strokeDasharray = length + ' ' + length;
    this.set(0);
};
Path.prototype.value = function value() {
    var offset = this._getComputedDashOffset();
    var length = this.path.getTotalLength();
    var progress = 1 - offset / length;
    // Round number to prevent returning very small number like 1e-30, which
    // is practically 0
    return parseFloat(progress.toFixed(6), 10);
};
Path.prototype.set = function set(progress) {
    this.stop();
    this.path.style.strokeDashoffset = this._progressToOffset(progress);
    var step = this._opts.step;
    if (utils.isFunction(step)) {
        var easing = this._easing(this._opts.easing);
        var values = this._calculateTo(progress, easing);
        var reference = this._opts.shape || this;
        step(values, reference, this._opts.attachment);
    }
};
Path.prototype.stop = function stop() {
    this._stopTween();
    this.path.style.strokeDashoffset = this._getComputedDashOffset();
};
// Method introduced here:
// http://jakearchibald.com/2013/animated-line-drawing-svg/
Path.prototype.animate = function animate(progress, opts, cb) {
    opts = opts || {
    };
    if (utils.isFunction(opts)) {
        cb = opts;
        opts = {
        };
    }
    var passedOpts = utils.extend({
    }, opts);
    // Copy default opts to new object so defaults are not modified
    var defaultOpts = utils.extend({
    }, this._opts);
    opts = utils.extend(defaultOpts, opts);
    var shiftyEasing = this._easing(opts.easing);
    var values = this._resolveFromAndTo(progress, shiftyEasing, passedOpts);
    this.stop();
    // Trigger a layout so styles are calculated & the browser
    // picks up the starting position before animating
    this.path.getBoundingClientRect();
    var offset = this._getComputedDashOffset();
    var newOffset = this._progressToOffset(progress);
    var self = this;
    this._tweenable = new Tweenable();
    this._tweenable.tween({
        from: utils.extend({
            offset: offset
        }, values.from),
        to: utils.extend({
            offset: newOffset
        }, values.to),
        duration: opts.duration,
        delay: opts.delay,
        easing: shiftyEasing,
        step: function(state) {
            self.path.style.strokeDashoffset = state.offset;
            var reference = opts.shape || self;
            opts.step(state, reference, opts.attachment);
        }
    }).then(function(state) {
        if (utils.isFunction(cb)) cb();
    });
};
Path.prototype._getComputedDashOffset = function _getComputedDashOffset() {
    var computedStyle = window.getComputedStyle(this.path, null);
    return parseFloat(computedStyle.getPropertyValue('stroke-dashoffset'), 10);
};
Path.prototype._progressToOffset = function _progressToOffset(progress) {
    var length = this.path.getTotalLength();
    return length - progress * length;
};
// Resolves from and to values for animation.
Path.prototype._resolveFromAndTo = function _resolveFromAndTo(progress, easing, opts) {
    if (opts.from && opts.to) return {
        from: opts.from,
        to: opts.to
    };
    return {
        from: this._calculateFrom(easing),
        to: this._calculateTo(progress, easing)
    };
};
// Calculate `from` values from options passed at initialization
Path.prototype._calculateFrom = function _calculateFrom(easing) {
    return shifty.interpolate(this._opts.from, this._opts.to, this.value(), easing);
};
// Calculate `to` values from options passed at initialization
Path.prototype._calculateTo = function _calculateTo(progress, easing) {
    return shifty.interpolate(this._opts.from, this._opts.to, progress, easing);
};
Path.prototype._stopTween = function _stopTween() {
    if (this._tweenable !== null) {
        this._tweenable.stop();
        this._tweenable = null;
    }
};
Path.prototype._easing = function _easing(easing) {
    if (EASING_ALIASES.hasOwnProperty(easing)) return EASING_ALIASES[easing];
    return easing;
};
module.exports = Path;

},{"shifty":"2TuSX","./utils":"4umgY"}],"2TuSX":[function(require,module,exports) {
(function(t, n) {
    "object" == typeof exports && "object" == typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define("shifty", [], n) : "object" == typeof exports ? exports.shifty = n() : t.shifty = n();
})(self, function() {
    return (function() {
        var t = {
            720: function(t1, n, e) {
                e.r(n), e.d(n, {
                    Scene: function() {
                        return Xt;
                    },
                    Tweenable: function() {
                        return _t;
                    },
                    interpolate: function() {
                        return Wt;
                    },
                    processTweens: function() {
                        return ft;
                    },
                    setBezierFunction: function() {
                        return Yt;
                    },
                    tween: function() {
                        return yt;
                    },
                    unsetBezierFunction: function() {
                        return Zt;
                    }
                });
                var r = {
                };
                e.r(r), e.d(r, {
                    bounce: function() {
                        return D;
                    },
                    bouncePast: function() {
                        return q;
                    },
                    easeFrom: function() {
                        return B;
                    },
                    easeFromTo: function() {
                        return Q;
                    },
                    easeInBack: function() {
                        return T;
                    },
                    easeInCirc: function() {
                        return j;
                    },
                    easeInCubic: function() {
                        return c;
                    },
                    easeInExpo: function() {
                        return w;
                    },
                    easeInOutBack: function() {
                        return F;
                    },
                    easeInOutCirc: function() {
                        return P;
                    },
                    easeInOutCubic: function() {
                        return l;
                    },
                    easeInOutExpo: function() {
                        return S;
                    },
                    easeInOutQuad: function() {
                        return s;
                    },
                    easeInOutQuart: function() {
                        return v;
                    },
                    easeInOutQuint: function() {
                        return d;
                    },
                    easeInOutSine: function() {
                        return b;
                    },
                    easeInQuad: function() {
                        return o;
                    },
                    easeInQuart: function() {
                        return h;
                    },
                    easeInQuint: function() {
                        return _;
                    },
                    easeInSine: function() {
                        return m;
                    },
                    easeOutBack: function() {
                        return E;
                    },
                    easeOutBounce: function() {
                        return M;
                    },
                    easeOutCirc: function() {
                        return k;
                    },
                    easeOutCubic: function() {
                        return f;
                    },
                    easeOutExpo: function() {
                        return O;
                    },
                    easeOutQuad: function() {
                        return a;
                    },
                    easeOutQuart: function() {
                        return p;
                    },
                    easeOutQuint: function() {
                        return y;
                    },
                    easeOutSine: function() {
                        return g;
                    },
                    easeTo: function() {
                        return N;
                    },
                    elastic: function() {
                        return x;
                    },
                    linear: function() {
                        return u;
                    },
                    swingFrom: function() {
                        return I;
                    },
                    swingFromTo: function() {
                        return A;
                    },
                    swingTo: function() {
                        return C;
                    }
                });
                var i = {
                };
                e.r(i), e.d(i, {
                    afterTween: function() {
                        return Nt;
                    },
                    beforeTween: function() {
                        return Bt;
                    },
                    doesApply: function() {
                        return qt;
                    },
                    tweenCreated: function() {
                        return Qt;
                    }
                });
                var u = function(t2) {
                    return t2;
                }, o = function(t2) {
                    return Math.pow(t2, 2);
                }, a = function(t2) {
                    return -(Math.pow(t2 - 1, 2) - 1);
                }, s = function(t2) {
                    return (t2 /= 0.5) < 1 ? 0.5 * Math.pow(t2, 2) : -0.5 * ((t2 -= 2) * t2 - 2);
                }, c = function(t2) {
                    return Math.pow(t2, 3);
                }, f = function(t2) {
                    return Math.pow(t2 - 1, 3) + 1;
                }, l = function(t2) {
                    return (t2 /= 0.5) < 1 ? 0.5 * Math.pow(t2, 3) : 0.5 * (Math.pow(t2 - 2, 3) + 2);
                }, h = function(t2) {
                    return Math.pow(t2, 4);
                }, p = function(t2) {
                    return -(Math.pow(t2 - 1, 4) - 1);
                }, v = function(t2) {
                    return (t2 /= 0.5) < 1 ? 0.5 * Math.pow(t2, 4) : -0.5 * ((t2 -= 2) * Math.pow(t2, 3) - 2);
                }, _ = function(t2) {
                    return Math.pow(t2, 5);
                }, y = function(t2) {
                    return Math.pow(t2 - 1, 5) + 1;
                }, d = function(t2) {
                    return (t2 /= 0.5) < 1 ? 0.5 * Math.pow(t2, 5) : 0.5 * (Math.pow(t2 - 2, 5) + 2);
                }, m = function(t2) {
                    return 1 - Math.cos(t2 * (Math.PI / 2));
                }, g = function(t2) {
                    return Math.sin(t2 * (Math.PI / 2));
                }, b = function(t2) {
                    return -0.5 * (Math.cos(Math.PI * t2) - 1);
                }, w = function(t2) {
                    return 0 === t2 ? 0 : Math.pow(2, 10 * (t2 - 1));
                }, O = function(t2) {
                    return 1 === t2 ? 1 : 1 - Math.pow(2, -10 * t2);
                }, S = function(t2) {
                    return 0 === t2 ? 0 : 1 === t2 ? 1 : (t2 /= 0.5) < 1 ? 0.5 * Math.pow(2, 10 * (t2 - 1)) : 0.5 * (2 - Math.pow(2, -10 * --t2));
                }, j = function(t2) {
                    return -(Math.sqrt(1 - t2 * t2) - 1);
                }, k = function(t2) {
                    return Math.sqrt(1 - Math.pow(t2 - 1, 2));
                }, P = function(t2) {
                    return (t2 /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - t2 * t2) - 1) : 0.5 * (Math.sqrt(1 - (t2 -= 2) * t2) + 1);
                }, M = function(t2) {
                    return t2 < 1 / 2.75 ? 7.5625 * t2 * t2 : t2 < 2 / 2.75 ? 7.5625 * (t2 -= 1.5 / 2.75) * t2 + 0.75 : t2 < 2.5 / 2.75 ? 7.5625 * (t2 -= 2.25 / 2.75) * t2 + 0.9375 : 7.5625 * (t2 -= 2.625 / 2.75) * t2 + 0.984375;
                }, T = function(t2) {
                    var n1 = 1.70158;
                    return t2 * t2 * ((n1 + 1) * t2 - n1);
                }, E = function(t2) {
                    var n1 = 1.70158;
                    return (t2 -= 1) * t2 * ((n1 + 1) * t2 + n1) + 1;
                }, F = function(t2) {
                    var n1 = 1.70158;
                    return (t2 /= 0.5) < 1 ? t2 * t2 * ((1 + (n1 *= 1.525)) * t2 - n1) * 0.5 : 0.5 * ((t2 -= 2) * t2 * ((1 + (n1 *= 1.525)) * t2 + n1) + 2);
                }, x = function(t2) {
                    return -1 * Math.pow(4, -8 * t2) * Math.sin((6 * t2 - 1) * (2 * Math.PI) / 2) + 1;
                }, A = function(t2) {
                    var n1 = 1.70158;
                    return (t2 /= 0.5) < 1 ? t2 * t2 * ((1 + (n1 *= 1.525)) * t2 - n1) * 0.5 : 0.5 * ((t2 -= 2) * t2 * ((1 + (n1 *= 1.525)) * t2 + n1) + 2);
                }, I = function(t2) {
                    var n1 = 1.70158;
                    return t2 * t2 * ((n1 + 1) * t2 - n1);
                }, C = function(t2) {
                    var n1 = 1.70158;
                    return (t2 -= 1) * t2 * ((n1 + 1) * t2 + n1) + 1;
                }, D = function(t2) {
                    return t2 < 1 / 2.75 ? 7.5625 * t2 * t2 : t2 < 2 / 2.75 ? 7.5625 * (t2 -= 1.5 / 2.75) * t2 + 0.75 : t2 < 2.5 / 2.75 ? 7.5625 * (t2 -= 2.25 / 2.75) * t2 + 0.9375 : 7.5625 * (t2 -= 2.625 / 2.75) * t2 + 0.984375;
                }, q = function(t2) {
                    return t2 < 1 / 2.75 ? 7.5625 * t2 * t2 : t2 < 2 / 2.75 ? 2 - (7.5625 * (t2 -= 1.5 / 2.75) * t2 + 0.75) : t2 < 2.5 / 2.75 ? 2 - (7.5625 * (t2 -= 2.25 / 2.75) * t2 + 0.9375) : 2 - (7.5625 * (t2 -= 2.625 / 2.75) * t2 + 0.984375);
                }, Q = function(t2) {
                    return (t2 /= 0.5) < 1 ? 0.5 * Math.pow(t2, 4) : -0.5 * ((t2 -= 2) * Math.pow(t2, 3) - 2);
                }, B = function(t2) {
                    return Math.pow(t2, 4);
                }, N = function(t2) {
                    return Math.pow(t2, 0.25);
                };
                function R(t2, n1) {
                    if (!(t2 instanceof n1)) throw new TypeError("Cannot call a class as a function");
                }
                function z(t2, n1) {
                    for(var e1 = 0; e1 < n1.length; e1++){
                        var r1 = n1[e1];
                        r1.enumerable = r1.enumerable || false, r1.configurable = true, "value" in r1 && (r1.writable = true), Object.defineProperty(t2, r1.key, r1);
                    }
                }
                function L(t2) {
                    return (L = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t3) {
                        return typeof t3;
                    } : function(t3) {
                        return t3 && "function" == typeof Symbol && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
                    })(t2);
                }
                function U(t2, n1) {
                    var e1 = Object.keys(t2);
                    if (Object.getOwnPropertySymbols) {
                        var r2 = Object.getOwnPropertySymbols(t2);
                        n1 && (r2 = r2.filter(function(n2) {
                            return Object.getOwnPropertyDescriptor(t2, n2).enumerable;
                        })), e1.push.apply(e1, r2);
                    }
                    return e1;
                }
                function V(t2) {
                    for(var n1 = 1; n1 < arguments.length; n1++){
                        var e1 = null != arguments[n1] ? arguments[n1] : {
                        };
                        n1 % 2 ? U(Object(e1), true).forEach(function(n2) {
                            W(t2, n2, e1[n2]);
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t2, Object.getOwnPropertyDescriptors(e1)) : U(Object(e1)).forEach(function(n2) {
                            Object.defineProperty(t2, n2, Object.getOwnPropertyDescriptor(e1, n2));
                        });
                    }
                    return t2;
                }
                function W(t2, n1, e2) {
                    return n1 in t2 ? Object.defineProperty(t2, n1, {
                        value: e2,
                        enumerable: true,
                        configurable: true,
                        writable: true
                    }) : t2[n1] = e2, t2;
                }
                var $, G, H, J = "linear", K = "undefined" != typeof window ? window : e.g, X = "afterTween", Y = "afterTweenEnd", Z = "beforeTween", tt = "tweenCreated", nt = "function", et = "string", rt = K.requestAnimationFrame || K.webkitRequestAnimationFrame || K.oRequestAnimationFrame || K.msRequestAnimationFrame || K.mozCancelRequestAnimationFrame && K.mozRequestAnimationFrame || setTimeout, it = function() {
                }, ut = null, ot = null, at = V({
                }, r), st = function(t2, n1, e2, r3, i1, u1, o1) {
                    var a1, s1, c1, f1 = t2 < u1 ? 0 : (t2 - u1) / i1, l1 = false;
                    for(var h1 in o1 && o1.call && (l1 = true, a1 = o1(f1)), n1)l1 || (a1 = ((s1 = o1[h1]).call ? s1 : at[s1])(f1)), c1 = e2[h1], n1[h1] = c1 + (r3[h1] - c1) * a1;
                    return n1;
                }, ct = function(t2, n1) {
                    var e2 = t2._timestamp, r3 = t2._currentState, i1 = t2._delay;
                    if (!(n1 < e2 + i1)) {
                        var u1 = t2._duration, o1 = t2._targetState, a1 = e2 + i1 + u1, s1 = n1 > a1 ? a1 : n1, c1 = s1 >= a1, f1 = u1 - (a1 - s1), l1 = t2._filters.length > 0;
                        if (c1) return t2._render(o1, t2._data, f1), t2.stop(true);
                        l1 && t2._applyFilter(Z), s1 < e2 + i1 ? e2 = u1 = s1 = 1 : e2 += i1, st(s1, r3, t2._originalState, o1, u1, e2, t2._easing), l1 && t2._applyFilter(X), t2._render(r3, t2._data, f1);
                    }
                }, ft = function() {
                    for(var t2, n1 = _t.now(), e2 = ut; e2;)t2 = e2._next, ct(e2, n1), e2 = t2;
                }, lt = Date.now || function() {
                    return +new Date;
                }, ht = function(t2) {
                    var n1 = arguments.length > 1 && (void 0) !== arguments[1] ? arguments[1] : J, e2 = arguments.length > 2 && (void 0) !== arguments[2] ? arguments[2] : {
                    }, r3 = L(n1);
                    if (at[n1]) return at[n1];
                    if (r3 === et || r3 === nt) for(var i1 in t2)e2[i1] = n1;
                    else for(var u2 in t2)e2[u2] = n1[u2] || J;
                    return e2;
                }, pt = function(t2) {
                    t2 === ut ? (ut = t2._next) ? ut._previous = null : ot = null : t2 === ot ? (ot = t2._previous) ? ot._next = null : ut = null : (G = t2._previous, H = t2._next, G._next = H, H._previous = G), t2._previous = t2._next = null;
                }, vt = "function" == typeof Promise ? Promise : null, _t = function() {
                    function t2() {
                        var n1 = arguments.length > 0 && (void 0) !== arguments[0] ? arguments[0] : {
                        }, e2 = arguments.length > 1 && (void 0) !== arguments[1] ? arguments[1] : void 0;
                        R(this, t2), this._config = {
                        }, this._data = {
                        }, this._delay = 0, this._filters = [], this._next = null, this._previous = null, this._timestamp = null, this._resolve = null, this._reject = null, this._currentState = n1 || {
                        }, this._originalState = {
                        }, this._targetState = {
                        }, this._start = it, this._render = it, this._promiseCtor = vt, e2 && this.setConfig(e2);
                    }
                    var n1, e2;
                    return n1 = t2, e2 = [
                        {
                            key: "_applyFilter",
                            value: function(t3) {
                                for(var n2 = this._filters.length; n2 > 0; n2--){
                                    var e3 = this._filters[n2 - n2][t3];
                                    e3 && e3(this);
                                }
                            }
                        },
                        {
                            key: "tween",
                            value: function() {
                                var n2 = arguments.length > 0 && (void 0) !== arguments[0] ? arguments[0] : void 0;
                                return this._isPlaying && this.stop(), !n2 && this._config || this.setConfig(n2), this._pausedAtTime = null, this._timestamp = t2.now(), this._start(this.get(), this._data), this._delay && this._render(this._currentState, this._data, 0), this._resume(this._timestamp);
                            }
                        },
                        {
                            key: "setConfig",
                            value: function() {
                                var n2 = arguments.length > 0 && (void 0) !== arguments[0] ? arguments[0] : {
                                }, e4 = this._config;
                                for(var r3 in n2)e4[r3] = n2[r3];
                                var i1 = e4.promise, u2 = (void 0) === i1 ? this._promiseCtor : i1, o2 = e4.start, a2 = (void 0) === o2 ? it : o2, s2 = e4.finish, c2 = e4.render, f2 = (void 0) === c2 ? this._config.step || it : c2, l2 = e4.step, h1 = (void 0) === l2 ? it : l2;
                                this._data = e4.data || e4.attachment || this._data, this._isPlaying = false, this._pausedAtTime = null, this._scheduleId = null, this._delay = n2.delay || 0, this._start = a2, this._render = f2 || h1, this._duration = e4.duration || 500, this._promiseCtor = u2, s2 && (this._resolve = s2);
                                var p1 = n2.from, v1 = n2.to, _1 = (void 0) === v1 ? {
                                } : v1, y1 = this._currentState, d1 = this._originalState, m1 = this._targetState;
                                for(var g1 in p1)y1[g1] = p1[g1];
                                var b1 = false;
                                for(var w1 in y1){
                                    var O1 = y1[w1];
                                    b1 || L(O1) !== et || (b1 = true), d1[w1] = O1, m1[w1] = _1.hasOwnProperty(w1) ? _1[w1] : O1;
                                }
                                if (this._easing = ht(this._currentState, e4.easing, this._easing), this._filters.length = 0, b1) {
                                    for(var S1 in t2.filters)t2.filters[S1].doesApply(this) && this._filters.push(t2.filters[S1]);
                                    this._applyFilter(tt);
                                }
                                return this;
                            }
                        },
                        {
                            key: "then",
                            value: function(t3, n2) {
                                var e4 = this;
                                return this._promise = new this._promiseCtor(function(t4, n3) {
                                    e4._resolve = t4, e4._reject = n3;
                                }), this._promise.then(t3, n2);
                            }
                        },
                        {
                            key: "catch",
                            value: function(t3) {
                                return this.then().catch(t3);
                            }
                        },
                        {
                            key: "get",
                            value: function() {
                                return V({
                                }, this._currentState);
                            }
                        },
                        {
                            key: "set",
                            value: function(t3) {
                                this._currentState = t3;
                            }
                        },
                        {
                            key: "pause",
                            value: function() {
                                if (this._isPlaying) return this._pausedAtTime = t2.now(), this._isPlaying = false, pt(this), this;
                            }
                        },
                        {
                            key: "resume",
                            value: function() {
                                return this._resume();
                            }
                        },
                        {
                            key: "_resume",
                            value: function() {
                                var n2 = arguments.length > 0 && (void 0) !== arguments[0] ? arguments[0] : t2.now();
                                return null === this._timestamp ? this.tween() : this._isPlaying ? this._promise : (this._pausedAtTime && (this._timestamp += n2 - this._pausedAtTime, this._pausedAtTime = null), this._isPlaying = true, null === ut ? (ut = this, ot = this) : (this._previous = ot, ot._next = this, ot = this), this);
                            }
                        },
                        {
                            key: "seek",
                            value: function(n2) {
                                n2 = Math.max(n2, 0);
                                var e4 = t2.now();
                                return this._timestamp + n2 === 0 || (this._timestamp = e4 - n2, ct(this, e4)), this;
                            }
                        },
                        {
                            key: "stop",
                            value: function() {
                                var t3 = arguments.length > 0 && (void 0) !== arguments[0] && arguments[0];
                                if (!this._isPlaying) return this;
                                this._isPlaying = false, pt(this);
                                var n2 = this._filters.length > 0;
                                t3 && (n2 && this._applyFilter(Z), st(1, this._currentState, this._originalState, this._targetState, 1, 0, this._easing), n2 && (this._applyFilter(X), this._applyFilter(Y))), this._resolve && this._resolve({
                                    data: this._data,
                                    state: this._currentState,
                                    tweenable: this
                                }), this._resolve = null, this._reject = null;
                                var e4 = this._currentState, r3 = this._originalState, i1 = this._targetState;
                                for(var u2 in e4)r3[u2] = i1[u2] = e4[u2];
                                return this;
                            }
                        },
                        {
                            key: "cancel",
                            value: function() {
                                var t3 = arguments.length > 0 && (void 0) !== arguments[0] && arguments[0], n2 = this._currentState, e4 = this._data, r3 = this._isPlaying;
                                return r3 ? (this._reject && this._reject({
                                    data: e4,
                                    state: n2,
                                    tweenable: this
                                }), this._resolve = null, this._reject = null, this.stop(t3)) : this;
                            }
                        },
                        {
                            key: "isPlaying",
                            value: function() {
                                return this._isPlaying;
                            }
                        },
                        {
                            key: "setScheduleFunction",
                            value: function(n2) {
                                t2.setScheduleFunction(n2);
                            }
                        },
                        {
                            key: "data",
                            value: function() {
                                var t3 = arguments.length > 0 && (void 0) !== arguments[0] ? arguments[0] : null;
                                return t3 && (this._data = V({
                                }, t3)), this._data;
                            }
                        },
                        {
                            key: "dispose",
                            value: function() {
                                for(var t3 in this)delete this[t3];
                            }
                        }
                    ], z(n1.prototype, e2), t2;
                }();
                function yt() {
                    var t2 = arguments.length > 0 && (void 0) !== arguments[0] ? arguments[0] : {
                    }, n1 = new _t;
                    return n1.tween(t2), n1.tweenable = n1, n1;
                }
                W(_t, "now", function() {
                    return $;
                }), _t.setScheduleFunction = function(t2) {
                    return rt = t2;
                }, _t.formulas = at, _t.filters = {
                }, (function t2() {
                    $ = lt(), rt.call(K, t2, 16.666666666666668), ft();
                })();
                var dt, mt, gt = /(\d|-|\.)/, bt = /([^\-0-9.]+)/g, wt = /[0-9.-]+/g, Ot = (dt = wt.source, mt = /,\s*/.source, new RegExp("rgb\\(".concat(dt).concat(mt).concat(dt).concat(mt).concat(dt, "\\)"), "g")), St = /^.*\(/, jt = /#([0-9]|[a-f]){3,6}/gi, kt = "VAL", Pt = function(t3, n1) {
                    return t3.map(function(t4, e2) {
                        return "_".concat(n1, "_").concat(e2);
                    });
                };
                function Mt(t3) {
                    return parseInt(t3, 16);
                }
                var Tt = function(t3) {
                    var n1;
                    return "rgb(".concat((n1 = t3, 3 === (n1 = n1.replace(/#/, "")).length && (n1 = (n1 = n1.split(""))[0] + n1[0] + n1[1] + n1[1] + n1[2] + n1[2]), [
                        Mt(n1.substr(0, 2)),
                        Mt(n1.substr(2, 2)),
                        Mt(n1.substr(4, 2))
                    ]).join(","), ")");
                }, Et = function(t3, n1, e2) {
                    var r3 = n1.match(t3), i1 = n1.replace(t3, kt);
                    return r3 && r3.forEach(function(t4) {
                        return i1 = i1.replace(kt, e2(t4));
                    }), i1;
                }, Ft = function(t3) {
                    for(var n1 in t3){
                        var e2 = t3[n1];
                        "string" == typeof e2 && e2.match(jt) && (t3[n1] = Et(jt, e2, Tt));
                    }
                }, xt = function(t3) {
                    var n1 = t3.match(wt).map(Math.floor), e4 = t3.match(St)[0];
                    return "".concat(e4).concat(n1.join(","), ")");
                }, At = function(t3) {
                    return t3.match(wt);
                }, It = function(t3, n1) {
                    var e4 = {
                    };
                    return n1.forEach(function(n2) {
                        e4[n2] = t3[n2], delete t3[n2];
                    }), e4;
                }, Ct = function(t3, n1) {
                    return n1.map(function(n2) {
                        return t3[n2];
                    });
                }, Dt = function(t3, n1) {
                    return n1.forEach(function(n2) {
                        return t3 = t3.replace(kt, +n2.toFixed(4));
                    }), t3;
                }, qt = function(t3) {
                    for(var n1 in t3._currentState)if ("string" == typeof t3._currentState[n1]) return true;
                    return false;
                };
                function Qt(t3) {
                    var n1 = t3._currentState;
                    [
                        n1,
                        t3._originalState,
                        t3._targetState
                    ].forEach(Ft), t3._tokenData = (function(t4) {
                        var n2, e4, r3 = {
                        };
                        for(var i1 in t4){
                            var u2 = t4[i1];
                            "string" == typeof u2 && (r3[i1] = {
                                formatString: (n2 = u2, e4 = void 0, e4 = n2.match(bt), e4 ? (1 === e4.length || n2.charAt(0).match(gt)) && e4.unshift("") : e4 = [
                                    "",
                                    ""
                                ], e4.join(kt)),
                                chunkNames: Pt(At(u2), i1)
                            });
                        }
                        return r3;
                    })(n1);
                }
                function Bt(t3) {
                    var n1 = t3._currentState, e4 = t3._originalState, r3 = t3._targetState, i1 = t3._easing, u3 = t3._tokenData;
                    (function(t4, n2) {
                        var e5 = function(e6) {
                            var r4 = n2[e6].chunkNames, i2 = t4[e6];
                            if ("string" == typeof i2) {
                                var u4 = i2.split(" "), o2 = u4[u4.length - 1];
                                r4.forEach(function(n3, e7) {
                                    return t4[n3] = u4[e7] || o2;
                                });
                            } else r4.forEach(function(n3) {
                                return t4[n3] = i2;
                            });
                            delete t4[e6];
                        };
                        for(var r4 in n2)e5(r4);
                    })(i1, u3), [
                        n1,
                        e4,
                        r3
                    ].forEach(function(t4) {
                        return (function(t5, n2) {
                            var e5 = function(e6) {
                                At(t5[e6]).forEach(function(r4, i2) {
                                    return t5[n2[e6].chunkNames[i2]] = +r4;
                                }), delete t5[e6];
                            };
                            for(var r4 in n2)e5(r4);
                        })(t4, u3);
                    });
                }
                function Nt(t3) {
                    var n1 = t3._currentState, e4 = t3._originalState, r3 = t3._targetState, i1 = t3._easing, u3 = t3._tokenData;
                    [
                        n1,
                        e4,
                        r3
                    ].forEach(function(t4) {
                        return (function(t5, n2) {
                            for(var e5 in n2){
                                var r4 = n2[e5], i2 = r4.chunkNames, u5 = r4.formatString, o3 = Dt(u5, Ct(It(t5, i2), i2));
                                t5[e5] = Et(Ot, o3, xt);
                            }
                        })(t4, u3);
                    }), (function(t4, n2) {
                        for(var e5 in n2){
                            var r5 = n2[e5].chunkNames, i3 = t4[r5[0]];
                            t4[e5] = "string" == typeof i3 ? r5.map(function(n3) {
                                var e6 = t4[n3];
                                return delete t4[n3], e6;
                            }).join(" ") : i3;
                        }
                    })(i1, u3);
                }
                function Rt(t3, n1) {
                    var e4 = Object.keys(t3);
                    if (Object.getOwnPropertySymbols) {
                        var r3 = Object.getOwnPropertySymbols(t3);
                        n1 && (r3 = r3.filter(function(n2) {
                            return Object.getOwnPropertyDescriptor(t3, n2).enumerable;
                        })), e4.push.apply(e4, r3);
                    }
                    return e4;
                }
                function zt(t3) {
                    for(var n1 = 1; n1 < arguments.length; n1++){
                        var e4 = null != arguments[n1] ? arguments[n1] : {
                        };
                        n1 % 2 ? Rt(Object(e4), true).forEach(function(n2) {
                            Lt(t3, n2, e4[n2]);
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t3, Object.getOwnPropertyDescriptors(e4)) : Rt(Object(e4)).forEach(function(n2) {
                            Object.defineProperty(t3, n2, Object.getOwnPropertyDescriptor(e4, n2));
                        });
                    }
                    return t3;
                }
                function Lt(t3, n1, e5) {
                    return n1 in t3 ? Object.defineProperty(t3, n1, {
                        value: e5,
                        enumerable: true,
                        configurable: true,
                        writable: true
                    }) : t3[n1] = e5, t3;
                }
                var Ut = new _t, Vt = _t.filters, Wt = function(t3, n1, e5, r6) {
                    var i1 = arguments.length > 4 && (void 0) !== arguments[4] ? arguments[4] : 0, u3 = zt({
                    }, t3), o4 = ht(t3, r6);
                    for(var a2 in Ut._filters.length = 0, Ut.set({
                    }), Ut._currentState = u3, Ut._originalState = t3, Ut._targetState = n1, Ut._easing = o4, Vt)Vt[a2].doesApply(Ut) && Ut._filters.push(Vt[a2]);
                    Ut._applyFilter("tweenCreated"), Ut._applyFilter("beforeTween");
                    var s2 = st(e5, u3, t3, n1, 1, i1, o4);
                    return Ut._applyFilter("afterTween"), s2;
                };
                function $t(t3, n1) {
                    (null == n1 || n1 > t3.length) && (n1 = t3.length);
                    for(var e5 = 0, r6 = new Array(n1); e5 < n1; e5++)r6[e5] = t3[e5];
                    return r6;
                }
                function Gt(t3, n1) {
                    if (!(t3 instanceof n1)) throw new TypeError("Cannot call a class as a function");
                }
                function Ht(t3, n1) {
                    for(var e5 = 0; e5 < n1.length; e5++){
                        var r6 = n1[e5];
                        r6.enumerable = r6.enumerable || false, r6.configurable = true, "value" in r6 && (r6.writable = true), Object.defineProperty(t3, r6.key, r6);
                    }
                }
                function Jt(t3, n1) {
                    var e5 = n1.get(t3);
                    if (!e5) throw new TypeError("attempted to get private field on non-instance");
                    return e5.get ? e5.get.call(t3) : e5.value;
                }
                var Kt = new WeakMap, Xt = function() {
                    function t3() {
                        Gt(this, t3), Kt.set(this, {
                            writable: true,
                            value: []
                        });
                        for(var n1 = arguments.length, e5 = new Array(n1), r7 = 0; r7 < n1; r7++)e5[r7] = arguments[r7];
                        e5.forEach(this.add.bind(this));
                    }
                    var n1, e5;
                    return n1 = t3, e5 = [
                        {
                            key: "add",
                            value: function(t4) {
                                return Jt(this, Kt).push(t4), t4;
                            }
                        },
                        {
                            key: "remove",
                            value: function(t4) {
                                var n2 = Jt(this, Kt).indexOf(t4);
                                return ~n2 && Jt(this, Kt).splice(n2, 1), t4;
                            }
                        },
                        {
                            key: "empty",
                            value: function() {
                                return this.tweenables.map(this.remove.bind(this));
                            }
                        },
                        {
                            key: "isPlaying",
                            value: function() {
                                return Jt(this, Kt).some(function(t4) {
                                    return t4.isPlaying();
                                });
                            }
                        },
                        {
                            key: "play",
                            value: function() {
                                return Jt(this, Kt).forEach(function(t4) {
                                    return t4.tween();
                                }), this;
                            }
                        },
                        {
                            key: "pause",
                            value: function() {
                                return Jt(this, Kt).forEach(function(t4) {
                                    return t4.pause();
                                }), this;
                            }
                        },
                        {
                            key: "resume",
                            value: function() {
                                return Jt(this, Kt).forEach(function(t4) {
                                    return t4.resume();
                                }), this;
                            }
                        },
                        {
                            key: "stop",
                            value: function(t4) {
                                return Jt(this, Kt).forEach(function(n2) {
                                    return n2.stop(t4);
                                }), this;
                            }
                        },
                        {
                            key: "tweenables",
                            get: function() {
                                var t4;
                                return (function(t5) {
                                    if (Array.isArray(t5)) return $t(t5);
                                })(t4 = Jt(this, Kt)) || (function(t5) {
                                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t5)) return Array.from(t5);
                                })(t4) || (function(t5, n2) {
                                    if (t5) {
                                        if ("string" == typeof t5) return $t(t5, n2);
                                        var e6 = Object.prototype.toString.call(t5).slice(8, -1);
                                        return "Object" === e6 && t5.constructor && (e6 = t5.constructor.name), "Map" === e6 || "Set" === e6 ? Array.from(t5) : "Arguments" === e6 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e6) ? $t(t5, n2) : void 0;
                                    }
                                })(t4) || (function() {
                                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                })();
                            }
                        },
                        {
                            key: "promises",
                            get: function() {
                                return Jt(this, Kt).map(function(t4) {
                                    return t4.then();
                                });
                            }
                        }
                    ], Ht(n1.prototype, e5), t3;
                }();
                var Yt = function(t3, n1, e5, r7, i1) {
                    var u3 = function(t4, n2, e7, r8) {
                        return function(i4) {
                            var u6, o4, a2, s2, c2, f2, l2, h1, p1, v1, _1;
                            return f2 = 0, l2 = 0, h1 = 0, p1 = function(t5) {
                                return ((f2 * t5 + l2) * t5 + h1) * t5;
                            }, v1 = function(t5) {
                                return (3 * f2 * t5 + 2 * l2) * t5 + h1;
                            }, _1 = function(t5) {
                                return t5 >= 0 ? t5 : 0 - t5;
                            }, f2 = 1 - (h1 = 3 * (u6 = t4)) - (l2 = 3 * (e7 - u6) - h1), a2 = 1 - (c2 = 3 * (o4 = n2)) - (s2 = 3 * (r8 - o4) - c2), (function(t5) {
                                return ((a2 * t5 + s2) * t5 + c2) * t5;
                            })(function(t5, n3) {
                                var e8, r9, i5, u7, o5, a3;
                                for(i5 = t5, a3 = 0; a3 < 8; a3++){
                                    if (u7 = p1(i5) - t5, _1(u7) < n3) return i5;
                                    if (o5 = v1(i5), _1(o5) < 0.000001) break;
                                    i5 -= u7 / o5;
                                }
                                if ((i5 = t5) < (e8 = 0)) return e8;
                                if (i5 > (r9 = 1)) return r9;
                                for(; e8 < r9;){
                                    if (u7 = p1(i5), _1(u7 - t5) < n3) return i5;
                                    t5 > u7 ? e8 = i5 : r9 = i5, i5 = 0.5 * (r9 - e8) + e8;
                                }
                                return i5;
                            }(i4, function(t5) {
                                return 1 / (200 * t5);
                            }(1)));
                        };
                    }(n1, e5, r7, i1);
                    return u3.displayName = t3, u3.x1 = n1, u3.y1 = e5, u3.x2 = r7, u3.y2 = i1, _t.formulas[t3] = u3;
                }, Zt = function(t3) {
                    return delete _t.formulas[t3];
                };
                _t.filters.token = i;
            }
        }, n = {
        };
        function e5(r7) {
            if (n[r7]) return n[r7].exports;
            var i1 = n[r7] = {
                exports: {
                }
            };
            return t[r7](i1, i1.exports, e5), i1.exports;
        }
        return e5.d = function(t1, n1) {
            for(var r7 in n1)e5.o(n1, r7) && !e5.o(t1, r7) && Object.defineProperty(t1, r7, {
                enumerable: true,
                get: n1[r7]
            });
        }, e5.g = (function() {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")();
            } catch (t1) {
                if ("object" == typeof window) return window;
            }
        })(), e5.o = function(t1, n1) {
            return Object.prototype.hasOwnProperty.call(t1, n1);
        }, e5.r = function(t1) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t1, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t1, "__esModule", {
                value: true
            });
        }, e5(720);
    })();
});

},{}],"4umgY":[function(require,module,exports) {
// Utility functions
var PREFIXES = 'Webkit Moz O ms'.split(' ');
var FLOAT_COMPARISON_EPSILON = 0.001;
// Copy all attributes from source object to destination object.
// destination object is mutated.
function extend(destination, source, recursive) {
    destination = destination || {
    };
    source = source || {
    };
    recursive = recursive || false;
    for(var attrName in source)if (source.hasOwnProperty(attrName)) {
        var destVal = destination[attrName];
        var sourceVal = source[attrName];
        if (recursive && isObject(destVal) && isObject(sourceVal)) destination[attrName] = extend(destVal, sourceVal, recursive);
        else destination[attrName] = sourceVal;
    }
    return destination;
}
// Renders templates with given variables. Variables must be surrounded with
// braces without any spaces, e.g. {variable}
// All instances of variable placeholders will be replaced with given content
// Example:
// render('Hello, {message}!', {message: 'world'})
function render(template, vars) {
    var rendered = template;
    for(var key in vars)if (vars.hasOwnProperty(key)) {
        var val = vars[key];
        var regExpString = '\\{' + key + '\\}';
        var regExp = new RegExp(regExpString, 'g');
        rendered = rendered.replace(regExp, val);
    }
    return rendered;
}
function setStyle(element, style, value) {
    var elStyle = element.style; // cache for performance
    for(var i = 0; i < PREFIXES.length; ++i){
        var prefix = PREFIXES[i];
        elStyle[prefix + capitalize(style)] = value;
    }
    elStyle[style] = value;
}
function setStyles(element, styles) {
    forEachObject(styles, function(styleValue, styleName) {
        // Allow disabling some individual styles by setting them
        // to null or undefined
        if (styleValue === null || styleValue === undefined) return;
        // If style's value is {prefix: true, value: '50%'},
        // Set also browser prefixed styles
        if (isObject(styleValue) && styleValue.prefix === true) setStyle(element, styleName, styleValue.value);
        else element.style[styleName] = styleValue;
    });
}
function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}
function isString(obj) {
    return typeof obj === 'string' || obj instanceof String;
}
function isFunction(obj) {
    return typeof obj === 'function';
}
function isArray(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
}
// Returns true if `obj` is object as in {a: 1, b: 2}, not if it's function or
// array
function isObject(obj) {
    if (isArray(obj)) return false;
    var type = typeof obj;
    return type === 'object' && !!obj;
}
function forEachObject(object, callback) {
    for(var key in object)if (object.hasOwnProperty(key)) {
        var val = object[key];
        callback(val, key);
    }
}
function floatEquals(a, b) {
    return Math.abs(a - b) < FLOAT_COMPARISON_EPSILON;
}
// https://coderwall.com/p/nygghw/don-t-use-innerhtml-to-empty-dom-elements
function removeChildren(el) {
    while(el.firstChild)el.removeChild(el.firstChild);
}
module.exports = {
    extend: extend,
    render: render,
    setStyle: setStyle,
    setStyles: setStyles,
    capitalize: capitalize,
    isString: isString,
    isFunction: isFunction,
    isObject: isObject,
    forEachObject: forEachObject,
    floatEquals: floatEquals,
    removeChildren: removeChildren
};

},{}],"7iYMW":[function(require,module,exports) {
// Circle shaped progress bar
var Shape = require('./shape');
var utils = require('./utils');
var Circle = function Circle1(container, options) {
    // Use two arcs to form a circle
    // See this answer http://stackoverflow.com/a/10477334/1446092
    this._pathTemplate = "M 50,50 m 0,-{radius} a {radius},{radius} 0 1 1 0,{2radius} a {radius},{radius} 0 1 1 0,-{2radius}";
    this.containerAspectRatio = 1;
    Shape.apply(this, arguments);
};
Circle.prototype = new Shape();
Circle.prototype.constructor = Circle;
Circle.prototype._pathString = function _pathString(opts) {
    var widthOfWider = opts.strokeWidth;
    if (opts.trailWidth && opts.trailWidth > opts.strokeWidth) widthOfWider = opts.trailWidth;
    var r = 50 - widthOfWider / 2;
    return utils.render(this._pathTemplate, {
        radius: r,
        '2radius': r * 2
    });
};
Circle.prototype._trailString = function _trailString(opts) {
    return this._pathString(opts);
};
module.exports = Circle;

},{"./shape":"25CzL","./utils":"4umgY"}],"47uYs":[function(require,module,exports) {
// Semi-SemiCircle shaped progress bar
var Shape = require('./shape');
var Circle = require('./circle');
var utils = require('./utils');
var SemiCircle = function SemiCircle1(container, options) {
    // Use one arc to form a SemiCircle
    // See this answer http://stackoverflow.com/a/10477334/1446092
    this._pathTemplate = "M 50,50 m -{radius},0 a {radius},{radius} 0 1 1 {2radius},0";
    this.containerAspectRatio = 2;
    Shape.apply(this, arguments);
};
SemiCircle.prototype = new Shape();
SemiCircle.prototype.constructor = SemiCircle;
SemiCircle.prototype._initializeSvg = function _initializeSvg(svg, opts) {
    svg.setAttribute('viewBox', '0 0 100 50');
};
SemiCircle.prototype._initializeTextContainer = function _initializeTextContainer(opts, container, textContainer) {
    if (opts.text.style) {
        // Reset top style
        textContainer.style.top = 'auto';
        textContainer.style.bottom = '0';
        if (opts.text.alignToBottom) utils.setStyle(textContainer, 'transform', 'translate(-50%, 0)');
        else utils.setStyle(textContainer, 'transform', 'translate(-50%, 50%)');
    }
};
// Share functionality with Circle, just have different path
SemiCircle.prototype._pathString = Circle.prototype._pathString;
SemiCircle.prototype._trailString = Circle.prototype._trailString;
module.exports = SemiCircle;

},{"./shape":"25CzL","./circle":"7iYMW","./utils":"4umgY"}],"cwZY0":[function(require,module,exports) {
// Square shaped progress bar
// Note: Square is not core part of API anymore. It's left here
//       for reference. square is not included to the progressbar
//       build anymore
var Shape = require('./shape');
var utils = require('./utils');
var Square = function Square1(container, options) {
    this._pathTemplate = "M 0,{halfOfStrokeWidth} L {width},{halfOfStrokeWidth} L {width},{width} L {halfOfStrokeWidth},{width} L {halfOfStrokeWidth},{strokeWidth}";
    this._trailTemplate = "M {startMargin},{halfOfStrokeWidth} L {width},{halfOfStrokeWidth} L {width},{width} L {halfOfStrokeWidth},{width} L {halfOfStrokeWidth},{halfOfStrokeWidth}";
    Shape.apply(this, arguments);
};
Square.prototype = new Shape();
Square.prototype.constructor = Square;
Square.prototype._pathString = function _pathString(opts) {
    var w = 100 - opts.strokeWidth / 2;
    return utils.render(this._pathTemplate, {
        width: w,
        strokeWidth: opts.strokeWidth,
        halfOfStrokeWidth: opts.strokeWidth / 2
    });
};
Square.prototype._trailString = function _trailString(opts) {
    var w = 100 - opts.strokeWidth / 2;
    return utils.render(this._trailTemplate, {
        width: w,
        strokeWidth: opts.strokeWidth,
        halfOfStrokeWidth: opts.strokeWidth / 2,
        startMargin: opts.strokeWidth / 2 - opts.trailWidth / 2
    });
};
module.exports = Square;

},{"./shape":"25CzL","./utils":"4umgY"}]},["7GifH","4OAbU"], "4OAbU", "parcelRequire3922")

//# sourceMappingURL=index.8a5bc16d.js.map
