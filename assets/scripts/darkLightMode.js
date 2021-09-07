var darkMode = true;
var dark = "#282828";
var light = "#f7fff7";
var lightText = "black";
var darkText = "lightgray";
var sun = "🌞";
var moon = "🌚";
var homePage = "/index.html";
var downloadPage = "/downloads/index.html";

function darkLightHome() {
    // index (home)
    console.log(darkMode);
    console.log(page());
    if (darkMode == true) {
        darkMode = false;
        console.log("should be light!");
        if (page() == homePage) {
            homeLight();
        }
    } else if (darkMode == false) {
        darkMode = true;
        console.log("should be dark!");

        if (page() == homePage) {
            homeDark();
        }
    }
}

function darkLightDownloads() {
    if (darkMode == true) {
        darkMode = false;
        if (page() == downloadPage) {
            downloadsLight();
        }
    } else if (darkMode == false) {
        darkMode = true;

        if (page() == downloadPage) {
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
    document.getElementById("_but").innerHTML = moon;

    links = document.getElementsByTagName("a");
    header = document.getElementsByClassName("Header");
    header[0].style.color = lightText;
    for (var i = 6; i < links.length; i++) {
        links[i].style.color = lightText;
    }
}

function homeDark() {
    document.body.style.background = dark;
    document.getElementById("_but").innerHTML = sun;

    links = document.getElementsByTagName("a");
    header = document.getElementsByClassName("Header");
    header[0].style.color = darkText;

    for (var i = 6; i < links.length; i++) {
        links[i].style.color = darkText;
    }
}

// index (downloads)

function downloadsLight() {
    console.log("light");
    document.body.style.background = light;
    document.getElementById("_but").innerHTML = moon;

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
    console.log("dark");
    document.body.style.background = dark;
    document.getElementById("_but").innerHTML = sun;

    header = document.getElementsByClassName("Header");
    for (var i = 0; i < header.length; i++) {
        header[i].style.color = darkText;
    }
    files = document.getElementsByTagName("a");
    for (var i = 6; i < files.length; i++) {
        files[i].style.color = darkText;
    }
}
