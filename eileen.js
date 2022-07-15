"use strict"

//zweites beispiel zur erstellung von classes =wohnung

class Wohnung {
  location;
  constructor(location) {
    this.location = location
  }
}
class Zimmer {
  height;
  constructor(height) {
    this.height = height
  }
}

class WohnZimmer extends Zimmer {
  constructor(height) {
    super(height)
  }
}

class SchlafZimmer extends Zimmer {
  constructor(height) {
    super(height)
  }
}

class Möbel extends Zimmer{
  whatKind;
  colour;
  material;
  constructor(height, whatKind,colour,material){
  super(height)
  this.whatKind=whatKind
  this.colour=colour
  this.material=material

  }
  
}

const wohnZimmer = new WohnZimmer(20)
const schlafZimmer = new SchlafZimmer(18)
const universalZimmer = new Zimmer(10)
const universalZimmer2 = new Zimmer(12)
const möbelStück1 = new Möbel(1,"stuhl","black","wood")
const möbelStück2 = new Möbel(2, "bed", "white","wood")

const zimmer = [wohnZimmer, schlafZimmer, universalZimmer, universalZimmer2]

const wohnung1 = new Wohnung("berlin")

console.log(zimmer)
console.log(wohnZimmer)
console.log(möbelStück1)
console.log(möbelStück2)
