//List Object
const List = function(){
    let items = [
        {id: 1, content: "Walk the Dog", complete: false}
    ]

    const addItem = function(text){
        const item = {
            id: items.length > 0 ? items.length + 1 : 1,
            content: text,
            complete: false
        }
        items.push(item);
    }

    const removeItem = function(id){
        items = items.filter(item => item.id != id);
    }

    const editItem = function(id, text){
        items = items.map(item => item.id == id ? Object.assign(item, {content: text}): item);
    }
    const toggleItem = function(id){
        items = items.map(item => item.id == id ? Object.assign(item , {complete: !item.complete}) : item);
    }

    const getItems = function(){
        return items;
    }

    //Debug
    const display = function(){
        console.log("==ITEMS==");
        getItems().forEach(function(item){
            console.log(`Item ${item.id}: ${item.content}`)
        })
    }

    return {
        addItem,
        removeItem,
        editItem,
        toggleItem,
        display,
        getItems
    }
}

export default List;