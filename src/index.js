import "./styles.scss"
import TaskList from "./model/taskList"

const myList = TaskList();
myList.addTask("Do 10 Push Ups");
myList.addTask("Do 100 Sit Ups");

myList.addTask("Do math work");
myList.addTask("Do history work");

myList.addCategory("Fitness");
myList.addCategory("Homework");

myList.addCategoryToTask(1, 1);
myList.addCategoryToTask(1, 2);

myList.addCategoryToTask(2, 3);
myList.addCategoryToTask(2, 4);

myList.display();

myList.removeTask(1);
myList.display();