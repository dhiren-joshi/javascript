/*
 Comparison Operators

 1. Loose Equality (==)
Compares values after type conversion (type coercion).
'5' == 5        // true
null == undefined // true
0 == false      // true

2. Strict Equality (===)
Compares value and type — no type coercion.
'5' === 5       // false
null === undefined // false
0 === false     // false
5 === 5         // true

| Expression            | `==` Result | `===` Result                   |
| --------------------- | ----------- | ------------------------------ |
| `'5'` == `5`          | `true`      | `false`                        |
| `null` == `undefined` | `true`      | `false`                        |
| `0` == `false`        | `true`      | `false`                        |
| `1` == `true`         | `true`      | `false`                        |
| `[]` == `false`       | `true`      | `false`                        |
| `[]` == `![]`         | `true`      | ❗ (tricky logic)               |
| `{}` == `{}`          | `false`     | `false` (different references) |
| `NaN` == `NaN`        | `false`     | `false` (use `Number.isNaN()`) |

✅ Best Practice
Always use === and !== unless you're intentionally allowing type coercion. It's safer and more predictable.
*/

console.log(null<0);
console.log(null==0);
console.log(null>=0);

console.log(undefined<0);
console.log(undefined==0);
console.log(undefined>0);

/*
     output
false
false
true
  
false
false
false
*/

/*
the reason is that an equality check == and comparison < > >= <= work differently
comparison convert null to a number, treating it as 0
*/

/*
        stack and heap memory

difference:-

| Feature            | Stack                        | Heap                            |
| ------------------ | ---------------------------- | ------------------------------- |
| Type of memory     | Static memory                | Dynamic memory                  |
| Speed              | Faster                       | Slower                          |
| Allocation         | Managed automatically (LIFO) | Allocated & freed as needed     |
| Stores             | Primitives, call frames      | Objects, arrays, functions      |
| Access             | Direct and simple            | Requires reference              |
| Garbage collection | Not needed                   | Required and done automatically |
     
📌 Key Points for Interviews / Exams
Stack: for primitive values and function call context.

Heap: for non-primitives like objects, arrays, functions.

Objects in heap are accessed via references stored in stack.

JavaScript uses garbage collection to free up heap memory.

*/
//move to string in javascript
