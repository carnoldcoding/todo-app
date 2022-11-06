//ITEM OBJECT
const Item = function(content){
    let complete = false;
    const toggle = function(){
        this.complete = !this.complete;
    }
    return {
        toggle,
        content,
        complete
    }
}

export default Item;