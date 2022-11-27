import App from "../model/app"
import ActionButton from "../view/action-button"
import SelectModal from '../view/select-modal'
import NewTask from "../view/new-task-modal";
import Tasks from '../view/tasks'
import { getDate } from "date-fns";

const ActionButtonController = function(){
    //Toggle States
    let isSelectModalOpen = false;
    let isNewTaskOpen = false;

    const toggleNewTask = function(){
        isNewTaskOpen = !isNewTaskOpen;
        NewTask.toggle();
    }

    const toggleSelectModal = function(){
        SelectModal.toggle(isSelectModalOpen);
        isSelectModalOpen = !isSelectModalOpen;
    }

    //Add Task
    const addTaskHandler = function(){
        //Destructure the received object data into variables
        const { details, taskList, date, priority } = NewTask.getData();
        App.addTask(details);
        Tasks.render(App.getTasks(), App.getCurrentCategory().getTitle());
    }

    ActionButton.render(toggleSelectModal);
    SelectModal.render(toggleSelectModal, toggleNewTask);
    NewTask.render(toggleNewTask, App.getCategories(), addTaskHandler);
}

export default ActionButtonController;