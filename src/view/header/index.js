import "./headerStyles.scss"

const Header = (function(){
    const render = function(toggleTheme){
        //Header
        const headerWrapper = document.querySelector(".header-wrapper");

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
        toggle.addEventListener('click', toggleTheme);

        //Render
        headerWrapper.append(bars, header, toggle);
    }

    const toggle = function(darkMode){
        const root = document.querySelector("#root");
        const toggle = document.querySelector('.theme-toggle');

        if(darkMode){
            root.classList.add('dark-theme');
            toggle.classList.add('active');
        }else{
            root.classList.remove('dark-theme');
            toggle.classList.remove('active');
        }
    }

    return{
        render,
        toggle
    }
})();

export default Header