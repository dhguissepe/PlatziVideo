
const tablet = window.matchMedia("screen and (max-width:600px)"); //De esta manera se declaran las media queries en javascript

const arrowButtom = document.getElementById("arrow");
const menu = document.getElementById("left");
const topMenu = document.getElementById("top");
const cross = document.getElementById("cross");

tablet.addListener(validation);

isMobile(tablet.matches);

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
        cross.removeEventListener("click", active);
        menu.classList.remove("isactive");
    }
}

function active()
{
    var isactive = menu.classList.contains("isactive");

    if (isactive)
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