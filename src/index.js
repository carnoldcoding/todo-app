import "./styles.scss"
import TaskList from "./model"
import View from "./view"
import Controller from "./controller";

const myController = Controller(TaskList(), View());