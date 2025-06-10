//A string in JavaScript is just text, like a word or a sentence. You put text inside quotes to make a string.
/*
You can use:

Double quotes: "text"
Single quotes: 'text'
Backticks: `text` (for special strings called template literals)
*/

const name = "dhiren"
const repocount= 10
//we are using backticks-string interpolation here

console.log(`hello my name is ${name} and my repo count is ${repocount}` )

/*

Backticks (`) in JavaScript are used for template literals. They let you:
Insert variables easily using ${variable} (string interpolation).
Write multi-line strings without special characters.

*/

// Creating a string 
const gamename = new String('Call of Duty')// Creating a string object using the String constructor
console.log(gamename[0]);// Accessing the first character of the string using index
console.log(gamename.__proto__);// String object has a prototype that contains methods like charAt, indexOf, etc.   

//string methods
console.log(gamename.length);// Getting the length of the string
console.log(gamename.toUpperCase());// Converting the string to uppercase
console.log(gamename.toLowerCase());// Converting the string to lowercase
console.log(gamename.charAt(2));// Getting the character at index 2       
console.log(gamename.indexOf('o'));// Finding the index of the first occurrence of 'o'

//substring concept
const newString= gamename.substring(0,4)
console.log(newString);// Extracting a substring from index 0 to 4

//slice concept
const anotherString = gamename.slice(-8,4)// Extracting a substring using slice, which can also handle negative indices
console.log(anotherString);// Extracting a substring using slice, which can also handle negative indices

// trim concept
const newStringone = "   dhiren   "
console.log(newStringone);// Original string with whitespace
console.log(newStringone.trim());// Removing whitespace from both ends of the string
console.log(newStringone.trimStart());// Removing whitespace from the start of the string
console.log(newStringone.trimEnd());// Removing whitespace from the end of the string

//url concept
const url = "https://www.example.com/path/to/resource?query=param#fragment"
console.log(url.replace('?query','-'))// Replacing part of the URL
console.log(url.includes('fragment'))// Checking if the URL contains 'fragment'

