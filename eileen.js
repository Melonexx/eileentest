"use strict"

console.log(window.document)



const x = "#eins";
let queryselectordomeins = document.querySelector(x)

const paragraphtogglebutton = document.querySelector("#paragraphtogglebutton")


/**toggled die class "red" auf dem übergebenem element */
paragraphtogglebutton.addEventListener("click", function (event) {
  console.log(event)
  queryselectordomeins.classList.toggle("red")
})

const clickanzahl = document.querySelector("#clickizähler")



function clickzahl() {
  counter++;
  console.log(counter)
}



/**zeigt anzahl wie häufig der button geclicked wurde in console an */
clickanzahl.addEventListener("click", clickzahl)

let counter = 0 