import Header from '../view/header'
import App from '../model/app'

const headerController = (function(){
    //Methods
    const toggleTheme = function(){
        App.toggleDarkMode();
        Header.toggle(App.getDarkMode());
    }
    const toggleSidebar = function(){
        App.toggleSidebar();
        Header.toggleSidebar(App.getSidebarStatus());
    }
    //Render
    Header.render(toggleTheme, toggleSidebar);
});

export default headerController;