const createElement = function(element, content, ...classList){
    const newElement = document.createElement(element);
    classList && classList.forEach(function(classTag){newElement.classList.add(classTag);})
    content && (newElement.textContent = content);
    
    return newElement;
}

export {createElement}