//Excpetional Handling
//WHats Is Exception?
//Exception is an event that occurs during the execution of a program, which disrupts the normal flow
//why?
//An exception is thrown when a program encounters an error or an unexpected condition that it cannot handle.
//How?
//try--->
//catch
//finally
// let result = divide(10,0);
// console.log(result);


try{
    let result = divide(10,0);
console.log(result);
}
catch(raghav){
    console.log(raghav.stack);
}
finally{
    console.log("This one is alway run");
}
// let result = divide(10,0);
// console.log(result);

let name = "Hello";
console.log(name);

function divide(a,b){
    if(b==0){
        throw new Error("Cannot divide by zero...o.......");

    }
    let result1 = a/b;
    console.log(result1);
} 
divide(0,2)



function submitForm(name){
    try{
        if(!name){
            throw new Error("Name is required");
        }
        console.log("Form is Submitted by:"+name);
    }
    catch(e){
        console.log(e.message);
    }
}
submitForm();


console.log("I am executed after the forSubmitted function");


function card(amount){
   try{
    if(amount<0){
        throw new Error("Inavali payment")
        
    }
    console.log("Card is valid");
   }
   catch(e){
    console.log(e.message);
   }
   finally{
    console.log("Thank you for Using Card");
   }
}
card(-100)

console.log("I am executed after the card function");
