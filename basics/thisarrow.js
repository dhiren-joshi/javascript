/* this function
this function is used to demonstrate the use of this and arrow functions.
It shows how the context of `this` changes when using arrow functions compared to regular functions.
It also shows how to use the `this` keyword to access properties of an object.
*/
const user = {
    username: "dhiren",
    price: 100,
    welcomeMessage: function() {
       console.log(`${this.username} , welcome to the website!`); 
       console.log(this); // Output: user object
       
    }

} 

user.welcomeMessage(); // Output: "dhiren , welcome to the website!"
//explanation: Here, `this` refers to the `user` object, so `this.username` accesses the `username` property of the `user` object.

user.username="dhiren joshi"
user.welcomeMessage(); // Output: "dhiren joshi , welcome to the website!"

//console.log(this);--->o/p:{}, explanation: Here, `this` still refers to the `user` object, so `this.username` accesses the updated `username` property of the `user` object.
 /*
dhiren , welcome to the website!
{
  username: 'dhiren',
  price: 100,
  welcomeMessage: [Function: welcomeMessage]
}
dhiren joshi , welcome to the website!
{
  username: 'dhiren joshi',
  price: 100,
  welcomeMessage: [Function: welcomeMessage]
}
current context show karta hai
*/

/*
function coffee(){
    let username="dhiren"
    console.log(this.username);
}
coffee()//undefined


const coffee = function (){
    let username = "dhiren" 
    console.log(this.username); 
}
coffee()//undefined
*/
const coffee= () => { 
    let username = "dhiren" 
    console.log(this); 
}
coffee()//output: {}
//arrow functions --> () => {}

/*const addtwo =(num1,num2)={
    return num1+num2 
}    
*/ 
//if {} is used then we have to use return keyword
const addtwo=(num1,num2)=>(num1 + num2) //isme curly braces use nahi karte hai
console.log(addtwo(3,4));// o/p: 7

//object return karna ho to {} isme wrap karna padega hi
const add=(num1,num2)=>({username:"dhiren"})
console.log(add(3,4));

