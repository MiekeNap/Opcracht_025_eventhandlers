//opdracht 1
const button = document.querySelector('.btn-alert');
const buttonAlert = function(){
    alert("button clicked");
};

button.addEventListener('click', buttonAlert);

//opdracht 2
/*
const color = document.querySelector('.blue-background');
const changeColor = function(){
    color.classList.add("red-background");
};

color.addEventListener('click', changeColor);
*/

//opdracht 3
const color = document.querySelector('.blue-background');
const toggleColor = function(){
    color.classList.toggle("red-background");
};

color.addEventListener('click', toggleColor);