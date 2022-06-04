let obj = { farbe: "gelb", höhe: 115 };
for (let element in obj) {
  console.log(element, obj[element]);
}

let list = ["apfel", "birne", "orange"];
for (let i = 0; i < list.length; i = i + 1) {
  console.log(list[i]);
}

//summen function
let f = [1, 2, 3, 4];

function sum(f) {
  let summe = 0;
  let i = 0;
  for (i; i < f.length; i = i + 1) {
    let el = f[i];
    summe = summe + el;
  }
  return i;
}
console.log(sum(f));

{
  let x = 1;
}

console.log(x);
