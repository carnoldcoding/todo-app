import Task from './task'

//List Object
const TaskList = function(){
    let tasks = [];

    const addTask = function(text){
        const task = tasks.length == 0 ? Task(1, text) : Task(parseInt(tasks.length)+1, text);
        tasks.push(task);
    }

    const removeTask = function(id){
        tasks = tasks.filter(task => task.getId() != id);
    }

    const editTask = function(id, text){
        tasks.map(task => task.getId() == id ? task.setContent(text): task);
    }

    const toggleTask = function(id){
        tasks.map(task => task.getId() == id ? task.toggle(): task);
    }

    const getTasks = function(){
        return tasks;
    }

    //Debug
    const display = function(){
        console.log("==TASKS==");
        getTasks().forEach(function(task){
            console.log(`task ${task.getId()}: ${task.getContent()} | status: ${task.getStatus()} | priority: ${task.getPriority()}`)
        })
    }

    return {
        addTask,
        removeTask,
        editTask,
        toggleTask,
        display
    }
}

export default TaskList;