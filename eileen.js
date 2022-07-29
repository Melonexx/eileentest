"use strict"
//was ist der unterschied zwischen queryselector und getelementbyid??
let rootElement = document.querySelector("#root")
let changingButton = document.getElementById("changeButton")

const changeButton = document.querySelector("#changeButton")

const classBluei = "bluei";
const classRosai = "rosai";

changeButton.addEventListener("click", function () {

  if (rootElement.classList.contains(classBluei)) {
    rootElement.classList.add(classRosai);
    rootElement.classList.remove(classBluei);
    changeButton.innerHTML = "change to blue";
  }
  else {
    rootElement.classList.remove(classRosai);
    rootElement.classList.add(classBluei);
    changeButton.innerHTML = "change to rosa";
  }

})



