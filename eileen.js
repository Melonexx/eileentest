"use strict"

let blueTheme = document.querySelector("#umrissBlau")
let pinkTheme = document.querySelector("#umrissPink")

const blueButton = document.querySelector("#blueButton")
const pinkButton = document.querySelector("#pinkButton")

blueButton.addEventListener("click",function(){
blueTheme.classList.toggle("bluei")
})

pinkButton.addEventListener("click",function(){
  pinkTheme.classList.toggle("pinki")
})

