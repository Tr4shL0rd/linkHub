var darkMode = true;
var dark = "#282828";
var light = "#f7fff7";
var lightText = "black";
var darkText = "lightgray";
var sun = "🌞";
var moon = "🌚";

function darkLight() {
    // index (home)
    console.log(darkMode);
    if (darkMode == true) {
        darkMode = false;
        if (page() == "/index.html") {
            homeLight();
        }
    } else if (darkMode == false) {
        darkMode = true;

        if (page() == "/index.html") {
            homeDark();
        }
    }

    // index (Downloads)
    if (darkMode == true) {
        darkMode = false;
        if (page() == "/downloads/index.html") {
            downloadsLight();
        }
    } else if (darkMode == false) {
        //darkMode = true;
        if (page() == "/downloads/index.html") {
            downloadsDark();
        }
    }
}

function page() {
    return window.location.pathname;
}

// index (home)
function homeLight() {
    document.body.style.background = light;
    document.getElementById("_but").innerHTML = sun;
    links = document.getElementsByTagName("a");
    header = document.getElementsByClassName("Header");
    header[0].style.color = "black";
    for (var i = 6; i < links.length; i++) {
        links[i].style.color = lightText;
    }
}

function homeDark() {
    document.body.style.background = dark;
    document.getElementById("_but").innerHTML = moon;
    links = document.getElementsByTagName("a");
    header = document.getElementsByClassName("Header");
    header[0].style.color = lightText;

    for (var i = 6; i < links.length; i++) {
        links[i].style.color = darkText;
    }
}

// index (downloads)

function downloadsLight() {
    document.body.style.background = light;
    document.getElementById("_but").innerHTML = sun;
    header = document.getElementsByClassName("Header");
    for (var i = 0; i < header.length; i++) {
        header[i].style.color = lightText;
    }
    files = document.getElementsByTagName("a");
    for (var i = 6; i < files.length; i++) {
        files[i].style.color = lightText;
    }
}

function downloadsDark() {
    document.body.style.background = dark;
    document.getElementById("_but").innerHTML = moon;
    header = document.getElementsByClassName("Header");
    for (var i = 0; i < header.length; i++) {
        header[i].style.color = darkText;
    }
    files = document.getElementsByTagName("a");
    for (var i = 6; i < files.length; i++) {
        files[i].style.color = darkText;
    }
}
