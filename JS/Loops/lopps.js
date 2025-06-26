//Loops?
//Loops allow you to repeat a block a block of code multiple times
//There are two types of loops: for and while loops

// let names = ["Uday","Koushik","Rohith","Siri","Raghava"];


// // console.log(names.length);
// // console.log(names[0]);
// // console.log(names[1]);
// // console.log(names[2]);
// // console.log(names[3]);

// //1. for loop
// //Syntax:
// //for (initialization; condition; increment/decrement) {
// //code
// //}

// //i = 0; 0<4--true--->names[0]---->Uday
// //i =1; 1<4---true--->names[1]---->Koushik
// //i=2;---i<4---true--->names[2]---->Rohith
// //i =3; 3<4 ----true----names[3]---->Siri
// for(let i =0;i<names.length;i++){
//     console.log(names[i]);
// }


// //1. Good when we know the no.of iterations
// //


// //2.While
// //Syntax:   
// //while (condition) {
// //code
// //}
// //use when we don't the no of iterations

// let i = 0;
// while(i<names.length){
//     console.log(names[i]);
//     i++;
//     }

//     let Froots = [
//         {name:"Apple",price:100},
//         {name:"Banana",price:50},
//         {name:"Cherry",price:200},
//         {name:"Date",price:300},
//         {name:"Orange",
//          price:400
//         }

//     ];

//     // let obj =  {name:"Apple",price:100};
//     // console.log(obj.name);

//     //Produnct name: Apple, Apple Price: 100

//     // for(let i =0;i<Froots.length;i++){
//     //     // console.log(Froots[i].name);
//     //     // console.log(Froots[i].price);
//     //     // console.log("Froot Name: "+Froots[i].name+","+Froots[i].name + " Price: "+Froots[i].price);
//     //     console.log(`Froots name: ${Froots[i].name}, ${Froots[i].name} Price ${Froots[i].price}`);
//     // }

//     let j = 0;
//  while(j<Froots.length){
//     console.log(`Froots name: ${Froots[j].name}, ${Froots[j].name} Price ${Froots[j].price}`);
//     j++;
//  }

//do-while
//loop will executes at least once
//Syntax:
//do{
//code:
//}while(condition)

let enteredPin;
let currenctPin = 1234;
let attempts = 0;

// do{
//     enteredPin = Number(prompt("Enter your Pin"));
//     attempts++;
// }while(enteredPin != currenctPin && attempts<3)

//     if(enteredPin == currenctPin){
//         document.write("Access Granted")
//     }
//     else{
//         document.write("Card blocked due to you tried more than 3 attempts")
//     }

//     let confrmDelete;
//     do{
//         confrmDelete = prompt("Are you sure you want dete?...type yes to delete")
//     }while(confrmDelete!="yes")

//         if(confrmDelete == "yes"){
//             document.write("<br> Item deleted")
//         }
//         else{
//             document.write("Item not deleted")
//         }

let randomNumber =Math.floor( Math.random()*6+1);
console.log(randomNumber);

let numberOfDice;
do{
   numberOfDice = Math.floor( Math.random()*6+1);
   document.write("You Rolled: " + numberOfDice +"<br>");
}while(numberOfDice != 6);

document.write("you got 6")