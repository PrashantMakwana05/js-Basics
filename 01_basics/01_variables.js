const accountId = 5444
let accountMail = "prashant@gmail.com"
var accountPass = "Ek13saath"
accountcity = "gurugram"
let accountState
//dont use var(outdated) because of issue in block scope
/*
use for multi-line comment
By the way ->> wont work
accountId =5445
 */

accountcity = "ahmedabad"
console.log(accountId);
//To print a single thing
console.table([accountId, accountPass, accountMail, accountcity, accountState])