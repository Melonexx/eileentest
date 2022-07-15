"use strict"

//functions

//function die eine array erstellt von 1-n
/**erstellt array von 1-n*/
function arrayersteller (n){
  let list1=[]
  for(let i=1;i<=n;i++){
    list1.push(i)
  }
  return list1
}
console.log(arrayersteller(10))

//function die eine array mit allen ungeraden zahlen 1-n erstellt
//version 1
/**erstellt array mit ungeraden zahlen 1-n */
function oddnumberarray(n){
  let list1=[]
  for(let i=1;i<=n;i++){
    if(i%2===1){
      list1.push(i)
    }
  }
  return list1
}
console.log(oddnumberarray(12))

//version 2
/**erstellt array mit ungeraden zahlen 1-n */
function oddnumberarray2(n){
  let list2 =[]
  for(let i=1;i<=n;i+2){
    list2.push(i)
  }
  return list2
}
console.log(oddnumberarray(12))

//xor function
/**xor */
function xor(boolean1, boolean2){
  if(boolean1===true&&boolean2===true){
    return false
  }
  if(boolean1===true&&boolean2===false){
    return true
  }
  if(boolean1===false&&boolean2===true){
    return true
  }
  if(boolean1===false&&boolean2===false){
    return false
  }
}

console.log(xor(true,true)===false) //testfall 1
console.log(xor(true,false)===true) //testfall 2
console.log(xor(false,true)===true) //testfall 3
console.log(xor(false,false)===false) //testfall 4


