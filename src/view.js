const View = function(){
    const createElement = function(tag, text, className){
        const element = document.createElement(tag);
        if (className) element.classList.add(className);
        if (text) element.textContent = text;

        return element;
    }
    const getElement = function(selector){
        return document.querySelector(selector);
    }
    
    //Create
    const app = getElement("#root");
    const title = createElement('h1', 'Task List');
    const form = createElement('form');

    const input = createElement('input');
    input.type = 'text';
    input.placeholder = 'Add Task';
    const submitButton = createElement('button', 'add');

    const taskList = createElement('ul');
    taskList.classList.add('task-list');

    //Add to DOM
    app.append(title, form, taskList);
    form.append(input, submitButton);

    //Private Methods
    const _getInput = function(){
        return input.value;
    }
    const _resetInput = function(){
        input.value = "";
    }

    const render = function(list){
        //Refresh List
        while(taskList.firstChild){
            taskList.removeChild(taskList.firstChild);
        }
        //Base Case of Empty List
        if(list.length == 0){
            const message = createElement('p');
            message.textContent = "Nothing to do! Add a task?";
            taskList.append(message);
        }else{ //Populate List
            list.forEach(function(item){
                const li = createElement('li');
                li.id = item.id;

                //Task Checkbox
                const checkbox = createElement('input');
                checkbox.type = 'checkbox';
                checkbox.checked = item.complete;

                //The Task's Details
                const itemContent = createElement('input');
                itemContent.value = item.content;
                itemContent.classList.add('task-details');
                itemContent.readOnly = true;

                if(item.complete){
                    itemContent.style.textDecoration = "line-through";
                }else{
                    itemContent.style.textDecoration = "none";
                }
                
                const editButton = createElement('button', 'edit', 'edit');
                const deleteButton = createElement('button', 'delete', 'delete');

                //Add to DOM
                li.append(checkbox, itemContent, editButton, deleteButton);
                taskList.append(li);
            })
        }
    }

    //bind handlers to events
    const bindAddTask = function(handler){
        form.addEventListener("submit", (e)=>{
            e.preventDefault();

            //If there is an input in the form, get it, then reset it.
            if(_getInput()){
                handler(_getInput());
                _resetInput();
            }
        })
    }

    const bindDeleteTask = function(handler){
        taskList.addEventListener('click', (e)=>{
            //adds event listener to the entire list
            //checks to see if the clicked element is the "delete" element
            //extracts the ID from the delete element's parent list item
            //uses the event handler to connect with the model's remove
            if(e.target.className === 'delete'){
                const id = parseInt(e.target.parentElement.id);
                handler(id);
            }
        })
    }

    const bindToggleTask = function(handler){
        taskList.addEventListener('click', (e)=>{
            if(e.target.type === 'checkbox'){
                const id = parseInt(e.target.parentElement.id);

                handler(id);
            }
        })
    }

    const bindEditTask = function(handler){
        taskList.addEventListener('click', (e)=>{
            if(e.target.className === 'edit'){
                const id = parseInt(e.target.parentElement.id);
                const text = e.target.previousElementSibling;
                
                text.readOnly = !text.readOnly;
                if(text.readOnly){
                    e.target.textContent = "edit";
                }else{
                    e.target.textContent = "save";
                }
            }
        })
    }

    return {
        render,
        bindAddTask,
        bindDeleteTask,
        bindToggleTask,
        bindEditTask
    }
}

export default View