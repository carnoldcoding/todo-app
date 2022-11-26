import Sidebar from '../view/sidebar'
import Tasks from '../view/tasks'
import App from '../model/app'
import {format, isThisWeek, isToday} from 'date-fns'

const SidebarController = (function(){
    //Filters
    const allFilter = function(){
        const filteredTaskList = App.getTasks();
        App.setCurrentTaskList(filteredTaskList);
        Tasks.render(App.getCurrentTaskList(), "All");
    }
    const todayFilter = function(){
        const filteredTaskList = App.getTasks().filter(task => isToday(task.getDueDate()));
        App.setCurrentTaskList(filteredTaskList);
        Tasks.render(App.getCurrentTaskList(), "Today");
    }

    const weeklyFilter = function(){
        const filteredTaskList = App.getTasks().filter(task => isThisWeek(task.getDueDate()));
        App.setCurrentTaskList(filteredTaskList);
        Tasks.render(App.getCurrentTaskList(), "Weekly");
    }

    const importantFilter = function(){
        const filteredTaskList = App.getTasks().filter(task => task.getPriority() > 2);
        App.setCurrentTaskList(filteredTaskList);
        Tasks.render(App.getCurrentTaskList(), "Important");
    }
    //Dynamic Filter
    const listFilter = function(category){
        App.setCurrentCategory(parseInt(category.substring(category.indexOf('-')+1)));
        App.setCurrentTaskList();
        Tasks.render(App.getCurrentTaskList(), App.getCurrentCategory().getTitle());
    }
    Sidebar.render(allFilter, todayFilter, weeklyFilter, importantFilter);
    Sidebar.renderList(App.getCategories(), listFilter);
})

export default SidebarController;