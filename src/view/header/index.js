import "./headerStyles.scss"

const header = (function(){
    const render = function(){
        //Header
        const root = document.querySelector("#root");
        const headerWrapper = document.createElement("div");
        headerWrapper.classList.add("headerWrapper");
        root.append(headerWrapper);

        //Bars
        const bars = document.createElement('i');
        bars.classList.add('fa-solid', 'fa-bars');

        //Title
        const header = document.createElement('h1');
        header.textContent = "To";
        const colorChange = document.createElement('span');
        colorChange.textContent="Do";
        header.append(colorChange);

        //Toggle
        const toggle = document.createElement('div');
        toggle.classList.add('theme-toggle');

        //Current Issue (The function needs to be defined in the controller, not here)
        toggle.addEventListener('click', ()=>{
            toggle.classList.toggle('active');
            root.classList.toggle('dark-theme');
        })
        
        headerWrapper.append(bars, header, toggle);
    }
    return{
        render
    }
})();

export default header