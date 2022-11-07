import "./styles.scss"
import TaskList from "./model/taskList"

const myList = TaskList("Daily Work");
myList.addTask("Walk the Dog");
myList.addTask("Walk the Cat");
myList.addTask("walk the giraffe");

myList.toggleTask(1);
myList.editTask(1, "hell yes");
myList.editPriority(1, 2);
myList.display();

const myList2 = TaskList("Homework");
myList2.addTask("complete history work");
myList2.addTask("complete math work");
myList2.editTask(1, "Complete gym homework");
myList2.editDueDate(2, new Date("2022-03-25"));
myList2.display();