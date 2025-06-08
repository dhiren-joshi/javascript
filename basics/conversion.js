let age = 33
//const {age}=req.body
console.log(typeof age);
console.log(typeof (age));

let valueinNumber = Number(age)//here we are converting 
console.log(typeof valueinNumber);

/* for age ="33" o/p:
number
number
number
*/

console.log(valueinNumber); // o/p->NaN, where age "33abc"
/* for age ="33a" o/p:
string
string
number
NaN
*/

/* for age =null 
object
object
number
0
*/

/* for age = undefined
undefined
undefined
number
NaN
*/

/* for age = true
boolean
boolean
number
1
*/

let isloggedIn=1
let booleanisLoggedIn = Boolean(isloggedIn)
console.log(booleanisLoggedIn);
//output 
// ""-->false, as its empty
// 1-->true
//0-->false
//"hitesh"-->true

let somenumber= 10
let stringnumber= String(somenumber)
console.log(stringnumber);
console.log(typeof stringnumber);
//output:
//10
//string
