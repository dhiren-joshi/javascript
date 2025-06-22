//immdiately invoked function expression 
(function coffee(){
    console.log(`db connected`);
})();
//db connected
//it was named iife

//; to end the context otherwise it will just run this
//()-function defination then ()-exectution call
((name) =>{
    console.log(`db connected 2`) ;
})('dhiren');

