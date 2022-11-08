import TaskList from './taskList'

const Projects = function(){
    let projects = [TaskList(1, "All")];
    let currentProject = projects[0];

    //Access Task List Methods
    const addProject = function(name){
        const project = projects.length == 0 ? TaskList(1, name) : TaskList(parseInt(projects.length + 1), name);
        projects.push(project);
    }

    const addTaskToProject = function(projectId, content){
        projects.map(project => project.getId() == projectId ? project.addTask(content) : project);
    }

    const removeTaskFromProject = function(projectId, taskId){
        projects.map(project => project.getId() == projectId ? project.removeTask(taskId) : project);
    }

    const editTaskInProject = function(projectId, taskId, newText){
        projects.map(project => project.getId() == projectId ? project.editTask(taskId, newText) : project);
    }

    const editTaskPriority = function(projectId, taskId, level){
        projects.map(project => project.getId() == projectId ? project.editPriority(taskId, level): project);
    }

    const toggleTaskInProject = function(projectId, taskId){
        projects.map(project => project.getId() == projectId ? project.toggleTask(taskId) : project);
    }

    const editTaskDate = function(projectId, taskId, date){
        projects.map(project => project.getId() == projectId ? project.editDueDate(taskId, date) : project);
    }
    //Debugging
    const display = function(){
        projects.forEach(function(project){
            project.display();
        })
    }
    return{
        addProject,
        addTaskToProject,
        removeTaskFromProject,
        editTaskInProject,
        editTaskPriority,
        toggleTaskInProject,
        editTaskDate,
        display
    }
}

export default Projects;