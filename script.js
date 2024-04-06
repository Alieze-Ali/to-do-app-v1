/* Ideas to implement
* Cap tasks at 5 
* Make an alert to finish 5 first
* Stretch: Toggle the button
* Change UI to "Barbie Theme"
- Icons
- Fonts
- Change Palette to Pink
*/


// create vars for form 
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// add addTask function
/*
* if input box in empty alert "You must write something"
* once we add a task create an li element
* display in list container
* clear the box 
*/
function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

// Clearing the tasks
listContainer.addEventListener("click", function(e){
    console.dir(e.target)
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    } else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// Storing info in Browser
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

//