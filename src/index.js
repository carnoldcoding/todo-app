import "./styles.scss"
import TaskList from "./model/taskList"

const myList = TaskList();
myList.addTask("Walk the dog");
myList.addTask("Walk the cat");
myList.addTaskToCategory(1, 1);

myList.display();
myList.displayCategory(1);