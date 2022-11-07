import "./styles.scss"
import Projects from './model/projects'

const myProjects = Projects();

myProjects.addProject("Homework");
myProjects.addProject("Fitness");
myProjects.addTaskToProject(1, "Eat the turkey");
myProjects.addTaskToProject(1, "Make the turkey");
myProjects.removeTaskFromProject(1, 1);
myProjects.editTask(1, 2, "Eat waffles");
myProjects.display();