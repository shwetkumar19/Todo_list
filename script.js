const inputField = document.querySelector(".input-field textarea"),
  todoLists = document.querySelector(".todoLists"),
  pendingNum = document.querySelector(".pending-num"),
  clearButton = document.querySelector(".clear-button");

// function for  adding, deleting and checking-unchecking the task
function allTasks() {
  let tasks = document.querySelectorAll(".pending");
  // if there are pending tasks then pending num value be task length otherwise it will be zero
  pendingNum.textContent = tasks.length === 0 ? "no" : tasks.length;

  let allLists = document.querySelectorAll(".list");
  if (allLists.length > 0) {
    todoLists.style.marginTop = "20px";
    clearButton.style.pointerEvents = "auto";
    return;
  }
  todoLists.style.marginTop = "0px";
  clearButton.style.pointerEvents = "none";
}

// add task while we put val in text area and press enter

inputField.addEventListener("keyup", (e) => {
  let inputVal = inputField.value.trim();
  // removes the extra spaces

  // if enter button is clicked and inputed value length is greater than 0
  if (e.key === "Enter" && inputVal.length > 0) {
    let liTag = ` <li class="list pending" onclick="handleStatus(this)">
       <input type="checkbox">
       <span class="task">${inputVal}</span>
       <i class="uil uil-trash-alt" onclick="deleteTask(this)"></i>
   </li>`;
    todoLists.insertAdjacentHTML("beforeend", liTag);

    inputField.value = ""; // clear input field
    allTasks();
  }
});

// checking and unchecking the checkbox while we click on the task
function handleStatus(e) {
  const checkbox = e.querySelector("input");
  console.log(checkbox);
  checkbox.checked = checkbox.checked ? false : true;
  e.classList.toggle("pending");
  allTasks();
}

// delete particular task on clicking delete icon
function deleteTask(e) {
  e.parentElement.remove(); // fetching parent element and remove it
  allTasks();
}

// clearing all tasks on clicking clear button
clearButton.addEventListener("click", () => {
  todoLists.innerHTML = "";
  allTasks();
});
