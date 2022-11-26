import { createElement } from "../helper";
import "./actionButtonStyles.scss";

const ActionButton = function(){
    const render = function(){ 
        const root = document.querySelector('#root');
        const actionButton = createElement('div', '', 'add-button');
        const icon = createElement ('i', '', 'fa-solid', 'fa-plus');
        actionButton.append(icon);
        root.append(actionButton);
    }
    return {
        render
    }
}();

export default ActionButton;