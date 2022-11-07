import Task from './task'

//List Object
const TaskList = function(assignedId, listName){
    const id = assignedId;
    let name = listName;
    let tasks = [];

    //To create and add a new task
    const addTask = function(text){
        const task = tasks.length == 0 ? Task(1, text) : Task(parseInt(tasks.length)+1, text);
        tasks.push(task);
    }

    //To add a task that already exists
    const addTaskCopy = function(task){
        tasks.push(task);
    }

    const removeTask = function(id){
        tasks = tasks.filter(task => task.getId() != id);
    }

    const editTask = function(id, text){
        tasks.map(task => task.getId() == id ? task.setContent(text): task);
    }

    const editPriority = function(id, level){
        tasks.map(task => task.getId() == id ? task.setPriority(level) : task)
    }

    const toggleTask = function(id){
        tasks.map(task => task.getId() == id ? task.toggle(): task);
    }

    const editDueDate = function(id, date){
        tasks.map(task => task.getId() == id ? task.setDueDate(date) : task);
    }

    const getTasks = function(){
        return tasks;
    }

    const getId = function(){
        return id;
    }

    const setTasks = function(newTasks){
        tasks = newTasks;
    }

    //Debug
    const display = function(){ 
        console.log(`===${name}===`);
        getTasks().forEach(function(task){
            console.log(`task ${task.getId()}: ${task.getContent()} | status: ${task.getStatus()} | priority: ${task.getPriority()} | due date: ${task.getDueDate()}`)
        })
    }

    return {
        addTask,
        addTaskCopy,
        removeTask,
        editTask,
        toggleTask,
        editPriority,
        editDueDate,
        getId,
        getTasks,
        setTasks,
        display,
    }
}

export default TaskList;