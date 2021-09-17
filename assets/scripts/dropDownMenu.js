
function dropMenu() {
    menu = document.getElementById("menu");
    console.log(menu);
    if (menu.hidden == true) {
        show();
    } else if (menu.hidden == false) {
        hide();
    }
}

function hide() {
    menu = document.getElementById("menu");
    menu.hidden = true;
}

function show() {
    menu = document.getElementById("menu");
    menu.hidden = false;
}
