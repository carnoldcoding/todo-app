import App from "../model/app"
import ActionButton from "../view/action-button"
import SelectModal from '../view/select-modal'
const ActionButtonController = function(){
    let isSelectModalOpen = false;

    const toggleSelectModal = function(){
        SelectModal.toggle(isSelectModalOpen);
        isSelectModalOpen = !isSelectModalOpen;
    }

    ActionButton.render(toggleSelectModal);
    SelectModal.render(toggleSelectModal);
}

export default ActionButtonController;