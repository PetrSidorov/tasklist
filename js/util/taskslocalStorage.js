const getLocalStorage = function () {
    const tasksLocalStorage = localStorage.getItem('toDoListDB');
        
    if (!tasksLocalStorage) {
        return [];
    }
    return JSON.parse(tasksLocalStorage);
}

export {
    getLocalStorage
} 