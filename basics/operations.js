let someNumber =33
let stringNumber= String(someNumber)//basic type conversion
/*console.log(stringNumber);
console.log(typeof stringNumber);
*/ 
//-------------------------operations-----------------------------------------//

 let value=3
 let negvalue= -value
// console.log(negvalue); //output -3

 /* operators
 console.log(2+2);
 console.log(2-2);
 console.log(2*2);
 console.log(2**2);// 2 in power
 console.log(2/3);
 console.log(2%2);
 */

 let str1="hello"
 let str2=" dude"
 let str3= str1+str2
 console.log(str3)// output: hello dude 
 console.log("1"+2);
 console.log(1+"2");
 console.log("1"+2+2);  
 console.log(1+2+"2");

 /*
            outputs
hello dude
12
12
122 if string first then all are treated as string
32     if string at last then operation will be done and then string wil be added
*/

/*
✅ Prefix Operator (++x or --x)
The value is incremented or decremented first, then the result is used in the expression.

✅ Postfix Operator (x++ or x--)
The original value is used first, then the variable is incremented or decremented.

| Operation         | Example | What Happens                         |
| ----------------- | ------- | ------------------------------------ |
| Prefix Increment  | `++a`   | `a` is increased by 1 **before** use |
| Postfix Increment | `a++`   | `a` is increased by 1 **after** use  |
| Prefix Decrement  | `--a`   | `a` is decreased by 1 **before** use |
| Postfix Decrement | `a--`   | `a` is decreased by 1 **after** use  |

*/ 