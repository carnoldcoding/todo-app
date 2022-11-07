import {format} from 'date-fns'

const Task = function(assignedId, text){
    const id = assignedId;
    let content = text;
    let status = false;
    let priority = 1; //Will go from 1 - 3 (Low, Medium, High)
    let dueDate = format(new Date(), 'MM/dd/yyyy'); //Formatted by date-fn

    //Getters and Setters
    const getContent = ()=>{return content}
    const getStatus = ()=>{return status}
    const getPriority = ()=>{return priority}
    const getId = ()=>{return id}
    const getDueDate = () =>{return dueDate}

    const setContent = (text) =>{content = text}
    const setPriority = (level) => {priority = level}
    const setDueDate = (date)=>{dueDate = format(date, 'MM/dd/yyyy');}

    const toggle = function(){status = !status;}

    return{
        getContent,
        getStatus,
        getPriority,
        getId,
        getDueDate,

        setContent,
        setPriority,
        setDueDate,

        toggle
    }
}

export default Task;