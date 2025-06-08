 const accountId = 1222
 let accountemail="acc123@mail.com"
 var accountpassword="123"
 accountCity="udaipur"
//js also support the above when it is not written anything like let vars const, but it is not recommended

 // accountId=111---->this is not allowed as we have declare it const//

//changing values
accountemail="acc345@mail.com"
accountpassword="456"
accountCity="jaipur"
 console.log(accountId);
 
 //to put multiple values in console.log-->use console.table

 console.table([accountId,accountemail,accountpassword, accountCity])

 /*
 this is the output

│ (index) │ Values            │
├─────────┼───────────────────┤
│ 0       │ 1222              │
│ 1       │ 'acc345@mail.com' │
│ 2       │ '456'             │
│ 3       │ 'jaipur'          |

*/
//why let is used and not var --->because of block scope and funtional scope problem
