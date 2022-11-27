import App from "../model/app"
import ActionButton from "../view/action-button"
import SelectModal from '../view/select-modal'
import NewTask from "../view/new-task-modal";

const ActionButtonController = function(){
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

    ActionButton.render(toggleSelectModal);
    SelectModal.render(toggleSelectModal, toggleNewTask);
    NewTask.render(toggleNewTask, App.getCategories());
}

export default ActionButtonController;