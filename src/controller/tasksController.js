import App from "../model/app";
import Tasks from "../view/tasks";
import NewTask from "../view/new-task-modal";

const TasksController = function(){
    let isOpen = false;
    const toggle = function(){
        isOpen = !isOpen;
        NewTask.toggle();
    }
    const editTaskHandler = function(){
        const { details, taskList, date, priority } = EditTask.getData();
    }

    Tasks.create();
    Tasks.render(App.getTasks(), 'All', toggle);
}

export default TasksController;