import "./styles.scss"
import TaskList from "./model/taskList"

const myList = TaskList();
myList.addTask("Walk the Dog");
myList.addTask("Walk the Cat");
myList.addTask("walk the giraffe");

myList.toggleTask(1);
myList.editTask(1, "hell yes");
myList.display();