import App from "../model/app";
import Tasks from "../view/tasks";
import EditTask from '../view/edit-task-modal';

const TasksController = function(){
    let isOpen = false;
    const toggle = function(){
        isOpen = !isOpen;
        EditTask.toggle();
    }
    const editTaskHandler = function(){
        const { details, taskList, date, priority } = EditTask.getData();
    }

    Tasks.create();
    Tasks.render(App.getTasks(), 'All', toggle);
    EditTask.render(toggle, App.getCategories(), editTaskHandler) 
}

export default TasksController;