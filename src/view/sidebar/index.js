import './sidebarStyles.scss'
import { createElement } from '../helper';

const Sidebar = (function(){
    const render = function(){
        const grid = document.querySelector('.content-grid');
        const sidebar = createElement('div', '', 'sidebar');
        const homeWrapper = createElement('div', '', 'home-wrapper');
        sidebar.append(homeWrapper);

        const homeTitle = createElement('h2', 'Home','home');
        homeWrapper.append(homeTitle);

        const homeItems = createElement('div', '', 'home-item-wrapper');
        homeWrapper.append(homeItems);

        //All Category
        const allTasks = createElement('div', '', 'home-item');
        const allTasksTitle = createElement('h3', 'All Tasks');
        const allTasksIcon = createElement('i', '', 'fa-solid', 'fa-inbox');
        allTasks.append(allTasksIcon, allTasksTitle);

        //Today Category
        const todaysTasks = createElement('div', '', 'home-item');
        const todaysTasksTitle = createElement('h3', 'Today');
        const todaysTasksIcon = createElement('i', '', 'fa-solid', 'fa-calendar-day');
        todaysTasks.append(todaysTasksIcon, todaysTasksTitle);

        //Weekly Category
        const weeklyTasks = createElement('div', '', 'home-item');
        const weeklyTasksTitle = createElement('h3', 'Weekly');
        const weeklyTasksIcon = createElement('i', '', 'fa-solid', 'fa-calendar-week');
        weeklyTasks.append(weeklyTasksIcon, weeklyTasksTitle);

        //Important Category
        const importantTasks = createElement('div', '', 'home-item');
        const importantTasksTitle = createElement('h3', 'Important');
        const importantTasksIcon = createElement('i', '', 'fa-regular', 'fa-star');
        importantTasks.append(importantTasksIcon, importantTasksTitle);

        //Add them all
        homeItems.append(allTasks, todaysTasks, weeklyTasks, importantTasks);

        //Dynamic Lists
        const listsWrapper = createElement('div', '', 'lists-wrapper');
        const listsTitle = createElement('h2', 'Task Lists', 'task-lists');
        listsWrapper.append(listsTitle);
        sidebar.append(listsWrapper);
        grid.append(sidebar);
    }

    return{
        render
    }
})();

export default Sidebar;