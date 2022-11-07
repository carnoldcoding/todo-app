const Controller = function(model, view){
    //Display Initial Tasks
    view.render(model.getTasks());

    //event handlers
    const handleAddTask = function(text){
        model.addTask(text);
        view.render(model.getTasks());
    }

    const handleEditTask = function(id, text){
        model.editTask(id, text);
        view.render(model.getTasks());
    }

    const handleDeleteTask = function(id){
        model.removeTask(id);
        view.render(model.getTasks());
    }

    const handleToggleTask = function(id){
        model.toggleTask(id);
        view.render(model.getTasks());
    }

    //Bind
    view.bindAddTask(handleAddTask);
    view.bindDeleteTask(handleDeleteTask);
    view.bindToggleTask(handleToggleTask);
    view.bindEditTask(handleEditTask);

    model.addTask("Go to Work");
    view.render(model.getTasks());
}

export default Controller