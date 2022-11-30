const Task = function(details, date, priority, categoryId, id){
    //Properties
    let complete = false;

    //Methods
    const toggle = function(){complete = !complete}

    //Getters
    const getId = function(){return id}

    return{
        details,
        date,
        priority,
        categoryId,

        getId,
        toggle
    }
}

export default Task;