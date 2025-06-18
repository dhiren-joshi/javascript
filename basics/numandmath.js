//part1 : nums
const score = 400
console.log(score);


const balance = new Number(1000)
console.log(balance);
console.log(balance.toString().length);//output: 4
console.log(balance.toFixed(2));//output: 1000.00

const otherNumber = 12.232
console.log(otherNumber.toPrecision(3));//output: 12.2 
//if 1222.232 is given, it will output 1.22e+4

Number.EPSILON//output: 2.220446049250313e-16
Number.isSafeInteger//output: true if the number is a safe integer, false otherwise