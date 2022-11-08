import "./styles.scss"
import Projects from './model/projects'

const myProjects = Projects();
myProjects.addProject("Homework");
myProjects.addTaskToProject(1, "Do your homework");

myProjects.display();