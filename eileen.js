"use strict"
//was ist der unterschied zwischen queryselector und getelementbyid??
let changedTheme = document.querySelector("#changedTheme")
let changingButton = document.getElementById("changeButton")

const changeButton = document.querySelector("#changeButton")


changeButton.addEventListener("click",function(){
changedTheme.classList.toggle("bluei")
changingButton.innerHTML="reset"
})



