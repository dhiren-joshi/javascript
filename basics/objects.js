/*
- What is an Object?
An object in JavaScript is a collection of key-value pairs (also called properties).
Think of it like a real-world object — it has properties (data) and methods (actions).

- Key Concepts
Keys (also called properties) are always strings (even if you don’t write them as strings).
Values can be any type: string, number, boolean, array, function, or even another object!

*/

//singleton object is an object that has only one instance, made unsing of constructor function

//object literal is a way to create an object using curly braces {}
const person = {}// Empty object
const sym = Symbol("key1")// Symbol key

const car = {
    company: "BMW", // String property
    year: 2023, // Number property  
    isElectric: false, // Boolean property
    features: ["Sunroof", "Leather seats"], // Array property
    model:"X3", // String property
    [sym]: "value1" // Symbol property but why[sym]? --it is the syntax to use symbols as keys
}

console.log(car.company);// Accessing the company property of car, Output: BMW
console.log(car["year"]);// Accessing the year property of car using bracket notation, Output: 2023

console.log(car[sym]);// Accessing the symbol property of car, Output: value1
car.model="X5"// Adding a new property to car

// Object.freeze(car)// Freezing the car object to prevent further modifications
// freezing an object means making it immutable, preventing any changes to its properties

car.model = "X6"// Attempting to change the model property after freezing, will not work
console.log(car);// Output: { company: 'BMW', year: 2023, isElectric: false, features: [ 'Sunroof', 'Leather seats' ], model: 'X5', [Symbol(key1)]: 'value1' }

car.horn=function(){
    console.log("Beep Beep!");// Adding a method to the car object
}
car.engine=function(){
    console.log(`Engine started!, ${this.name}`);// Adding another method to the car object why ${this.name}? as it is used to access the properties of the object
}
console.log(car.horn());// Calling the horn method, Output: Beep Beep!
// when use car.horn----->[Function (anonymous)]
console.log(car.engine());// Calling the engine method, Output: Engine started!, undefined

/*
output:
Beep Beep!
undefined
Engine started!, undefined
undefined
/*




/* 

                       Object Methods
| Method                          | What it does                                 |
| ------------------------------- | -------------------------------------------- |
| `Object.keys(obj)`              | Returns an array of keys                     |
| `Object.values(obj)`            | Returns an array of values                   |
| `Object.entries(obj)`           | Returns array of \[key, value] pairs         |
| `Object.assign(target, source)` | Copies properties from one object to another |
| `Object.freeze(obj)`            | Makes object read-only                       |
| `Object.seal(obj)`              | Prevents adding/removing properties          |

*/

/*  singleton object
 const hingeuser = new Object()// Creating a new object using the Object constructor
 console.log(hingeuser);// Output: {}
*/
 //   non-singleton object
 const hingeuser =  {}
 hingeuser.id="123a"
 hingeuser.name="sam"
 hingeuser.isloggedin = false

 const tinderuser = {
    email: "user@gmail.com",
    fullname:{    
        userfullname:{
            firstname: "john",
            lastname: "snow"
        }  // Nested object is used to store more complex data structures
 }
} 
console.log(tinderuser.fullname.userfullname.firstname);// Accessing nested object property, Output: john
console.log(tinderuser.fullname.userfullname.lastname);// Accessing nested object property, Output:snow

//combining objects
const obj1 ={1:"a", 2:"b"}
const obj2 ={3:"a", 4:"b"}
//const obj3 = {obj1, obj2} ----->// Output: { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } } 

//using Object.assign to combine objects
//const obj3 = Object.assign(obj1, obj2) // Using Object.assign to combine objects, it is a static method that copies the values of all enumerable own properties from one or more source objects to a target object.

//using spread operator to combine objects
const obj3 = {...obj1, ...obj2} // Using spread operator to combine
console.log(obj3); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const users = [
   {
    id: 1,
    email: "h@gmail.com"
   },
   {
    id: 2,
    email: "g@gmail.com"
},
{

},
{ 
    id: 3, 
    email: "t@gmail.com"
}

]
users[1].email
console.log(tinderuser);
console.log(Object.keys(tinderuser)); // Output: [ 'email', 'fullname' ]
console.log(Object.values(tinderuser)); // Output: [ '
console.log(Object.entries(tinderuser)); // Output:  [ [ 'email', 'user@gmail.com' ],    [ 'fullname', { userfullname: [Object] } ]


/*objest destructuring and json api
what is destructuring?
Destructuring is a JavaScript feature that allows you to extract values from arrays or properties from objects into distinct variables.
It makes it easier to work with complex data structures by allowing you to unpack values directly into variables
*/

const course = {
    name: "JavaScript Basics",
    duration: "4 weeks",
    price:"$99",
    instructor: "dhiren"
}
 
//course.instructor   other way to do in place of contibuously using course.instructor
const{instructor}= course//this is the other way to do destructuring, it allows you to extract the instructor property from the course object and assign it to a variable named instructor
console.log(instructor); // Output: dhiren
 
/*------------------API---------------------------------------------------------------------------------------------
    JSON API
JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy to read and write for humans and machines.
It is often used to transmit data between a server and a web application as an alternative to XML.
JSON is based on a subset of JavaScript, and it uses a syntax that is similar
to JavaScript object literals.
JSON is commonly used in APIs (Application Programming Interfaces) to send and receive data.
APIs often return data in JSON format, which can be easily parsed and used in JavaScript
eg:-

{
    "name": "JavaScript Basics",
    "duration": "4 weeks",
    "price": "$99"
}
JSON is a text format that is completely language-independent, making it a popular choice for data exchange between different programming languages.
JSON is often used in web development to send and receive data between a client (like a web browser) and a server.
It is also used in configuration files, data storage, and many other applications where structured data needs to be exchanged or stored.
JSON is easy to read and write, making it a popular choice for data interchange in web applications
*/

