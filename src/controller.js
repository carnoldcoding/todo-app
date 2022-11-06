const Controller = function(model, view){
    //Display Initial Tasks
    view.render(model.getItems());

    //event handlers
    const handleAddTask = function(text){
        model.addItem(text);
        view.render(model.getItems());
    }

    const handleEditTask = function(id, text){
        model.editItem(id, text);
        view.render(model.getItems());
    }

    const handleDeleteTask = function(id){
        model.removeItem(id);
        view.render(model.getItems());
    }

    const handleToggleTask = function(id){
        model.toggleItem(id);
        view.render(model.getItems());
    }

    //Bind
    view.bindAddTask(handleAddTask);
    view.bindDeleteTask(handleDeleteTask);
    view.bindToggleTask(handleToggleTask);

    model.addItem("Go to Work");
    view.render(model.getItems());
}

export default Controller