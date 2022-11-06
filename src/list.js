//LIST OBJECT
const List = function(){
    let items = [];
    const addItem = function(item){
        items.push(item);
    }
    const removeItem = function(item){
        items.splice(items.indexOf(item), 1);
    }
    const editItem = function(item, newContent){
        items.map(element => item == element ? element.content = newContent : null)
    }

    const display = function(){
        console.log("==ITEMS==");
        items.forEach(function(item){
            console.log(`Item: ${item.content}`)
        })
    }
    return {
        addItem,
        removeItem,
        editItem,
        display,
    }
}

export default List;