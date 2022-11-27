import App from "../model/app";
import Tasks from "../view/tasks";
import NewTask from "../view/new-task-modal";

const TasksController = function(){
    Tasks.create();
    Tasks.render(App.getTasks(), 'All');
    NewTask.render(App.getCategories());
}

export default TasksController;