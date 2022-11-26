import './sidebarStyles.scss'
import { createElement } from '../helper';

const Sidebar = (function(){
    const render = function(allFilter, todayFilter, weeklyFilter, importantFilter){
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
        allTasks.addEventListener('click', allFilter);
        allTasks.append(allTasksIcon, allTasksTitle);

        //Today Category
        const todaysTasks = createElement('div', '', 'home-item');
        const todaysTasksTitle = createElement('h3', 'Today');
        const todaysTasksIcon = createElement('i', '', 'fa-solid', 'fa-calendar-day');
        todaysTasks.addEventListener('click', todayFilter);
        todaysTasks.append(todaysTasksIcon, todaysTasksTitle);

        //Weekly Category
        const weeklyTasks = createElement('div', '', 'home-item');
        const weeklyTasksTitle = createElement('h3', 'Weekly');
        const weeklyTasksIcon = createElement('i', '', 'fa-solid', 'fa-calendar-week');
        weeklyTasks.addEventListener('click', weeklyFilter);
        weeklyTasks.append(weeklyTasksIcon, weeklyTasksTitle);

        //Important Category
        const importantTasks = createElement('div', '', 'home-item');
        const importantTasksTitle = createElement('h3', 'Important');
        const importantTasksIcon = createElement('i', '', 'fa-regular', 'fa-star');
        importantTasks.addEventListener('click', importantFilter);
        importantTasks.append(importantTasksIcon, importantTasksTitle);

        //Task Lists
        const listsWrapper = createElement('div', '', 'lists-wrapper');
        const listsTitle = createElement('h2', 'Task Lists', 'task-lists-title');
        listsWrapper.append(listsTitle);
        sidebar.append(listsWrapper);
        //Add them all
        homeItems.append(allTasks, todaysTasks, weeklyTasks, importantTasks);

        grid.append(sidebar);
    }

    const renderList = function(taskLists, listFilter){
        const listsWrapper = document.querySelector('.lists-wrapper');
        const lists = createElement('div', '', 'task-lists');
        taskLists.forEach(function(taskList){
            const listItem = createElement('div', '', 'list-item');
            const listItemTitle = createElement('h3', taskList.getTitle());
            const listItemIcon = createElement('i', '', 'fa-regular', 'fa-note-sticky');
            listItem.setAttribute("id", `category-${taskList.getId()}`)
            listItem.addEventListener('click', (e)=>{listFilter(e.currentTarget.id)});

            listItem.append(listItemIcon, listItemTitle);
            lists.append(listItem);

        })
        listsWrapper.append(lists);
    }

    return{
        render,
        renderList
    }

})();

export default Sidebar;