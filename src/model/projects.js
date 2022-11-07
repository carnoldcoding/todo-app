import TaskList from './taskList'

const Projects = function(){
    let projects = [TaskList(1, "Today"), TaskList(2, "This Week")];
    let currentProject = projects[0];

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

    const editTask = function(projectId, taskId, newText){
        projects.map(project => project.getId() == projectId ? project.editTask(taskId, newText) : project);
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
        editTask,
        display
    }
}

export default Projects;