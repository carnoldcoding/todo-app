import Sidebar from '../view/sidebar'
import App from '../model/app'

const SidebarController = (function(){
    Sidebar.render();
    Sidebar.renderList(App.getCategories());
})

export default SidebarController;