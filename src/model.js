//List Object
const TaskList = function(){
    let tasks = [];

    const addTask = function(text){
        const task = {
            id: tasks.length > 0 ? tasks.length + 1 : 1,
            content: text,
            complete: false
        }
        tasks.push(task);
    }

    const removeTask = function(id){
        tasks = tasks.filter(task => task.id != id);
    }

    const editTask = function(id, text){
        tasks = tasks.map(task => task.id == id ? Object.assign(task, {content: text}): task);
    }
    const toggleTask = function(id){
        tasks = tasks.map(task => task.id == id ? Object.assign(task , {complete: !task.complete}) : task);
    }

    const getTasks = function(){
        return tasks;
    }

    //Debug
    const display = function(){
        console.log("==TASKS==");
        getTasks().forEach(function(task){
            console.log(`task ${task.id}: ${task.content}`)
        })
    }

    return {
        addTask,
        removeTask,
        editTask,
        toggleTask,
        display,
        getTasks
    }
}

export default TaskList;