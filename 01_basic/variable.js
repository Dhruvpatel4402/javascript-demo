const accountId=144553
let accounntEmail="dhruv@gmail.com"
var accountPassword="12345"
accountCity="ahmedabad"
let accountState;
// accountId=2  // not allowed
console.log(accountId);

/* prefer no use var because  of issue of block scope and functonal scope*/

accounntEmail="sakshi@gmail.com"
accountPassword="1234"
accountCity="bhavnagar"

console.table([accountId,accounntEmail,accountPassword,accountCity,accountState])