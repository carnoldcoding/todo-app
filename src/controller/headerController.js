import Header from '../view/header'
import App from '../model/app'

const headerController = (function(){
    //Methods
    const toggleTheme = function(){
        App.toggleDarkMode();
        Header.toggle(App.getDarkMode());
    }

    //Render
    Header.render(toggleTheme);
})();

export default headerController;