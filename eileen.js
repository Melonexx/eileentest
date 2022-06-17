"use strict";
console.log(Object.keys({ name: "eileen", age: 22, iq: 136 }));
console.log(Object.values({ name: "eileen", age: 22, iq: 136 }));

Math.abs;

console.log(Math.abs(4587 - 22344));

console.log(Math.min(1, 2, 3));

console.log(Math.max(1, 2, 3));

console.log(Math.floor(4.1));

console.log(Math.random());

let a = "eileen";
console.log(a.substring(0, 3));
console.log(a.replace("e", "a"));
console.log(a.replaceAll("e", "a"));

/**replaced beliebig(n mal) oft, beginnend links*/
function replacentimes(target, searchvalue, replacement, n) {
  let i = 0;
  let result = target;
  while (i < n) {
    result = result.replace(searchvalue, replacement);
    i++;
  }
  return result;
}
console.log(replacentimes("eileen", "e", "a", 2) === "ailaen");

Number.prototype.toExponential;

console.log((1.2345).toFixed(2));

console.log((2000).toExponential());
console.log((0.02).toExponential());
