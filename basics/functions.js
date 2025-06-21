/*
What is a Function?
A function is a block of reusable code that performs a specific task.

You can:

Define it once,

Call it multiple times,

Pass data to it (parameters),

And return a result.

Why use functions?
Functions help in organizing code, making it more readable and maintainable. They allow you to break down complex problems into smaller, manageable pieces.

*/



// Function to print my name
function myname() {
    console.log("D");
    console.log("H");
    console.log("I");
    console.log("R");
    console.log("E");
    console.log("N");
}
myname(); // calling the function to print my name
/*
 function to add two numbers
function addtwonumbers(a, b) {
    console.log(a+b);// prints the sum of a and b
}
//why you should use console.log here? because we want to see the output in the console
---->result put karne ke baad kuch bhi print nahi hoga
*/
function addtwonumbers(a, b) {
    /*
    another way to add two numbers
    let result = a + b;
    return result;
    */ 
   //it is not necessary to use a variable here, we can directly return the sum
    return a+b ;// returns the sum of a and b
}
console.log(addtwonumbers(10, 20)); // calling the function to add two numbers
//output: 30

function loginusermessage(username) {
    // console.log("Welcome " + username + " to our website");
    return "Welcome " + username + " to our website"; // returns the welcome message
}
//by using backticks
 function loginusermessage(username) {
    return `Welcome ${username} to our website`; // returns the welcome message using template literals
 }
console.log(loginusermessage("Dhiren")); // calling the function to login user
//output: Welcome Dhiren to our website
/*
why we use backticks? because it allows us to use variables inside the string without concatenation
why we use console.log here and not just loginusermessage("Dhiren")? 
because we want to see the output in the console, if we just call the function it will not print anything in the console 
*/

console.log(loginusermessage()); // calling the function without any argument
//output: Welcome undefined to our website
//this is because we are not passing any argument to the function, so it will return undefined



 function loginmessage(username="sam"){
    if(!username) {
        console.log("enter your username");
        return
    }
    return `Welcome ${username} to our website`; // returns the welcome message using template literals
 }

 console.log(loginmessage("Dhiren")); // calling the function with argument
//output: Welcome Dhiren to our website

//-----------------------------------------------------------------------------------------------------------------
/* functions with objects
WHAT IS AN OBJECT? 
An object is a collection of properties, where each property is defined as a key-value pair. Objects can represent real-world entities and can contain various data types, including other objects and functions.
*/
function UserDetails(id,name, ...user1){
    return user1
}
console.log(UserDetails("123Abc", "Dhiren", 500,2000,3000));
//output: [ '500', '2000', '3000' ]
//In this example, the function UserDetails takes an id, a name, and a rest parameter user1 that collects all additional arguments into an array. The function returns the user1 array containing the additional values passed to it.

 const user ={
    username:"dhiren",
    id: 1234
 }
function handleobject(anyobject) {
    console.log(`Username is ${anyobject.username} and id is ${anyobject.id}`);

}
handleobject(user);// output: Username is dhiren and id is 1234
//In this example, the function handleobject takes an object anyobject as an argument and accesses its properties username and id to print them.

/* We can also do like this
  handleobject({
    username:"dhiren",
    id: 1234
  });
This way, we can pass an object directly to the function without creating a separate variable.
*/
 
const myarray=[100,200,300,400,500];
function secondvalue(ogarray){
    return ogarray[1]
} 
console.log(secondvalue(myarray)); // output: 200
/*we can also pass an array directly to the function without creating a separate variable
 console.log(secondvalve([100,200,300,400,500])); // output: 200
*/

//-----------------------------------------------------------------------------------------------------------------




 