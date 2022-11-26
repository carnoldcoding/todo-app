import "./tasksStyles.scss"
import { createElement } from "../helper";

const Tasks = function(){
    const create = function(){
        const grid = document.querySelector('.content-grid');
        const mainContent = createElement('div', '', 'main-content');
        grid.append(mainContent);
    }
    const render = function(taskList, category){
        const header = createElement('h1', category.getTitle(), 'task-list-header');
        const mainContent = document.querySelector('.main-content');
        const tasksWrapper = createElement('div', '', 'task-list-wrapper');
        console.log(taskList);
        taskList.forEach(function(task){
            const taskWrapper = createElement('div', '', 'task-wrapper');
            const checkbox = createElement('i', '', 'fa-regular', 'fa-square')
            const taskDetails = createElement('p', task.getContent(), 'task-details');
            const taskDate = createElement('p', task.getDueDate(), 'task-date');
            const editTask = createElement('i', '', 'fa-regular', 'fa-pen-to-square');
            const deleteTask = createElement('i', '', 'fa-solid', 'fa-trash-can');
            taskWrapper.append(checkbox, taskDetails, taskDate, editTask, deleteTask);
            tasksWrapper.append(taskWrapper);
        })
        mainContent.append(header, tasksWrapper);
    }
    return{
        create,
        render
    }
}();

export default Tasks