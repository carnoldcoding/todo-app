import headerController from './headerController'
import SidebarController from './sidebarController'
import App from '../model/app'
import TasksController from './tasksController';

const Controller = (function(){
    
    App.addCategory("Fitness");
    App.addCategory("Homework");
    App.addTask("work");
    App.addTask("history work");
    App.addTask("taco eating");
    App.addTask("waffle making");
    App.addCategoryToTask(1, 1);
    App.addCategoryToTask(1, 2);
    App.addCategoryToTask(2, 3);
    App.addCategoryToTask(2, 4);
    App.display();

    headerController();
    SidebarController();
    TasksController();
})

export default Controller