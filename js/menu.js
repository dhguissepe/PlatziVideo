
const tablet = window.matchMedia("screen and (max-width:600px)"); //De esta manera se declaran las media queries en javascript

const arrowButtom = document.getElementById("arrow");
const menu = document.getElementById("left");

tablet.addListener(validation);

isMobile(tablet.matches);
console.log("todo bien");
function validation(e)
{
    isMobile(e.matches);
}

function isMobile(question)
{

    if (question)
    {
        arrowButtom.addEventListener("click", active);
    }
    else
    {
        arrowButtom.removeEventListener("click", active);
        menu.classList.remove("isactive");
    }
}

function active()
{
    var attribute = menu.classList.contains("isactive");
    
    if (attribute)
    {
        menu.classList.remove("isactive");
        arrowButtom.classList.remove("icon-circle-down");
        arrowButtom.classList.add("icon-circle-up");
    }
    else
    {
        menu.classList.add("isactive");
        arrowButtom.classList.remove("icon-circle-up");
        arrowButtom.classList.add("icon-circle-down");
    }
    
}