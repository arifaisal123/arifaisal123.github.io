var mySpan = document.getElementById("changing_tech");
var textArray = ["SQL", "Flask", "Python", "Javascript", "C", "HTML", "CSS", "Bootstrap", "Lua"]; // an array of texts to cycle through
var index = 0;

setInterval(function() {
  mySpan.innerHTML = textArray[index];
  index++;
  if (index == textArray.length) {
    index = 0;
  }
}, 2000); // change every 2 seconds (2000 milliseconds)

