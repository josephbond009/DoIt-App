const numLeft = document.querySelector(".task-remain");
const numCompleted = document.querySelector(".task-complete");

const taskInput = document.querySelector("#add-tasks");

const category = document.querySelector("#categories");
const priority = document.querySelector("#priority");
const addTaskBtn = document.querySelector(".add-btn");

const taskSpace = document.querySelector("#tasks")
const noTasksUI = document.querySelector(".no-tasks")
const noTaskImg = document.querySelector(".task-img")
const noTaskParag = document.querySelector(".task-parag")

const clearTaskContainer = document.querySelector("#clear-task")
const clearTaskText = document.createElement("button")
clearTaskText.classList.add("clear-task-text")
// const boldClearTask = document.querySelector(".bold-clear-task")


// Task elements creation
const userTask = document.createElement("div") 
const checkTag = document.createElement("div")
const checkBox = document.createElement("input")
checkBox.type = "checkbox"
checkBox.id = "myCheckBox"
checkBox.name = "taskCheckBox"
const tagDiv = document.createElement("div")
const tag = document.createElement("span")
const textClockDel = document.createElement("div")
const userTaskText = document.createElement("span")
const boldUserTaskText = document.createElement("b")
const deleteTask = document.createElement("img")



const taskList = [];



addTaskBtn.addEventListener("click", function () {
    if (!taskInput.value || taskInput.value.trim() === "") {
    } else {
        addNewTasks();
    }
});

taskInput.addEventListener("keydown", function (e) {

    if (e.key === "Enter") {
        if (!taskInput.value || taskInput.value.trim() === "") {

        } else {
            addNewTasks();
        }
    }
});

function addNewTasks() {
    taskList.push(taskInput.value);

    noTasksUI.style.display = "none"
    
    createTaskElements()

    // const userTaskText = document.createElement("p")
    // userTaskText.classList.add("user-task")
    // userTaskText.textContent = taskInput.value
    // userTask.append(userTaskText)

    
    taskInput.value = "";
}

const createTaskElements = () => {
    const userTask = document.createElement("div");
    userTask.classList.add("user-task");

    const checkTag = document.createElement("div");
    checkTag.classList.add("check-tag");

    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.name = "taskCheckBox";
    checkBox.classList.add("task-checkbox")

    const tagDiv = document.createElement("div");
    const tag = document.createElement("span");
    tag.classList.add("tag");
    tag.textContent = category.value; // Change this if category selection is needed
    tagDiv.append(tag);

    checkTag.append(checkBox);
    checkTag.append(tagDiv);

    const textClockDel = document.createElement("div");
    textClockDel.classList.add("parag-clock-del");

    const userTaskText = document.createElement("span");
    userTaskText.classList.add("task-text");
    const boldUserTaskText = document.createElement("b");
    boldUserTaskText.textContent = taskInput.value;
    userTaskText.append(boldUserTaskText);

    const deleteTask = document.createElement("img");
    deleteTask.src = "Images/icons8-trash-48.png";
    deleteTask.classList.add("del");

    textClockDel.append(userTaskText);
    textClockDel.append(deleteTask);

    userTask.append(checkTag);
    userTask.append(textClockDel);

    taskSpace.append(userTask);

    taskInput.value = "";
}

const removeTaskElements = () => {
    clearTaskContainer.classList.add("clear-task")
    clearTaskText.classList.add("clear-task-text")
    clearTaskText.style.backgroundColor = "#F8ECFE"
    clearTaskText.textContent = "Clear Selected task"
    clearTaskContainer.append(clearTaskText)
    clearTaskContainer.style.display = "block"
}

taskSpace.addEventListener("click", function (e) {
    if (e.target.classList.contains("del")) {
        e.target.closest(".user-task").remove();
        
    }
});

// checkBox.addEventListener("change", function () {
//     if (checkBox.checked) {
//         userTaskText.style.textDecoration = "line-through"; // Strike-through when checked
//         userTaskText.style.color = "gray"; // Optional: Change color for clarity
//     } else {
//         userTaskText.style.textDecoration = "none"; // Remove strike-through when unchecked
//         userTaskText.style.color = "black"; // Reset color
//     }
// });

taskSpace.addEventListener("change", function (e) {
    if (e.target.classList.contains("task-checkbox")) {
        const taskText = e.target.closest(".user-task").querySelector(".task-text");
        if (e.target.checked) {
            taskText.style.textDecoration = "line-through";
            taskText.style.color = "gray";
            removeTaskElements()
        } else {
            taskText.style.textDecoration = "none";
            taskText.style.color = "black";
        }
    }
});

clearTaskContainer.addEventListener("click", (e) => {
    const tasks = document.querySelectorAll(".user-task")

    for (task of tasks) {
        const checkBox = task.querySelector(".task-checkbox")
        if (checkBox.checked) {
            task.remove()
        }
    }

    clearTaskContainer.style.display = "none"
})


