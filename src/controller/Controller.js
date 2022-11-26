import headerController from './headerController'
import SidebarController from './sidebarController'
import App from '../model/app'
import TasksController from './tasksController';

const Controller = (function(){
    
    App.addCategory("Fitness");
    App.addCategory("Homework");
    App.addCategory("Journaling");

    App.addTask("work");
    App.addTask("history work");
    App.addTask("taco eating");
    App.addTask("waffle making");
    App.addCategoryToTask(1, 1);
    App.addCategoryToTask(1, 2);
    App.addCategoryToTask(2, 3);
    App.addCategoryToTask(2, 4);
    App.editDueDate(1, new Date('1999', '02', '02'));
    App.editDueDate(2, new Date('2022', '10', '25'));
    App.editDueDate(3, new Date('2022', '10', '02'));
    App.editPriority(1, 3);
    App.editPriority(2, 3);

    App.display();

    headerController();
    SidebarController();
    TasksController();
})

export default Controller