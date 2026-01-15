// Array to store tasks
let tasks = [];

// Function to add a task
function addTask() {
    let taskInput = document.getElementById("taskInput").value;

    if (taskInput === "") {
        showMessage("Please enter a task", "error");
        return;
    }

    // Task object
    let task = {
        text: taskInput,
        done: false
    };

    tasks.push(task);
    document.getElementById("taskInput").value = "";

    showMessage("Task added successfully!", "success");
    showTasks();
}

// Function to show messages
// type = "success" or "error"
function showMessage(text, type) {
    if (type === "success") {
        let msgSuccess = document.getElementById("success");
        msgSuccess.innerHTML = text;

        setTimeout(() => msgSuccess.innerHTML = "", 5000);
    } else if (type === "error") {
        let msgError = document.getElementById("message");
        msgError.innerHTML = text;

        setTimeout(() => msgError.innerHTML = "", 5000);
    }
}

// Function to display tasks
function showTasks() {
    let list = document.getElementById("taskList");
    list.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {
        let li = document.createElement("li");

        if (tasks[i].done === true) {
            li.style.textDecoration = "line-through";
        }

        li.innerHTML =
            tasks[i].text +
            " <button onclick='markDone(" + i + ")'>Done</button>" +
            " <button style='background-color:red' onclick='deleteTask(" + i + ")'>Delete</button>";

        list.appendChild(li);
    }
}

// Function to mark task as done
function markDone(index) {
    tasks[index].done = true;
    showTasks();
}

// Function to delete a task
function deleteTask(index) {
    tasks.splice(index, 1);
    showTasks();
}
