// primitive

//  7 types : String, Number, Boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 34895548548922n



//  Reference (Non primitive)

// Array, object, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "anurag",
    age: 19,
}

const myfunction = function(){
    console.log("hello world");
}

console.log(typeof anotherId);


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non primitive)

let myYoutubename = "hiteshchoudharydotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "anurag@google.com"

console.log(userOne.email);
console.log(userTwo.email);