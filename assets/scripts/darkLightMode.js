// Bools
var darkMode = true;
// Colors
var dark = "#282828";
var light = "#f7fff7";
var lightText = "#ffffff";
var darkText = "black";

var codeBackdropLight  = "#f1f1f1";
var codeTextColorLight = "#e03a5b";

var codeBackDropDark  = "#d3d3d3";
var codeTextColorDark = "black"; 
// Emojies
var sun = "🌞";
var moon = "🌚";
// Pages
var homePage = "/";
var downloadPage = "/downloads/index.html";
var tipsPage = "/tips/index.html";
var p5Page = "/p5/index.html";

function darkLightHome() {

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
      tipsLight();
      
    }
  } else if (darkMode == false) {
    darkMode = true;

    if (page() == tipsPage) {
      tipsDark();
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

function icoChanger(moonSun) {
  icon = document.querySelector("link[rel~='icon']");
  var moonIco = "assets/imgs/favicon_io/faviconMoon.ico"
  var sunIco  = "assets/imgs/favicon_io/faviconSun.ico"
  
  if (page() != "/") {
    moonIco = "../assets/imgs/favicon_io/faviconMoon.ico";
    sunIco = "../assets/imgs/favicon_io/faviconSun.ico"
  }
  
  if (moonSun.toLowerCase() == "moon") {
    icon.href = moonIco;
  } else if (moonSun.toLowerCase() == "sun") {
    icon.href = sunIco;
  }

}

// index (home)
function homeLight() {
  document.body.style.background = light;
  document.getElementById("_but").innerHTML = moon;
  icoChanger("sun");

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
  icoChanger("moon");

  links = document.getElementsByTagName("a");
  header = document.getElementsByClassName("Header");
  header[0].style.color = darkText;

  for (var i = 6; i < links.length; i++) {
    links[i].style.color = darkText;
  }
}

// index (downloads)

function downloadsLight() {
  document.body.style.background = light;
  document.getElementById("_but").innerHTML = moon;
  icoChanger("sun");

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
  document.getElementById("_but").innerHTML = sun;
  icoChanger("moon");

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
  icoChanger("sun");

  var codeText = document.getElementsByClassName("CodeText");
  var Text = document.getElementsByClassName("Text");
  for (var i = 0; i < codeText.length; i++) {
    codeText[i].style.backgroundColor = "lightGrey";//codeBackDropDark;
    codeText[i].style.color           = codeTextColorLight;
    
  }
  for (var i = 0; i < Text.length; i++) {
    Text[i].style.color = darkText;
  }
}
function tipsDark() {
  document.body.style.background = dark;
  document.getElementById("_but").innerHTML = sun;
  icoChanger("moon");
  var codeText = document.getElementsByClassName("CodeText");
  var Text = document.getElementsByClassName("Text");
  
  for (var i = 0; i < codeText.length; i++) {
    codeText[i].style.backgroundColor = codeBackdropLight;
    codeText[i].style.color           = codeTextColorLight;
  }
  for (var i = 0; i < Text.length; i++) {
    Text[i].style.color = lightText;
  }
}

// index (p5)

function p5Light() {
  document.body.style.background = light;
  document.getElementById("_but").innerHTML = moon;
  icoChanger("sun");

  links = document.getElementsByTagName("a");
  for (var i = 6; i < links.length; i++) {
      links[i].style.color = lightText;
  }
}
function p5Dark() {
  document.body.style.background = dark;
  document.getElementById("_but").innerHTML = sun;
  icoChanger("moon");

  links = document.getElementsByTagName("a");
  for (var i = 6; i < links.length; i++) {
      links[i].style.color = darkText;
  }
}
