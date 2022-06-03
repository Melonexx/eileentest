const z = true;
let a;

let hund1 = { name: "bruno" };
let hund2 = { name: "bruno" };
console.log(hund1 == hund2);
console.log(1 == "1");

let x = 1;
console.log(x);
x = 2;
console.log(x);

let d = "dummkopf";
console.log(typeof d);

let typeofd = typeof d;
console.log(typeofd);

let hunde = ["hugo", "helga", "johannes", "igor"];
console.log(hunde);
let hunde2 = { 0: "hugo", 1: "helga", 2: "johannes", 3: "igor" };
console.log(hunde2);
console.log(console);

let add = (a, b) => a + b;
console.log(add(1, 7));

function increment(a) {
  return add(a, 1);
}
console.log(increment(9));

let minus = (a, b) => a - b;

let rechner = { plus: add, minus: minus };

console.log(rechner.minus(3, 2));

let k = ["Eileen", "Robert", "Lea"];

let j = 0;
while (j !== 10) {
  j = j + 1;
  console.log(j);
}

console.log("" == false);

for (let el of k) {
  console.log(el);
}

let h = [1, 2, 3, 4];
console.log(h);

function sum(h) {
  let summe = 0;
  for (let element of h) {
    summe = summe + element;
  }
  return summe;
}
console.log(sum(h));
