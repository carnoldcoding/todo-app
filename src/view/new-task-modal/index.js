import './newTask.scss'
import { createElement } from '../helper';

const NewTask = function(){
    const render = function(toggle, categoryList, addTaskHandler){
        const root = document.querySelector('#root');
        const container = createElement('div', '', 'new-task-container', 'hidden');
        const wrapper = createElement('div', '', 'new-task-wrapper');
        const form = createElement('form', '', 'new-task-form');
        //Create Input/Label
        const input = document.createElement('input');
        input.setAttribute("type", "input");
        input.setAttribute('name', 'task-details');

        //Create Select/Label
        const listSelect = document.createElement('select');
        listSelect.setAttribute('name', 'task-list');
        const noOption = createElement('option', 'None');
        noOption.setAttribute('value', -1);
        listSelect.append(noOption);

        //if categoryList exists
        categoryList && categoryList.forEach(function(category){
            const option = createElement('option', category.getTitle());
            option.setAttribute('value', category.getId());
            listSelect.append(option);
        })

        //Create Date Select
        const dateSelect = document.createElement('input');
        dateSelect.setAttribute('type', 'date');

        //Create Priority Select
        const prioritySelect = document.createElement('select');
        prioritySelect.setAttribute('name', 'priority-select');
        const lowPriority = createElement('option', 'Low Priority');
        lowPriority.setAttribute('value', 1);
        const midPriority = createElement('option', 'Mid Priority');
        midPriority.setAttribute('value', 2);
        const highPriority = createElement('option', 'High Priority');
        highPriority.setAttribute('value', 3);

        prioritySelect.append(lowPriority, midPriority, highPriority);

        //Create Buttons
        const buttons = createElement('div', '', 'buttons-wrapper');
        const cancelButton = createElement('button', 'cancel', 'cancel-button');
        const submitButton = createElement('button', 'submit', 'submit-button');

        //EventListeners
        cancelButton.addEventListener('click', toggle);
        submitButton.addEventListener('click', toggle);
        submitButton.addEventListener('click', addTaskHandler);
        //Render
        buttons.append(cancelButton, submitButton);
        form.append(input, listSelect, dateSelect, prioritySelect);
        wrapper.append(form, buttons);
        container.append(wrapper);
        root.append(container);
    }

    const renderCategories = function(categoryList){
        //Create Select/Label
        const listSelect = document.querySelector('select');
        listSelect.textContent = '';
        const noOption = createElement('option', 'None');
        noOption.setAttribute('value', -1);
        listSelect.append(noOption);

        //if categoryList exists
        categoryList && categoryList.forEach(function(category){
            const option = createElement('option', category.getTitle());
            option.setAttribute('value', category.getId());
            listSelect.append(option);
        })
    }

    const toggle = function(){
        const container = document.querySelector('.new-task-container');
        container.classList.toggle('hidden');
    }

    const getData = function(){
        const form = document.querySelector('form[class="new-task-form"]');
        const details = form.querySelector('input[name="task-details"]').value;
        const taskList = form.querySelector('select[name="task-list"]').value;
        const date = form.querySelector('input[type="date"]').value;
        const priority = form.querySelector('select[name="priority-select"').value;

        //Reset Form
        form.querySelector('input[name="task-details"]').value = '';
        form.querySelector('select[name="task-list"]').value = '';
        form.querySelector('input[type="date"]').value = '';
        form.querySelector('select[name="priority-select"').value = '';


        
        return {
            details,
            taskList,
            date,
            priority
        }
    }
    return{
        render,
        renderCategories,
        toggle,
        getData
    }
}();

export default NewTask;