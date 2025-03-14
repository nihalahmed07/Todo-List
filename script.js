function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    if (taskText === "") return;

    let li = document.createElement("li");
    li.innerHTML = `<span onclick="toggleTask(this)">${taskText}</span> <button class="delete-btn" onclick="removeTask(this)">✖</button>`;
    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
}

function removeTask(button) {
    button.parentElement.remove();
}

function toggleTask(span) {
    span.classList.toggle("completed");
}