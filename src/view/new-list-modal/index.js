import "./newListStyles.scss"
import { createElement } from "../helper"

const NewList = (function(){
    const render = function(toggleNewList, addListHandler){
        const root = document.querySelector('#root');
        const container = createElement('div', '', 'new-list-container', 'hidden');
        const wrapper = createElement('div', '', 'new-list-wrapper');
        const form = createElement('form', '', 'new-list-form');
        //Create Input/Label
        const input = document.createElement('input');
        input.setAttribute("type", "input");
        input.setAttribute('name', 'list-details');
    
        const buttons = createElement('div', '', 'buttons-wrapper');
        const cancelButton = createElement('button', 'cancel', 'cancel-button');
        const submitButton = createElement('button', 'submit', 'submit-button');
        cancelButton.addEventListener('click', toggleNewList);
        submitButton.addEventListener('click', toggleNewList);
        submitButton.addEventListener('click', addListHandler);

        //Render
        form.append(input);
        buttons.append(cancelButton, submitButton);
        wrapper.append(form, buttons);
        container.append(wrapper);
        root.append(container);
    }
    const toggle = function(){
        const container = document.querySelector('.new-list-container');
        container.classList.toggle('hidden');
    }

    const getData = function(){
        const form = document.querySelector('form[class="new-list-form"]');
        const details = form.querySelector('input[name="list-details"]').value;
        form.querySelector('input[name="list-details"]').value = '';
        return details
    }
    return{
        render,
        toggle,
        getData
    }
})();

export default NewList;