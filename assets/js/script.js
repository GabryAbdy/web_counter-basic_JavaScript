//HTML elements creation

//container creation
const container = document.createElement('div');
container.className = "container";
document.body.appendChild(container);

//instructions container creation
const tutorial = document.createElement("div");
tutorial.className = "tutorial";
container.appendChild(tutorial);
const title = document.createElement("h1");
title.innerHTML = "Web Counter";
tutorial.appendChild(title);
const parag = document.createElement("p");
parag.innerHTML = `Premi il pulsante "+" per incrementare il contatore di 1.</br>
Premi il pulsante "-" per diminuire il contatore di 1.</br>
Divertiti!`;
tutorial.appendChild(parag);

//interface creation
const interface = document.createElement('div');
interface.className = "interface";
container.appendChild(interface);

//display creation
const display = document.createElement("div");
display.className = "display";
interface.appendChild(display);
display.innerHTML = "0";

//buttons container creation
const btnContainer = document.createElement("div");
btnContainer.className = "btnContainer";
interface.appendChild(btnContainer);

//buttons creation
const plusBtn = document.createElement("button");
plusBtn.innerHTML = "+";
plusBtn.className = "buttons";
btnContainer.appendChild(plusBtn);
const minusBtn = document.createElement("button");
minusBtn.innerHTML = "-";
minusBtn.className = "buttons";
btnContainer.insertBefore(minusBtn, plusBtn);
const resetBtn = document.createElement("button");
resetBtn.innerHTML = "reset";
resetBtn.className = "buttons reset";
btnContainer.insertBefore(resetBtn, plusBtn);

//Functionality
let count = 0;

plusBtn.onclick = function() {
    count++;
    display.innerHTML = count;
}

minusBtn.onclick = function() {
    count--;
    display.innerHTML = count;
}

resetBtn.onclick = function() {
    count = 0;
    display.innerHTML = count;
}