 //if loop 

 if(2=="2"){
    console.log("executed");
 }
 //output: executed
 const temperature=41
 if (temperature<50){
   console.log("less than 50");
   
 }//less than 50

 //multiple condition|

 const userlogged =true
 const debitcard =true
 const loggedinfromgoogle =true
 const loggedinfromemail =true


 if(userlogged&&debitcard){
   console.log("allow");
 }
 if(loggedinfromgoogle|| loggedinfromemail){
   console.log("user logged in");
 }
 
 //switch
 const month =3
 switch(month){
   case 1:
      console.log("jan");
      break;
   case 2:
      console.log("feb");
      break;
   case 3:
      console.log("Mar");
      break;
   case 4:
      console.log("apr");
      break;
   
   default:
      console.log("default case match")
      break;
      
 }
 //march
 const useremail =[]
 if (useremail){
   console.log("got user email")
 }
 else{
   console.log("dont have email")
 }
//falsy values : false, 0,-0, bigint on,null,undefined,NaN
//truthy value:"0", 'false', "",[],{},function(){}
//if to check aaray 
if(useremail.length===0){
   console.log("array is empty");
}
/*
check object is empty={}
if(Object.keys(emptyObj).length===0){
   console.log("object is empty");
}
nulish coalescing operator(??):null undefined
let val1;
val1= 5 ?? 10
val1 =null ?? 10
val1 = undefined ?? 15
*/

//for loops
for(let i =0; i<10; i++){
   const element = i;
   console.log(element);
}
/*
0
1
2
3
4
5
6
7
8
9
*/

for(let i=0;i<=10;i++){
   const element=i;
   if (element==5){
      console.log("5 is there")

   }
   console.log(element);
   
}

for(let i=1;i<=10;i++){
   console.log(`outer loop is: ${i}`);
   for(let j=1;j<=10;j++){
      //console.log(i+'*'+j+'='+i*j);
   /* output
   outer loop is: 1
1*1=1
1*2=2
1*3=3
1*4=4
1*5=5
1*6=6
1*7=7
1*8=8
1*9=9
1*10=10
outer loop is: 2
2*1=2
2*2=4
2*3=6
2*4=8
2*5=10
2*6=12
2*7=14
2*8=16
2*9=18
2*10=20
outer loop is: 3
3*1=3
3*2=6
3*3=9
3*4=12
3*5=15
3*6=18
3*7=21
3*8=24
3*9=27
3*10=30
outer loop is: 4
4*1=4
4*2=8
4*3=12
4*4=16
4*5=20
4*6=24
4*7=28
4*8=32
4*9=36
4*10=40
outer loop is: 5
5*1=5
5*2=10
5*3=15
5*4=20
5*5=25
5*6=30
5*7=35
5*8=40
5*9=45
5*10=50
outer loop is: 6
6*1=6
6*2=12
6*3=18
6*4=24
6*5=30
6*6=36
6*7=42
6*8=48
6*9=54
6*10=60
outer loop is: 7
7*1=7
7*2=14
7*3=21
7*4=28
7*5=35
7*6=42
7*7=49
7*8=56
7*9=63
7*10=70
outer loop is: 8
8*1=8
8*2=16
8*3=24
8*4=32
8*5=40
8*6=48
8*7=56
8*8=64
8*9=72
8*10=80
outer loop is: 9
9*1=9
9*2=18
9*3=27
9*4=36
9*5=45
9*6=54
9*7=63
9*8=72
9*9=81
9*10=90
outer loop is: 10
10*1=10
10*2=20
10*3=30
10*4=40
10*5=50
10*6=60
10*7=70
10*8=80
10*9=90
10*10=100
*/
    
     
      // console.log(`inner loop value is ${i} and outer loop value is ${j}`);
       /* output
       outer loop is: 1
inner loop value is 1 and outer loop value is 1
inner loop value is 1 and outer loop value is 2
inner loop value is 1 and outer loop value is 3
inner loop value is 1 and outer loop value is 4
inner loop value is 1 and outer loop value is 5
inner loop value is 1 and outer loop value is 6
inner loop value is 1 and outer loop value is 7
inner loop value is 1 and outer loop value is 8
inner loop value is 1 and outer loop value is 9
inner loop value is 1 and outer loop value is 10
outer loop is: 2
inner loop value is 2 and outer loop value is 1
inner loop value is 2 and outer loop value is 2
inner loop value is 2 and outer loop value is 3
inner loop value is 2 and outer loop value is 4
inner loop value is 2 and outer loop value is 5
inner loop value is 2 and outer loop value is 6
inner loop value is 2 and outer loop value is 7
inner loop value is 2 and outer loop value is 8
inner loop value is 2 and outer loop value is 9
inner loop value is 2 and outer loop value is 10
outer loop is: 3
inner loop value is 3 and outer loop value is 1
inner loop value is 3 and outer loop value is 2
inner loop value is 3 and outer loop value is 3
inner loop value is 3 and outer loop value is 4
inner loop value is 3 and outer loop value is 5
inner loop value is 3 and outer loop value is 6
inner loop value is 3 and outer loop value is 7
inner loop value is 3 and outer loop value is 8
inner loop value is 3 and outer loop value is 9
inner loop value is 3 and outer loop value is 10
outer loop is: 4
inner loop value is 4 and outer loop value is 1
inner loop value is 4 and outer loop value is 2
inner loop value is 4 and outer loop value is 3
inner loop value is 4 and outer loop value is 4
inner loop value is 4 and outer loop value is 5
inner loop value is 4 and outer loop value is 6
inner loop value is 4 and outer loop value is 7
inner loop value is 4 and outer loop value is 8
inner loop value is 4 and outer loop value is 9
inner loop value is 4 and outer loop value is 10
outer loop is: 5
inner loop value is 5 and outer loop value is 1
inner loop value is 5 and outer loop value is 2
inner loop value is 5 and outer loop value is 3
inner loop value is 5 and outer loop value is 4
inner loop value is 5 and outer loop value is 5
inner loop value is 5 and outer loop value is 6
inner loop value is 5 and outer loop value is 7
inner loop value is 5 and outer loop value is 8
inner loop value is 5 and outer loop value is 9
inner loop value is 5 and outer loop value is 10
outer loop is: 6
inner loop value is 6 and outer loop value is 1
inner loop value is 6 and outer loop value is 2
inner loop value is 6 and outer loop value is 3
inner loop value is 6 and outer loop value is 4
inner loop value is 6 and outer loop value is 5
inner loop value is 6 and outer loop value is 6
inner loop value is 6 and outer loop value is 7
inner loop value is 6 and outer loop value is 8
inner loop value is 6 and outer loop value is 9
inner loop value is 6 and outer loop value is 10
outer loop is: 7
inner loop value is 7 and outer loop value is 1
inner loop value is 7 and outer loop value is 2
inner loop value is 7 and outer loop value is 3
inner loop value is 7 and outer loop value is 4
inner loop value is 7 and outer loop value is 5
inner loop value is 7 and outer loop value is 6
inner loop value is 7 and outer loop value is 7
inner loop value is 7 and outer loop value is 8
inner loop value is 7 and outer loop value is 9
inner loop value is 7 and outer loop value is 10
outer loop is: 8
inner loop value is 8 and outer loop value is 1
inner loop value is 8 and outer loop value is 2
inner loop value is 8 and outer loop value is 3
inner loop value is 8 and outer loop value is 4
inner loop value is 8 and outer loop value is 5
inner loop value is 8 and outer loop value is 6
inner loop value is 8 and outer loop value is 7
inner loop value is 8 and outer loop value is 8
inner loop value is 8 and outer loop value is 9
inner loop value is 8 and outer loop value is 10
outer loop is: 9
inner loop value is 9 and outer loop value is 1
inner loop value is 9 and outer loop value is 2
inner loop value is 9 and outer loop value is 3
inner loop value is 9 and outer loop value is 4
inner loop value is 9 and outer loop value is 5
inner loop value is 9 and outer loop value is 6
inner loop value is 9 and outer loop value is 7
inner loop value is 9 and outer loop value is 8
inner loop value is 9 and outer loop value is 9
inner loop value is 9 and outer loop value is 10
outer loop is: 10
inner loop value is 10 and outer loop value is 1
inner loop value is 10 and outer loop value is 2
inner loop value is 10 and outer loop value is 3
inner loop value is 10 and outer loop value is 4
inner loop value is 10 and outer loop value is 5
inner loop value is 10 and outer loop value is 6
inner loop value is 10 and outer loop value is 7
inner loop value is 10 and outer loop value is 8
inner loop value is 10 and outer loop value is 9
inner loop value is 10 and outer loop value is 10
*/
   }
}   
//array 
let myarray =["a","b","c"]
console.log(myarray.length);

for(let i=0;i<myarray.length;i++){
   const element= myarray[i];
   console.log(element);
}
/*
3
a
b
c
*/
 
//while loop
let i =0
while(i<=10){
   console.log(`value of index is ${i}`);
   i =i+2
}
/*
value of index is 0
value of index is 2
value of index is 4
value of index is 6
value of index is 8
value of index is 10
*/

 let array =["a","b","c"]
 let q =0
 while(q<array.length){
   console.log(`value is ${array[q]}`);
   q=q+1
 }
 /*value is a
value is b
value is c
 */
let score =1
 do{
   console.log(`score is ${score}`);
   score++
 }
 while(score<=10);


//for 0f
//["","",""]
//[{},{},{}]

const arr =[1,2,3,4,5]
for(const num of arr){
   console.log(num);
}
const greeting ="hello"
for(const greet of greeting){
   console.log(`each char is ${greet}`);
   
}
/*
each char is h
each char is e
each char is l
each char is l
each char is o
*/


 //map: it holds key value pair

const map = new Map()
map.set('IND', "india")
map.set('USA',"united states of america")
map.set('FR', "france" )
/*
console.log(map);
Map(3) {
  'IND' => 'india',
  'USA' => 'united states of america',
  'FR' => 'france'
}
  */
for(const [key,value] of map){
   console.log(key,':-',value);
   }
/*IND :- india
USA :- united states of america
FR :- france
*/


/* console.log(key); and only key is there in the loop
[ 'IND', 'india' ]
[ 'USA', 'united states of america' ]
[ 'FR', 'france' ]
 */

const myobject={
   'game1':'NBA',
   'game2':'rdr'
}
/*
for(const[Key, value] of myobject){
    console.log(key,':-',value);
}
    this will not work
*/

 const object={
   js:'javascript',
   cpp:'c++',
   rb:"ruby"
 }
 for(const key in object){
   /*console.log(key);
      js
      cpp
      rb
      */
   console.log(`${key} shortcut is for ${object[key]}`)
//js shortcut is for javascript
//cpp shortcut is for c++
//rb shortcut is for ruby 
}
const lang =["js","ruby","python","cpp"]
/*
lang.forEach(function (val){
   console.log(val);
}) 
js
ruby
python
cpp
val is parameter
 
*/
//lang.forEach((item) => {
   /*console.log(item);
   js
ruby
python
cpp
*/
lang.forEach((item,index,arr)=>{
console.log(item,index,arr);
/*
js 0 [ 'js', 'ruby', 'python', 'cpp' ]
ruby 1 [ 'js', 'ruby', 'python', 'cpp' ]
python 2 [ 'js', 'ruby', 'python', 'cpp' ]
cpp 3 [ 'js', 'ruby', 'python', 'cpp' ]
*/
})

const mycode =[
{
   languageName:"javascript",
   languagefilename:"js"
},

{
   languageName:"Cpp",
   languagefilename:"C++"
},

{
   languageName:"java",
   languagefilename:"jv"
},

{
   languageName:"ruby",
   languagefilename:"rb"
}
]
mycode.forEach((item)=>{
   console.log(item.languageName);
   /*
javascript
Cpp
java
ruby
*/
}
)

const num =[1,2,3,4,5,6,7,,8,9,10]
const newnum = num.filter((num)=> {num > 4})
console.log(newnum);



//[] if it {} is used : {num>4} then to fix this use return {return num>4}

const Newnum =[]
num.forEach((num)=>{
   if(num>4){
      Newnum.push(num)
   }
}

) 
console.log(Newnum);
//[ 5, 6, 7, 8, 9, 10 ]

const books = [
   { title: "Book One", genre: "Fiction", publish: 2001, edition: 1 },
   { title: "Book Two", genre: "Science", publish: 2015, edition: 2 },
   { title: "Book Three", genre: "Fiction", publish: 2010, edition: 3 },
   { title: "Book Four", genre: "History", publish: 2005, edition: 1 },
   { title: "Book Five", genre: "Science", publish: 2020, edition: 1 }
];

// Filter books published after 2010
const recentBooks = books.filter(book => book.publish > 2010);
console.log(recentBooks);

// Filter books of genre 'Fiction'
const fictionBooks = books.filter(book => book.genre === "Fiction");
console.log(fictionBooks);

const number = [1,2,3,4,5,6,7,8,9,10]
const newnumber= number.map((num) => num + 10 )
console.log(newnumber);
/*
[11, 12, 13, 14, 15,16, 17, 18, 19, 20]
*/
 const myNumbers=[1,2,3,4,5,6,7,8,9,10]
 const newNum = myNumbers
                     .map((num)=>num * 10)
                     .map((num)=>num+1)
                     .filter((num)=>num >=40)
  console.log(newNum);
       // output: [ 41, 51,  61, 71,81, 91, 101]              