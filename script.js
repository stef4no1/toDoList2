const form = document.getElementById('newTask');
const newTask = document.getElementById('newTaskInput');
const emptyTaskAlert = document.getElementById('emptyTask');
const tasksList = document.getElementById('tasks');

form.addEventListener("submit", e => {
    e.preventDefault();
    const task = newTask.value;
    if(!task){
        emptyTaskAlert.classList.remove("hidden");
        setTimeout(() => {
            emptyTaskAlert.classList.add("hidden");
        },3000);
        return;
    }

    const taskElement = document.createElement("div");
    taskElement.classList.add('container');

    const taskInput = document.createElement("input");
    taskInput.classList.add('taskInput');

    taskInput.value = task;
    taskInput.type = "text";

    taskInput.setAttribute("readonly", "readonly");

    taskElement.appendChild(taskInput);
    tasksList.appendChild(taskElement);

    const taskBtns = document.createElement("div");
    taskBtns.classList.add("btns");

    const editBtn = document.createElement("button");
    const editClass = editBtn.classList;
    editClass.add("edit");

    const scrapBtn = document.createElement("button");
    const scrapClass = scrapBtn.classList;
    scrapClass.add("scrap");

    const eraseBtn = document.createElement("button");
    const eraseClass = eraseBtn.classList;
    eraseClass.add("erase");

    taskBtns.appendChild(editBtn);
    taskBtns.appendChild(scrapBtn);
    taskBtns.appendChild(eraseBtn);
    taskElement.appendChild(taskBtns);

    editBtn.addEventListener("click", () => {
        editClass.toggle("edit");
        editClass.toggle("save");
        if(editClass.contains("save")) {
            taskInput.removeAttribute("readonly");
            taskInput.focus();
        }else {
            taskInput.setAttribute("readonly", "readonly");
        }
    });
    scrapBtn.addEventListener("click", () => {
        scrapClass.toggle("scrap");
        scrapClass.toggle("notDone");
        taskInput.classList.toggle("done");
    });

    eraseBtn.addEventListener("click", () => {
        tasksList.removeChild(taskElement);
    });
});