/*
✅ What is an Array?
An array is a special variable that can hold multiple values in a single variable.
- Arrays use square brackets [].
- Elements are indexed starting from 0.
 
how to create an array in JavaScript?
There are several ways to create an array in JavaScript:

- Using literal
const numbers = [1, 2, 3, 4];

- Using constructor
const cars = new Array("BMW", "Audi", "Tesla");

- Empty array
const empty = [];

=>shallow copy 
It is a copy of the array that contains references to the same objects as the original array.

*/

const myArr =[0,1,2,3,4,5]// Array of numbers
const myCars = ["BMW", "Audi", "Tesla"]// Array of strings
const myArr2  = new Array(1, 2, 3, 4, 5)// Array using constructor
const myEmptyArr = []// Empty array

console.log(myArr[1]);// Accessing the second element of myArr

/*array methods

| Method       | What It Does                     | Example             |
| ------------ | -------------------------------- | ------------------- |
| `push()`     | Adds to end                      | `arr.push(4)`       |
| `pop()`      | Removes last item                | `arr.pop()`         |
| `unshift()`  | Adds to beginning                | `arr.unshift(0)`    |
| `shift()`    | Removes first item               | `arr.shift()`       |
| `includes()` | Checks if value exists           | `arr.includes(2)`   |
| `indexOf()`  | Finds position                   | `arr.indexOf(10)`   |
| `splice()`   | Add/remove at index              | `arr.splice(1, 2)`  |
| `slice()`    | Copies a part                    | `arr.slice(1, 3)`   |
| `join()`     | Converts array to string         | `arr.join("-")`     |
| `reverse()`  | Reverses the array               | `arr.reverse()`     |
| `sort()`     | Sorts alphabetically/numerically | `arr.sort()`        |
| `concat()`   | Combines arrays                  | `arr1.concat(arr2)` |

*/

myArr.push(6)// Adding an element to the end of myArr
console.log(myArr);// Output: [0, 1, 2, 3, 4, 5, 6]
myArr.pop()// Removing the last element of myArr
console.log(myArr);// Output: [0, 1, 2, 3,4, 5]
myArr.unshift(9)// Adding an element to the beginning of myArr 
console.log(myArr);// Output: [9, 0, 1, 2, 3, 4, 5] 
myArr.shift()// Removing the first element of myArr
console.log(myArr);// Output: [0, 1, 2, 3, 4, 5]

console.log(myArr.includes(2));// Checking if 2 is in myArr, Output: true
console.log(myArr.indexOf(10));// Finding the index of 10 in myArr, Output: -1 (not found)
console.log(myArr.indexOf(2));// Finding the index of 2 in myArr, Output: 2

const newArr = myArr.join();// Joining elements of myArr into a string
console.log(myArr);// Output: [0, 1, 2, 3, 4, 5]

console.log(typeof newArr);// Output: string
console.log(newArr);// Output: "0,1,2,3,4,5"


/* 
       slice and splice

slice() – Makes a Copy
What it does:
Returns a shallow copy of a portion of the array.
Does NOT modify the original array.
Syntax: array.slice(start, end)

splice() – Modifies the Array
What it does:
Changes the original array by adding/removing elements.
Can delete, insert, or replace items.
Syntax: array.splice(start, deleteCount, item1, item2, ...)


*/

console.log("A ", myArr);
const mynew1 = myArr.slice(1, 3);// Copying elements from index 1 to 3 (not including 3)
console.log(mynew1);// Output: [1, 2]
console.log("B ", myArr);// Original array remains unchanged

const mynew2 = myArr.splice(1, 3);// Removing 3 elements starting from index 1
console.log("C ", myArr);// Output: [0, 4, 5]
console.log(mynew2);// Output: [1, 2, 3]



const heroes = ["Batman", "Superman", "Wonderwoman", "Flash"];
const villains = ["Joker", "Lex Luthor", "Cheetah", "Reverse Flash"];

// push is used to add elements to the end of an array

heroes.push(villains); // Adding villains array to heroes
console.log(heroes); // Output: ["Batman", "Superman", "Wonderwoman", "Flash", ["Joker", "Lex Luthor", "Cheetah", "Reverse Flash"]]
console.log(heroes[4][0]); // Accessing Joker from villains array inside heroes
console.log(heroes[4][1]); // Accessing Lex Luthor from villains array inside

//concat is used to combine two or more arrays
const allheores = heroes.concat(villains); // Combining heroes and villains arrays
console.log(allheores); // Output: ["Batman", "Superman", "Wonderwoman", "Flash", ["Joker", "Lex Luthor", "Cheetah", "Reverse Flash"]]

/*
spread operator 
It is used to expand elements of an array
eg: kach ka gilas to neeche pheka to sab pieces spread ho jayenge
*/
const allHeroesSpread = [...heroes, ...villains]; // Combining heroes and villains using spread
console.log(allHeroesSpread); // Output: ["Batman", "Superman", "Wonderwoman", "Flash", "Joker", "Lex Luthor", "Cheetah", "Reverse Flash"]

//flat() method 
//it is used to flatten nested arrays which means it will remove the nested structure and return a single array with all elements at the same level.
const anotherArr = [1, 2, 3, 4, 5,[6, 7, 8],9,[6,7,[4,5]]]; // Nested array 
console.log(anotherArr.flat(Infinity));// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 6, 7, 4, 5]
/*
why infinity?
Because it will flatten all levels of nesting, no matter how deep they are.
*/

console.log(Array.isArray("dhiren"));// Checking if "dhiren" is an array, Output: false
console.log(Array.from("dhiren"));// Converting string to array, Output: ["d", "h", "i", "r", "e", "n"]
console.log(Array.from({name: "Dhiren" }));// Converting an object to array, Output: []  we have to give it creiteria from which it has to make array like key or value othervise it will return empty array


/*
aarray.of() method
it is used to create an array from a set of arguments
*/
let score1 =100;
let score2 = 200;
let score3 = 300;
let score4 = 400;
console.log(Array.of(score1, score2, score3, score4)); // Output: [100, 200, 300, 400]
