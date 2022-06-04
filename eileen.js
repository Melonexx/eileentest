let obj = { farbe: "gelb", höhe: 115 };
for (let element in obj) {
  console.log(element, obj[element]);
}

let list = ["apfel", "birne", "orange"];
for (let i = 0; i < list.length; i = i + 1) {
  console.log(list[i]);
}
