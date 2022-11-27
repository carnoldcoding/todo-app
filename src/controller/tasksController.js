import App from "../model/app";
import Tasks from "../view/tasks";
import NewTask from "../view/new-task-modal";

const TasksController = function(){
    let isOpen = false;
    const toggle = function(){
        isOpen = !isOpen;
        NewTask.toggle();
    }

    Tasks.create();
    Tasks.render(App.getTasks(), 'All');
    NewTask.render(toggle, App.getCategories());
}

export default TasksController;