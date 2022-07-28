"use strict"

let einMehr = document.getElementById("einsMehr")

let einWeniger = document.getElementById("einsWeniger")

let zweiMehr = document.getElementById("zweiMehr")

let zweiWeniger = document.getElementById("zweiWeniger")

let counter = document.getElementById("anzahl")

let reset = document.getElementById("reset")

let zähler = 0

einMehr.addEventListener("click", function(){
  zähler=zähler+1
  counter.innerHTML=zähler
})

einWeniger.addEventListener("click",function(){
zähler=zähler-1
counter.innerHTML=zähler
})

zweiMehr.addEventListener("click",function(){
  zähler=zähler+2
  counter.innerHTML=zähler
})

zweiWeniger.addEventListener("click",function(){
  zähler=zähler-2
  counter.innerHTML=zähler
  })

reset.addEventListener("click",function(){
  zähler=0
  counter.innerHTML=zähler
})