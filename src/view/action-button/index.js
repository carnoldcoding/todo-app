import { createElement } from "../helper";
import "./actionButtonStyles.scss";

const ActionButton = function(){
    const render = function(toggleSelectModal){ 
        const root = document.querySelector('#root');
        const actionButton = createElement('div', '', 'add-button');
        actionButton.addEventListener('click', toggleSelectModal);
        const icon = createElement ('i', '', 'fa-solid', 'fa-plus');
        actionButton.append(icon);
        root.append(actionButton);
    }
    const toggle = function(isOpen){
        const container = document.querySelector('.select-modal-container');
        isOpen ? container.classList.add('hidden') : container.classList.remove('hidden');
    }
    return {
        render,
        toggle
    }
}();

export default ActionButton;