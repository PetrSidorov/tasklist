const getItem = (task) => {
    return `<h1 data-id="${task.id}" ><input class="checkbox" type="checkbox" ${task.checked ? 'checked' : ''}><span class="task">${task.task}</span><span class="date">${task.date}</span><div class="edit">&#9997;</div><div class="delete" style="color: red"> x</div></h1>`;
}


class Render {

    constructor(app) {
        this.app = app;
    }

    renderTasks(tasks) {
        for (let i = 0; i < tasks.length; i++) {
            this.app.innerHTML += getItem(tasks[i]);
        }

    }

    addTask(task) {
        this.app.innerHTML += getItem(task);
    }


}

export {
  Render,
  getItem
} 