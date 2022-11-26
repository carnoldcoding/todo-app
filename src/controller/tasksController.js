import App from "../model/app";
import Tasks from "../view/tasks";

const TasksController = function(){
    Tasks.create();
    Tasks.render(App.getTasks(), App.getCategories()[0])
}

export default TasksController;