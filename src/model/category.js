const Category = function(assignedId, text){
    //Attributes
    const id = assignedId;
    let title = text;

    //Methods
    const getId = () => {return id}
    const getTitle = () => {return title}
    return{
        getId,
        getTitle
    }
}

export default Category;