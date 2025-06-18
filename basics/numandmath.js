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

// Number.EPSILON//output: 2.220446049250313e-16
// Number.isSafeInteger//output: true if the number is a safe integer, false otherwise

//-------------------------------------------------------------------------

//part2 : math
/*
| Method           | Description             | Example                     |
|----------------| ----------------------- | --------------------------- |
| Math.abs(x)    | Absolute value          | `Math.abs(-5)` → 5          |
| Math.round(x)  | Nearest whole number    | `Math.round(4.6)` → 5       |
| Math.floor(x)  | Round down              | `Math.floor(4.9)` → 4       |
| Math.ceil(x)   | Round up                | `Math.ceil(4.1)` → 5        |
| Math.sqrt(x)   | Square root             | `Math.sqrt(16)` → 4         |
| Math.pow(x,y)  | Power                   | `Math.pow(2, 3)` → 8        |
| Math.max(...x) | Largest number          | `Math.max(1, 9, 4)` → 9     |
| Math.min(...x) | Smallest number         | `Math.min(1, 9, 4)` → 1     |
| Math.random()  | Random number (0 to <1) | `Math.random()` → 0.1234... |

*/

console.log(Math);//output: Math object with various properties and methods
console.log(Math.abs(-4));//output: 4
console.log(Math.round(4.6));//output: 5
console.log(Math.floor(4.9));//output: 4
console.log(Math.ceil(4.1));//output: 5
console.log(Math.max(1, 9, 4, 2, 5, 13));//output: 13
console.log(Math.min(1, 9, 4, 2, 5, 13));//output: 1
console.log(Math.random());//output: a random number between 0 and 1
console.log(Math.random()*10);//output: a random number between 0 and 10
console.log(Math.random()*10 + 1);//output: a random number between 1 and 11
console.log(Math.floor(Math.random()*10) + 1);//output: a random integer between 1 and 10 but it should be 0 to 9, so add 1 to get 1 to 10

const min= 10;
const max= 20;
//console.log(Math.random() * (max - min) + min); //output: a random number between 10 and 20

console.log(Math.floor(Math.random() * (max - min + 1) + min)); //output: a random integer between 10 and 20
