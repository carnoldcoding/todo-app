import {format} from 'date-fns'

const Task = function(assignedId, text){
    //Attributes
    const id = assignedId;
    let categoryId = -1;
    let content = text;
    let status = false;
    let priority = 1; //Will go from 1 - 3 (Low, Medium, High)
    let dueDate = new Date(); //Formatted by date-fn

    //Getters and Setters
    const getContent = ()=>{return content}
    const getStatus = ()=>{return status}
    const getPriority = ()=>{return priority}
    const getId = ()=>{return id}
    const getCategoryId = ()=> {return categoryId}
    const getDueDate = () =>{return dueDate}
    const getFormattedDate = ()=>{return format(dueDate, 'MM/dd/yyyy')}

    const setContent = (text) =>{content = text}
    const setPriority = (level) => {priority = level}
    const setDueDate = (date)=>{dueDate = date;}
    const setCategoryId = (catId)=>{categoryId = catId}

    //Methods
    const toggle = function(){status = !status;}

    return{
        getContent,
        getStatus,
        getPriority,
        getId,
        getCategoryId,
        getDueDate,
        getFormattedDate,

        setContent,
        setPriority,
        setDueDate,
        setCategoryId,

        toggle
    }
}

export default Task;