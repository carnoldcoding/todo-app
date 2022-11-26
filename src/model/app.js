import Task from './task'
import Category from './category'
import {format} from 'date-fns'

//List Object
const App = (function(){
    //Attributes
    let tasks = [];
    let categories = [];
    let currentCategoryId = 1;
    let currentTaskList = [];
    let darkMode = false;
    let sidebarOpen = false;

    //Methods
    const toggleDarkMode = function(){darkMode = !darkMode;}

    const getDarkMode = function(){return darkMode}

    //Task Methods
    const addTask = function(text){
        const task = tasks.length == 0 ? Task(1, text) : Task(parseInt(tasks[tasks.length-1].getId())+1, text);
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

    //Category Methods
    const addCategory = function(text){
        const category = categories.length == 0 ? Category(1, text) : Category(parseInt(categories[categories.length - 1].getId()+1), text);
        categories.push(category);
    }

    const removeCategory = function(categoryId){
        tasks.map(task => task.getCategoryId() == categoryId ? task.setCategoryId(-1) : task); //Might not need, safety precaution
        categories = categories.filter(category => category.getId() != categoryId);
    }

    const addCategoryToTask = function(categoryId, taskId){
        tasks.map(task => task.getId()==taskId ? task.setCategoryId(categoryId) : task);
    }

    const getCategories = function() {return categories}

    const setCurrentCategory = function(newCategoryId){currentCategoryId = newCategoryId}
    const setCurrentTaskList = function(taskList){
        if(taskList){
            currentTaskList = taskList;
        }else{
            currentTaskList = tasks.filter(task => task.getCategoryId() == currentCategoryId); 
        }
    }
    const getCurrentTaskList = function(){return currentTaskList}
    const getCurrentCategory = function(){return Object.create(categories.filter(category => category.getId() == currentCategoryId)[0])}

    //Sidebar
    const toggleSidebar = function(){
        sidebarOpen = !sidebarOpen;
    }
    const getSidebarStatus = function() { return sidebarOpen }
    //Debug

    const display = function(){
        //Print All Tasks
        console.log("==ALL==");
        getTasks().forEach(function(task){
            console.log(`task ${task.getId()}: ${task.getContent()} | status: ${task.getStatus()} | priority: ${task.getPriority()} | due date: ${task.getDueDate()} | categoryId: ${task.getCategoryId()}`)
        })
        //Print specific category's items
        categories.forEach(function(category){
            console.log(`==${category.getId()} ${category.getTitle()}==`)
            tasks.forEach(function(task){
                task.getCategoryId() == category.getId() ? console.log(task.getContent()) : null;
            });
        })
    }

    return {
        addTask,
        removeTask,
        editTask,
        toggleTask,
        editPriority,
        editDueDate,
        getTasks,
        getDarkMode,

        addCategory,
        removeCategory,
        addCategoryToTask,
        getCategories,
        setCurrentCategory,
        getCurrentCategory,
        setCurrentTaskList,
        getCurrentTaskList,

        toggleSidebar,
        getSidebarStatus,

        toggleDarkMode,
        display
    }
})();

export default App;