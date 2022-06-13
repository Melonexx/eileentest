//  function die den wert true zurück gibt

/** gibt true zurück */
function wahr() {
  return true;
}
console.log(wahr() === true);

// function, welche zwei zahlen multipliziert

/** multipliziert zwei zahlen */
function product(a, b) {
  return a * b;
}
console.log(product(-2, -2) === 4);
console.log(product(2, 2) === 4);
console.log(product(-2, 2) === -4);
console.log(product(2, -2) === -4);
console.log(product(0, -2) === 0);
console.log(product(2, 0) === 0);

// function, welche prüft ob eine zahl negativ ist

/**prüft ob zahl negativ ist */
function negativ(a) {
  console.log("hai");
  if (a < 0) {
    return true;
  } else {
    return false;
  }
}

console.log(negativ(2) === false);
console.log(negativ(-2) === true);
console.log(negativ(0) === false);

// function negativ mit weniger zeichen schreiben

function negative(a) {
  //wenn man functionen gleich benennt, werden sie überschrieben
  console.log("haii");
  return a < 0;
}

console.log(negative(2) === false);
console.log(negative(-2) === true);
console.log(negative(0) === false);
