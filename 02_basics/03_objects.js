// singleton 

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Anurag",
    "full name": "Anurag Kumar Rai",
    [mySym]: "mykey1",
    age: 25,
    location: "Jamshedpur",
    email: "anurag@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","saturday"]
}
console.log(JsUser)
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);
console.log(typeof JsUser[mySym]);   //**

JsUser.email = "anurag@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "anurag@micro.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello Js user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
}


console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());