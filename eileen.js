"use strict"

console.log(window.document)




let queryselectordomeins = document.querySelector("#eins")

const paragraphtogglebutton = document.querySelector("#paragraphtogglebutton")


/**toggled die class "red" auf dem übergebenem element */
paragraphtogglebutton.addEventListener("click", function (event) {
  console.log(event)
  queryselectordomeins.classList.toggle("red")
})