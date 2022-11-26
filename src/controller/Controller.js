import headerController from './headerController'
import SidebarController from './sidebarController'
import App from '../model/app'

const Controller = (function(){
    
    App.addCategory("Fitness");
    App.addCategory("Homework");
    App.addTask("work");
    headerController();
    SidebarController();
})

export default Controller