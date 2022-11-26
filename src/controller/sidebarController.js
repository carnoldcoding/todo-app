import Sidebar from '../view/sidebar'
import Tasks from '../view/tasks'
import App from '../model/app'

const SidebarController = (function(){
    //filter notes
    const allFilter = function(){
        const filteredTaskList = App.getTasks();
        Tasks.render(filteredTaskList, 'All');
    }
    const listFilter = function(category){
        App.setCurrentCategory(parseInt(category.substring(category.indexOf('-')+1)));
        App.setCurrentTaskList();
        Tasks.render(App.getCurrentTaskList(), App.getCurrentCategory().getTitle());
    }
    Sidebar.render();
    Sidebar.renderList(App.getCategories(), listFilter);
})

export default SidebarController;