const accountId = 144553
let accoountEmail = "abc@google.com"
var accountPassword = "12345"
accountCity = "jamshedpur"
let accountState;

// accountId = 2 // not allowed

accoountEmail = "hc@hc.com"
accountPassword ="21212121"
accountCity = "gamharia"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/



console.table([accoountEmail, accountId, accountPassword, accountCity, accountState])