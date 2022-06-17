let o = { name: "eileen", age: 22 };

for (let key in "hugo") {
  console.log(key, o[key]);
}

let list = ["äpfel", "banane"];
for (let key in list) {
  console.log(key, list[key]);
}
