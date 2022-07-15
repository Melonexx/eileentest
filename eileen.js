"use strict"

class Forest {
  trees;
  colour;
  constructor(trees, colour) {
    this.trees = trees
    this.colour = colour
  }

  addTree(tree) {
    this.trees.push(tree)
  }

  changeColour(newColour) {
    this.colour = newColour
  }
}
class Tree {
  height;
  constructor(height) {
    this.height = height
  }
  grow(value) {
    this.height = this.height + value
  }

}

class NadelBaum extends Tree {
  constructor(height) {
    super(height)
  }
}

class LaubBaum extends Tree {
  constructor(height) {
    super(height)
  }
}

const baum1 = new Tree(6)
const baum2 = new Tree(7)
const nadelBaum1 = new NadelBaum(8)
const laubBaum1 = new LaubBaum(4)

const trees = [baum1, baum2, nadelBaum1, laubBaum1]
const wald1 = new Forest(trees, "green")




console.log(wald1)

wald1.changeColour("yellow")

console.log(wald1)

baum1.grow(16)

console.log(baum1)