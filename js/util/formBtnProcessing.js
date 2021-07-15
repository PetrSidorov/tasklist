var addFormBtnPressed = () => {
    // addNewTask();
    const newTask = addFormInput.value;
    const newDate = addFormDate.value;
    tasks.push({
        task: newTask,
        date: newDate,
    });

    localStorage.setItem('toDoListDB', JSON.stringify(tasks));
    const lastIndex = tasks.length - 1;
    app.innerHTML += getItem(lastIndex, false, tasks[lastIndex].task, tasks[lastIndex].date);
    fieldTask.value = '';
    fieldTask.focus();

}

var editFormBtnPressed = () => {
    const newSideBarValue = editInput.value;
    const newSideBarDate = editFormDate.value
    tasks[index].task = newSideBarValue;
    tasks[index].date = newSideBarDate;
    const element = hasItem.querySelector('.task');
    const date = hasItem.querySelector('.date');
    element.innerText = newSideBarValue;
    date.innerText = newSideBarDate;
}

export {
    editFormBtnPressed,
    addFormBtnPressed
} 