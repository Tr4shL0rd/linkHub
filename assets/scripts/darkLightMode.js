var clicks = 0;
var darkMode = true;

function darkLight() {
    
    var dark = "#282828";
    var light = "#f7fff7"
    
    if (darkMode == true) {
        
        document.body.style.background = light;
        document.getElementById("_but").innerHTML = "🌞";
        darkMode = false;
        links = document.getElementsByTagName("p");
        console.log(links.length);

    } else{// if (darkMode == false) {

        document.body.style.background = dark;
        document.getElementById("_but").innerHTML = "🌚";
        darkMode = true;
    }
}