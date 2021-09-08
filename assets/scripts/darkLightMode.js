// Bools
var darkMode = true;
// Colors
var dark = "#282828";
var light = "#f7fff7";
var lightText = "black";
var darkText = "lightgray";
// Emojies
var sun = "🌞";
var moon = "🌚";
// Pages
var homePage = "/";
var downloadPage = "/downloads/index.html";
var tipsPage = "/tips/index.html";
var p5Page = "/p5/index.html";

function darkLightHome() {
  console.log(darkMode);
  console.log(page());
  if (darkMode == true) {
    darkMode = false;

    if (page() == homePage) {
      homeLight();
    }
  } else if (darkMode == false) {
    darkMode = true;

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
function darkLightTips() {
  if (darkMode == true) {
    darkMode = false;

    if (page() == tipsPage) {
      downloadsLight();
    }
  } else if (darkMode == false) {
    darkMode = true;

    if (page() == tipsPage) {
      downloadsDark();
    }
  }
}

function darkLightP5() {

  if (darkMode == true) {
    darkMode = false;

    if (page() == p5Page) {
      p5Light();
    }
  } else if (darkMode == false) {
    darkMode = true;

    if (page() == p5Page) {
      p5Dark();
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

// index (tips)
function tipsLight() {
  document.body.style.background = light;
  document.getElementById("_but").innerHTML = moon;

  codeText = document.getElementsByTagName("code");
  for (var i = 0; i < codeText.length; i++) {
    console.log("hej");
    codeText[i].style.backgroundColor = darkText;
  }
}
function tipsDark() {
  document.body.style.background = dark;
  document.getElementById("_but").innerHTML = sun;
  codeText = document.getElementsByTagName("code");
  for (var i = 0; i < codeText.length; i++) {
    console.log("ass");
    codeText[i].style.backgroundColor = "blue";
  }
}

// index (p5)

function p5Light() {
  document.body.style.background = light;
  document.getElementById("_but").innerHTML = moon;
  links = document.getElementsByTagName("a");
  for (var i = 6; i < links.length; i++) {
      links[i].style.color = lightText;
  }
}
function p5Dark() {
  document.body.style.background = dark;
  document.getElementById("_but").innerHTML = sun;
  links = document.getElementsByTagName("a");
  for (var i = 6; i < links.length; i++) {
      links[i].style.color = darkText;
  }
}
