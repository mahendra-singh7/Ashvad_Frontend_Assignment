function addTask() {

    let input = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    if (input.value === "") {
        alert("Please enter a task.");
        return;
    }

    let li = document.createElement("li");
    li.textContent = input.value;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";

    deleteBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    input.value = "";
}