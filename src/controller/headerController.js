import Header from '../view/header'
import TaskList from '../model/taskList'

const headerController = (function(){
    const toggleTheme = function(){
        const root = document.querySelector("#root");
        const toggle = document.querySelector(".theme-toggle");
        TaskList.toggleDarkMode();

        if(TaskList.getDarkMode()){
            root.classList.add('dark-theme');
            toggle.classList.add('active');
        }else{
            root.classList.remove('dark-theme');
            toggle.classList.remove('active');
        }
    }
    Header.render(toggleTheme);
})();

export default headerController;