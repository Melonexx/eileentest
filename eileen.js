let list = [2, -3];
console.log(list);

for (let el of list) {
  el = el + 1;
  console.log(el);
}

console.log(list);

function plus(a) {
  for (let i = 0; i < a.length; i = i + 1) {
    a[i] = a[i] + 1;
  }
}
plus(list);
console.log(list);

function langi(a) {
  let list5 = [];
  for (let i = 0; i <= a; i++) {
    list5.push(i);
  }
  return list5;
}
console.log(langi(5));
