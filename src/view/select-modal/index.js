import { createElement } from "../helper";
import "./selectModalStyles.scss";

const SelectModal = function(){
    const render = function(toggleSelectModal){
        const root = document.querySelector('#root');
        const container = createElement('div', '', 'select-modal-container');
        container.classList.add('hidden');
        const wrapper = createElement('div', '', 'select-modal-wrapper');
        const header = createElement('h1', 'Create');
        const close = createElement('i', '', 'fa-solid', 'fa-xmark');
        close.addEventListener('click', toggleSelectModal);
        const options = createElement('div', '', 'options-container');

        const createTask = createElement('div', '', 'option');
        const taskIcon = createElement('i', '', 'fa-solid', 'fa-file-circle-plus');
        const taskText = createElement('h3', 'Task');
        createTask.append(taskIcon, taskText);
        createTask.addEventListener('click', toggleSelectModal);

        const createList = createElement('div', '', 'option');
        const listIcon = createElement('i', '', 'fa-solid', 'fa-folder-plus');
        const listText = createElement('h3', 'List');
        createList.append(listIcon, listText);
        createList.addEventListener('click', toggleSelectModal);
        
        header.append(close);
        options.append(createTask, createList);
        wrapper.append(header, options);
        container.append(wrapper);

        root.append(container);
    }
    const toggle = function(isOpen){
        const container = document.querySelector('.select-modal-container');
        isOpen ? container.classList.add('hidden') : container.classList.remove('hidden');
    }
    return{
        render,
        toggle
    }
}();

export default SelectModal;