import "./styles.scss"
import TaskList from "./model/taskList"

const myList = TaskList("Homework");
const myList2 = TaskList("Workout");

myList.addTask("Do history work");
myList.display();

myList2.addTask("Do push ups");
myList2.editTask(1, "Do jogging");
myList2.editPriority(1, 2);
myList2.display();