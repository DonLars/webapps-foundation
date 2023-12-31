"use strict";
// Zuweisung der Variablen für Stellen im DOM
const main = document.querySelector("main");
const counter = document.querySelector(".counter");
const items = document.querySelectorAll("section.item");
const resetBtn = document.getElementById("reset");

resetBtn.addEventListener("click", clearAll);

function clearAll() {
  console.log("clear");
  current = 0;
  counter.innerHTML = 0;
  items.forEach((item) => {
    item.classList.remove("active");
  });
}
// Zuweisung eines unabhängigen Zählers
let current = 0;

// Klick-Event-Listener reagiert auf Klick auf "Main"
main.addEventListener("click", isMainClicked);

// Funktion, wenn man auf "Main" klickt
function isMainClicked() {
  // Der Counter, der im HTML auf 0 steht, rechnet +1
  counter.innerHTML++;

  // Fügt die Klasse "active" zum aktuellen Element hinzu (aktueller Zähler)
  items[current].classList.add("active");

  // Erhöhe den Zähler für das nächste Element
  current++;

  // Wenn current größer oder gleich der Anzahl der Elemente entferne die Klasse "active"
  if (current >= items.length) {
    items.forEach((item) => {
      item.classList.remove("active");
    });

    // Am Ende setze current auf 0
    current = 0;
  }
}

/* Musterlösung 

let counter = 0;
let colorCounter = 0;
const label = document.querySelector("label");

function increaseCounter() {
  counter++;
  label.innerText = counter;

  colorCounter++;
  if (colorCounter === 101) {
    colorCounter = 1;
  }
  main.style.setProperty("--counter", colorCounter + "%");
}
const main = document.querySelector("main");
main.addEventListener("click", increaseCounter);

function resetCounter() {
  counter = 0;
  colorCounter = 0;
  label.innerText = counter;
  main.style.setProperty("--counter", 0 + "%");
  button.blur();
}
const button = document.querySelector("button");
button.addEventListener("click", resetCounter);

document.addEventListener("keypress", function (e) {
  console.log(e.key);
  if (["Enter", " "].includes(e.key)) {
    increaseCounter();
  }
});


*/
