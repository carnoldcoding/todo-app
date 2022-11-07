const Task = function(assignedId, text){
    const id = assignedId;
    let content = text;
    let status = false;
    let priority = 1;

    const getContent = ()=>{return content}
    const getStatus = ()=>{return status}
    const getPriority = ()=>{return priority}
    const getId = ()=>{return id}

    const setContent = (text) =>{content = text}
    const toggle = function(){
        status = !status;
    }

    return{
        getContent,
        getStatus,
        getPriority,
        setContent,
        getId,
        toggle
    }
}

export default Task;