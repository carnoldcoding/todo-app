import './sidebarStyles.scss'

const Sidebar = (function(){
    const render = function(){
        const grid = document.querySelector('.content-grid');
        const sidebar = document.createElement('div');
        sidebar.classList.add('sidebar');

        const homeWrapper = document.createElement('div');
        homeWrapper.classList.add('home-wrapper');
        sidebar.append(homeWrapper);

        const homeTitle = document.createElement('h2');
        homeTitle.textContent = "home";
        homeWrapper.append(homeTitle);

        const homeItems = document.createElement('div');
        homeItems.classList.add('home-item-wrapper');
        homeWrapper.append(homeItems);

        const allTasks = document.createElement('div');
        allTasks.classList.add('home-item');
        const allTasksTitle = document.createElement('h3');
        allTasksTitle.textContent="All Tasks";
        const allTasksIcon = document.createElement('i');
        allTasksIcon.classList.add('fa-solid', 'fa-inbox');
        
        allTasks.append(allTasksIcon, allTasksTitle);

        const todaysTasks = document.createElement('div');
        todaysTasks.classList.add('home-item');
        const todaysTasksTitle = document.createElement('h3');
        todaysTasksTitle.textContent="Today";
        const todaysTasksIcon = document.createElement('i');
        todaysTasksIcon.classList.add('fa-solid', 'fa-calendar-day');
        
        todaysTasks.append(todaysTasksIcon, todaysTasksTitle);

        const weeklyTasks = document.createElement('div');
        weeklyTasks.classList.add('home-item');
        const weeklyTasksTitle = document.createElement('h3');
        weeklyTasksTitle.textContent="This Week";
        const weeklyTasksIcon = document.createElement('i');
        weeklyTasksIcon.classList.add('fa-solid', 'fa-calendar-week');
        
        weeklyTasks.append(weeklyTasksIcon, weeklyTasksTitle);

        const importantTasks = document.createElement('div');
        importantTasks.classList.add('home-item');
        const importantTasksTitle = document.createElement('h3');
        importantTasksTitle.textContent="Important";
        const importantTasksIcon = document.createElement('i');
        importantTasksIcon.classList.add('fa-regular', 'fa-star');
        
        importantTasks.append(importantTasksIcon, importantTasksTitle);

        homeItems.append(allTasks, todaysTasks, weeklyTasks, importantTasks);

        const listsTitle = document.createElement('h2');
        listsTitle.textContent = "task lists";

        grid.append(sidebar);
    }

    return{
        render
    }
})();

export default Sidebar;