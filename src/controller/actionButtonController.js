import App from "../model/app"
import ActionButton from "../view/action-button"
import SelectModal from '../view/select-modal'
import NewTask from "../view/new-task-modal";
import Tasks from '../view/tasks'
import NewList from '../view/new-list-modal'
import Sidebar from '../view/sidebar'

const ActionButtonController = function(){
    //Toggle States
    let isSelectModalOpen = false;
    let isNewTaskOpen = false;
    let isNewListOpen = false;

    const toggleNewTask = function(){
        isNewTaskOpen = !isNewTaskOpen;
        NewTask.toggle();
    }

    const toggleNewList = function(){
        isNewListOpen = !isNewListOpen;
        NewList.toggle();
    }

    const toggleSelectModal = function(){
        SelectModal.toggle(isSelectModalOpen);
        isSelectModalOpen = !isSelectModalOpen;
    }

    //Add Task
    const addTaskHandler = function(){
        //Destructure the received object data into variables
        const { details, taskList, date, priority } = NewTask.getData();
        //Task Work
        App.addTask(details);
        const taskId = App.getTasks()[App.getTasks().length-1].getId();
        App.editPriority(taskId, priority);
        App.addCategoryToTask(taskList, taskId);
        date ? App.editDueDate(taskId, new Date(date)) : App.editDueDate(taskId, new Date());

        //Category Work
        taskList >= 0 ? App.setCurrentCategory(taskList) : App.setCurrentCategory(1);
        App.filter(App.getCurrentCategoryId());
        Tasks.render(App.getCurrentTaskList(), App.getCategoryTitles()[App.getCurrentCategoryId() - 1]);
    } 
    const listFilter = function(category){
        App.filter(parseInt(category.substring(category.indexOf('-')+1)));
        Tasks.render(App.getCurrentTaskList(), category.substring(0, category.indexOf('-')));
    }
    const addListHandler = function(){
        const title = NewList.getData();
        App.addCategory(title);
        NewTask.renderCategories(App.getCategories());
        Sidebar.renderList(App.getCategories(), listFilter)
    }

    ActionButton.render(toggleSelectModal);
    SelectModal.render(toggleSelectModal, toggleNewTask, toggleNewList);
    NewTask.render(toggleNewTask, App.getCategories(), addTaskHandler);
    NewList.render(toggleNewList, addListHandler);
}

export default ActionButtonController;