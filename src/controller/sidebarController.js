import Sidebar from '../view/sidebar'
import Tasks from '../view/tasks'
import App from '../model/app'

const SidebarController = (function(){
    //Dynamic Filter
    const listFilter = function(category){
        App.filter(parseInt(category.substring(category.indexOf('-')+1)));
        Tasks.render(App.getCurrentTaskList(), category.substring(0, category.indexOf('-')));
    }
    Sidebar.render(listFilter);
    Sidebar.renderList(App.getCategories(), listFilter);
})

export default SidebarController;