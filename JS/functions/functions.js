// //What is Function?
// //A function is a block of code that can be executed multiple times from different parts of the program

// //Why?
// //Reusabilty
// //Modularity
// //Easier to debug and maintain
// //Redability


// //Syntax:
// // function functionName(){
// //     //block code
// // }
// // functionNmae()

// // console.log("Step-1: Add Oil");
// // console.log("Step-2: Add Ingredients");
// // console.log("Step-3: Add Paneer");
// // console.log("Step-4: cook 20min");


// // console.log(`Step-1: Add Oil\nStep-2: Add Ingredients\nStep-3: Add Paneer\nStep-4: cook 20min`);
// // console.log(`Step-1: Add Oil\nStep-2: Add Ingredients\nStep-3: Add Aloo\nStep-4: cook 20min`);


// function recipe(mainIngredient){
// console.log(`Step-1: Add Oil\nStep-2: Add Ingredients\nStep-3: Add ${mainIngredient}\nStep-4: cook 20min`);
// }
// recipe("paneer")
// recipe("Aloo")


// //1. function without parameter and return statement

// function greet(){
//     console.log("hellooooo");
//    return "Hello Students"
  
// }
// console.log(greet());
// greet()
// console.log(greet());
// console.log(greet());
// greet()
// console.log(greet());
// greet()
// greet()

// //Hello
// //Hello Students
// //Hellooo
// //Hellooo
// //Hello Students

// //Hellooo
// //Hello Students
// //Hellooo
// //Hellooo
// //Hello Students
// //Hellooo
// //Hellooo

// //3. withparameter and without return
// //4. withparameter and with return

// //5.default parameter

// function birtDayWishes(name="Dear"){
//     // console.log("HAppy BithDay: " + name);
//     return `Happy Birtday: ${name}`
// }
// console.log(birtDayWishes("Teja"));

// function gst(amount=40){
//     let CGST = (amount*12)/100;
//     amount += CGST;
//     console.log(`Spent amount: ${amount-CGST} \n CGST : ${CGST} \n Total amount: ${amount}`);
// }
// gst(1000)

// //6. Function Expression//Variable function

// let sayHello = function(){
//     document.write("Hello Welcome to the JS");
// }
// sayHello()
// // setTimeout(function(){
// //    console.log("i am from anonymous Function");
// // },3000)

// // setTimeout(function,time)
// // 

// document.getElementById("output").textContent = "Hello, This is from JS file";


// //call back function?

// // function greet1(name){
// //     console.log(`Hello ${name}`);
// // }


// // function sayHello1(callback){
// //     let name = "Ravi";
// //     callback(name);
// // }
// // sayHello1(greet1())

// function notifyUser(message){
//     console.log("Notification Message:" + message);
// }

// function completeTask(taskName,callback){
//     console.log(`Task: ${taskName} is completed`);
//     callback("gvcvcdcf f");
// }
// completeTask("HomeWork",notifyUser);


// // function completeTask(taskName,callback){
// //     console.log(`Task: ${taskName} is completed`);
// //     // console.log(`you have completed the ${taskName}`);
// //     console.log("Notification Message:" + callback);
// // }
// // completeTask("HomeWork",`you have completed the ${taskName}`);


// function function1(a){
//     console.log(a);
// }
// function1();

// //Self Invoking function/IIFE

// (function(){
//     console.log("I am Self Invoking Function");
// })()

// //Arrow Function

// // function add(a,b){
// //     return a+b;
// // }
// // console.log(add(2,3));

// //Syntax of Arrow Function?
// // (argument) => {expression}
// let add1 = (a,b) => a+b;
// console.log(add1(2,3));

// // let a = 2;
// // let b = 3;
// // // console.log(a+b);
// // a+b;


// //Diif Function Declaration and Function Expression

// // function sayHello3() {
// //     console.log("Hello!");
// //   }
// //   console.log(sayHello3());

// //   console.log(sum(2, 3));
// // const sum = function (a, b) {
// //   return a + b;
// // };


// let x = 10;
// x++;
// console.log(x++);

// setTimeout(function () {
//     console.log("Done");
//   }, 1000);

// //   const greet4 = () => {
// //     return
// //       "Hello";
// //   };
// //   console.log(greet4());

//   function data(){
//     let a = b = 5;
//     c= 20;
// }
// data()
// console.log(c);

// let a = 5;//GS
// {
//   let a = 10;//LS
//   console.log(a);
// }
// console.log(a);

// const xx = NaN;
// const yy = NaN;
// console.log(xx === yy);

// console.log(typeof NaN);

 

function test(num){

    if(num>0){
        console.log(num);
    test(num-1)
    }
}
test(10)
// test(20)
// test(30)


// for(i = 0;i<=10;i++){
//     console.log(i);
// }
// for(i = 0;i<=20;i++){
//     console.log(i);
// }

var name = "Koushik"
function greet(name){
    // var name = "amar"
    console.log(`Hello ${name}`);
}

function greet1(age){
    var name = "Rohit"
   age(name)
//    console.log("Your Age");
}
greet1(greet)


// var a = 10;
// let a = 20;
// console.log(a);


function greetingMessage(message){
    console.log(message);
    return function name1(name){
        console.log(`${message} ${name}`);
    }
    
}
let greet4  = greetingMessage("Hello")
// console.log(greet4);
greet4("SIRI")

let greet5  = greetingMessage("Welcom")
// console.log(greet4);
greet5("SIRI")
// console.log(greetingMessage("Welcom"));
// console.log(name1("SIRI"));


// function outer(){
//     let count = 0;
//     function inner(){
//         count++;
//         console.log(count);
//     }
//    return inner;
// }
// // outer()
// // console.log(outer());
// let inner = outer()
// inner()
// inner()
// inner()
// inner()

function createCounter(){
    let count  = 0;
    return function(){
        count++;
    //    document.write(count);
       document.getElementById("output").innerText = "Count: " + count;
    }
}
let updatedCount = createCounter();














  


