"use strict";
let list = ["apfel", "börne", "banane"];

let a = 0;
for (let item of list) {
  console.log(a, item);
  a++;
}

for (let i = 0; i < list.length; i++) {
  console.log(list[i]);
}
