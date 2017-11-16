// document.querySelector will return a single element matching the criteria withinthe ()
document.querySelector('#header').textContent = "Hello World";

document.querySelector(".p-styles").textContent = "Bahuh?";

var header = document.querySelector("#header");
header.textContent = "Hello World";

// document.querySelectorAll will return an array like data structure which contains all elements that match the criteria passed with the ()
var pStyles = document.querySelectorAll('.p-styles');

for (var x = 0; x < pStyles.length; x++) {
  pStyles[x].textContent = "I'm p-styles" + (x + 1);
}

var li = document.querySelectorAll("li");

for (var x = 0; x < li.length; x++){
  li[x].textContent = "List" + (x + 4);
}

// Another way to select an element by its ID is document.getElementByID

document.getElementById('second-header').textContent = "Something";

var awesomes = document.getElementsByClassName('awesome');

console.log(awesomes);

for (var x = 0; x < awesomes.length; x++) {
  awesomes[x].textContent = x + 1;
}

var h3s = document.getElementsByTagName('h3');

for (var x = 0; x < h3s.length; x++) {
  h3s[x].textContent = "Hellos";
}
