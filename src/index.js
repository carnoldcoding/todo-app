import "./styles.scss"
import Projects from './model/projects'

const myProjects = Projects();

myProjects.addProject("Homework");
myProjects.addProject("Fitness");
myProjects.addTaskToProject(3, "Eat the turkey");
myProjects.addTaskToProject(3, "Make the turkeasdfasdfy");
myProjects.addTaskToProject(3, "Make the turkesdfsy");
myProjects.addTaskToProject(3, "Make the turkesdfy");
myProjects.addTaskToProject(3, "Make the turksdafsdfey");

myProjects.editTaskDate(3, 2, new Date("2022-01-05"))

myProjects.updateTodayProject();
myProjects.display();

myProjects.editTaskDate(3, 3, new Date("2022-02-03"));
myProjects.updateTodayProject();
myProjects.display();