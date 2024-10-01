const name = "Prashant"
const repoCount = 2

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('mariobrothers')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.indexOf('b'));
console.log(gameName.charAt(12));

const newString = gameName.substring(0,5)
console.log(newString);


const newStringn = gameName.substring(0,4)
console.log(newString);

const anotherStirng = gameName.slice(5,13 )
console.log(anotherStirng);
