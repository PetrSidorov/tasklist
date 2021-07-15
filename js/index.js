import { Render, getItem } from "./util/render.js";
import { getLocalStorage } from "./util/tasksLocalStorage.js";

export const app = document.getElementById('app');  
const btnNewTask = document.querySelector('.new-task');
const buttonAdd = document.getElementById('add');
const fieldTask = document.getElementById('task');
const dateTask = document.getElementById('dateTask');
const buttonEdit = document.getElementById('editBtn')
const sidebar = document.querySelector('.sidebar');
const closeSidebar = document.querySelector('.close-sidebar');
const editInput = document.getElementById('editFormInput');
const editFormDate = document.getElementById('editFormDate');
const addFormDate = document.getElementById('addFormDate');
const addFormBtn = document.getElementById('addFormBtn');
const addFormInput = document.getElementById('addFormInput');

let hasItem = null;
let index = null;
let tasks = getLocalStorage();

const render = new Render(app);

render.renderTasks(tasks);

closeSidebar.onclick = () => {
    sidebar.classList.remove('show');
}

btnNewTask.onclick = () => {
    sidebar.className = 'show add sidebar';
}

function generateId() {
    return Math.random().toString(36).substring(2, 9);
}

function addNewTask() {
    const newTask = fieldTask.value;
    const newDate = dateTask.value;
    tasks.push({
        id: generateId(),
        task: newTask,
        date: newDate,
        checked: false
    });

    localStorage.setItem('toDoListDB', JSON.stringify(tasks));
    // const lastIndex = tasks.length - 1;
    addTask(task);
    fieldTask.value = '';
    fieldTask.focus();
}

buttonAdd.onclick = () => {
    addNewTask();
}

fieldTask
    .addEventListener("keyup", function (event) {

        if (event.keyCode === 13) {
            buttonAdd.click();
        }
    });


addFormBtn.onclick = () => {
    addFormBtnPressed()
}

editFormBtn.onclick = () => {
    editFormBtnPressed()
}


// fix me
function addFormBtnPressed() {
    // addNewTask();
    const newTask = addFormInput.value;
    const newDate = addFormDate.value;
    tasks.push({
    id: generateId(),
        task: newTask,
        date: newDate,
    });

    localStorage.setItem('toDoListDB', JSON.stringify(tasks));
    // const lastIndex = tasks.length - 1;
    app.innerHTML += getItem(tasks[tasks.length - 1]);
    fieldTask.value = '';
    fieldTask.focus();

}

function editFormBtnPressed() {
    const newSideBarValue = editInput.value;
    const newSideBarDate = editFormDate.value
    tasks[index].task = newSideBarValue;
    tasks[index].date = newSideBarDate;
    const element = hasItem.querySelector('.task');
    const date = hasItem.querySelector('.date');
    element.innerText = newSideBarValue;
    date.innerText = newSideBarDate;
}


app.onclick = (event) => {

    hasItem = event.target.closest('h1');
    const id = hasItem.dataset.id;
    index = tasks.findIndex(e => e.id === id);

    switch (event.target.className) {
        case "delete": {
            tasks.splice(index, 1);
            hasItem.remove();
            localStorage.setItem('toDoListDB', JSON.stringify(tasks));
            break;
        }

        case "checkbox": {

            const element = hasItem.querySelector('.task');
            tasks[index].checked = event.target.checked;
            tasks[index].checked ? element.classList.add("checked") : element.classList.remove("checked");

            break;
        }

        case "edit": {
            const valueForEdit = tasks[index].task;
            const dateForEdit = tasks[index].date;
            editFormDate.value = dateForEdit;
            editInput.value = valueForEdit;
            sidebar.className = 'show edit sidebar';
            break;
        }

        case "edit_btn": {


            break;
        }
    }

}
