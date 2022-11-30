import Task from "./task";

const App = (function(){
    //Properties
    let tasks = [];
    let categories = [];

    //Methods
    const addTask = function(details, date, priority, categoryId){
        const id = tasks.length == 0 ? 1 : tasks[tasks.length-1].getId() + 1;
        tasks.push(Task(details, date, priority, categoryId, id))
    }

    //Debugging
    const display = function(){
        console.log(`==INFO==`)
        tasks.forEach((task)=>{
            console.log(`Details: ${task.details} | Id: ${task.getId()} | CatId: ${task.categoryId} | Date: ${task.date} | `)
        })
    }
    return{
        addTask,
        display
    }
}());

export default App;