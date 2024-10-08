/*
>>>>Primitive<<<<
7 : Number, String, Boolean, Bigint, Null, Undefind,Symbol

const id = Symbol('123')
const anotherId = Symbol('123')
const bigNumber = 1234546789098765432234567n

>>>>Non-Primitive(Reference)<<<<
    Array, Object, Functions

const nums = [1,3,56543,2,76,5]
let myObj = {
    name : "RJ"
    age : 21
}
let myFunc = function(){
    console.log(0);
}

---------------------------------------------------------------------------------------------------------------------------

Stack (Primitive) , Heap(Non-Primitive)

let myYoutubeName = "PrashantTalks"
let anotherName = myYoutubeName
anotherName = "PrashantSpeaks"

console.log(myYoutubeName);
console.log(anotherName);



let userOne = {
    mail: "prashantm.05@gmail.com",
    upi: "user@sbil"
}

let userTwo = userOne

userTwo.upi = "prashantm05@sbil"
console.log(userOne.mail)
console.log(userTwo.mail)

*/