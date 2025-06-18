//The Date object in JavaScript is used to work with dates and times. It provides methods to create, retrieve, and manipulate dates and times.
/*
| Category   | Method           | Description               |
| ---------- | ---------------- | ------------------------- |
| Get Parts  | `getFullYear()`  | Returns the 4-digit year  |
|            | `getMonth()`     | 0–11 (Jan = 0)            |
|            | `getDate()`      | Day of month (1–31)       |
|            | `getDay()`       | Day of week (0 = Sunday)  |
|            | `getHours()`     | 0–23                      |
|            | `getMinutes()`   | 0–59                      |
|            | `getSeconds()`   | 0–59                      |
| Set Parts  | `setFullYear(y)` | Change the year           |
|            | `setMonth(m)`    | Change month              |
|            | `setDate(d)`     | Change day                |
| Timestamps | `getTime()`      | Milliseconds since Jan 1, |

*/
let mydate = new Date() // Current date and time
console.log(mydate); 
console.log(mydate.toString()); // Converts to string format
console.log(mydate.toDateString()); // Returns date in a human-readable format
/*
output 
2025-06-18T14:22:29.405Z
Wed Jun 18 2025 14:22:29 GMT+0000 (Coordinated Universal Time)
Wed Jun 18 2025
*/

console.log(typeof mydate); // Output: object 

let mycreatedDate = new Date(2025, 5, 18)// Year, Month (0-indexed), Day 
console.log(mycreatedDate); // June 18, 2025
console.log(mycreatedDate.toDateString());// Output: "Wed Jun 18 2025"

let mysecondDate = new Date("2025-06-18")//date string format

/*

Note: The format "DD-MM-YYYY" may not be recognized in all environments,
 so it's safer to use "YYYY-MM-DD" or "MM/DD/YYYY" formats.
If the format is not recognized, it may return an invalid date.

*/
console.log(mysecondDate); // Output: "Wed Jun 18 2025 00:00:00 GMT+0000 (Coordinated Universal Time)"
console.log(mysecondDate.toDateString());// Output: "Wed Jun 18 2025

//timestamp
let mycreatedsecondDate = new Date("2025-06-18")

let mytimestamp = Date.now()// Returns milliseconds value
console.log(mytimestamp); // Output: 1718710949405 (example value)
console.log(mycreatedsecondDate.getTime()); // Output: 1718668800000 (example value)

//what gettime does is it returns the number of milliseconds since January 1, 1970, 00:00:00 UTC
console.log(Math.floor(Date.now()/1000));// to covert it in seconds

let newdate = new Date()
console.log(newdate); // Current date and time
console.log(newdate.getMonth());// Output: 5 (June, since months are 0-indexed)
console.log(newdate.getDate());// Output: 18 (day of the month)
console.log(newdate.getFullYear());// Output: 2025 (current year)

// Example: Using a template string to format the date and time
// `${newdate.getDate()}` and time `${newdate.getHours()}:${newdate.getMinutes()}:${newdate.getSeconds()}`
// Output: "18 and time is '14:22:29'"  

newdate.toLocaleString('default',{
    weekday: "long", // Full weekday name
    year: "numeric", // Full year
    month: "long", // Full month name
    day: "numeric", // Day of the month
    hour: "2-digit", // 2-digit hour
    minute: "2-digit", // 2-digit minute
    second: "2-digit", // 2-digit second
});
