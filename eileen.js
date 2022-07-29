"use strict"
//was ist der unterschied zwischen queryselector und getelementbyid??
let rootElement = document.querySelector("#root")
let changingButton = document.getElementById("changeButton")

const changeButton = document.querySelector("#changeButton")

const classBluei = "bluei";
const classRosai = "rosai";
const rosaText = "change to blue";
const blueText = "change to rosa";
const localStorageThemeKey = "theme"; //alles (variablen und functions) was man mehr als 1 mal schreibt, sollte man auslagern.

const storedThemeClass = localStorage.getItem(localStorageThemeKey) ?? classRosai;
rootElement.classList.add(storedThemeClass)
changeButton.innerHTML = storedThemeClass === classRosai ? rosaText : blueText;


function toggleTheme(oldClass, newClass, newText) {
  rootElement.classList.add(newClass);
  rootElement.classList.remove(oldClass);
  changeButton.innerHTML = newText;
  localStorage.setItem(localStorageThemeKey, newClass);
}

changeButton.addEventListener("click", function () {

  if (rootElement.classList.contains(classBluei))
    toggleTheme(classBluei, classRosai, rosaText)
  else toggleTheme(classRosai, classBluei, blueText)

})



