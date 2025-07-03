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
check object is empty={}
if(Object.keys(emptyObj).length===0){
   console.log("object is empty");
}
/*nulish coalescing operator(??):null undefined
let val1;
val1= 5 ?? 10
val1 =null ?? 10
val1 = undefined ?? 15
*/