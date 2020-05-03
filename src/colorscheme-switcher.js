// original author: ekaitz_zarraga (https://ekaitz.elenq.tech/dark-light-theme.html)

var theme_switch = document.getElementById("dark-light-switch");
var body = document.getElementsByTagName("body")[0];

function init( color ){
  change(color, true);
  localStorage.setItem('color', color);
  theme_switch.setAttribute("color", color);
}

function change(color, nowait){
  // Discard transition is nowait is set
  if(nowait !== true){
    window.setTimeout(function() {
      document.documentElement.classList.remove('color-theme-in-transition')
    }, 1000)
    document.documentElement.classList.add('color-theme-in-transition');
  }

  document.documentElement.setAttribute('data-theme', color);
  theme_switch.setAttribute("color", color);
  localStorage.setItem("color", color);
}

function theme_change_requested(){
  color = theme_switch.getAttribute("color");
  if(color=="light")
    change("dark");
  else
    change("light");
}

function getCurrentColor(){
  // Color was set before in localStorage
  var storage_color = localStorage.getItem("color");
  if(storage_color !== null){
    return storage_color;
  }

  // If local storage is not set check the background of the page
  // This is dependant of the CSS, be careful
  var background = getComputedStyle(body).getPropertyValue("background-color");
  background = "rgb(255, 255, 255)";
  if(background == "rgb(255, 255, 255)") {
    return "light";
  } else {
    return "dark";
  }
}

init( getCurrentColor() )
theme_switch.addEventListener("click", theme_change_requested);
