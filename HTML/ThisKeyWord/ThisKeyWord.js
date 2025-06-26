let a = 10;
console.log(this);
console.log(a);
console.log(window.a);
console.log(this.a);

function add(){
    console.log("hello i am from function");
}
add()
window.add()
this.add()


const ausers = {
    name: "Raghav",
    age:27,
    location : "Hyd",
    details : ()=>{
        console.log("Hi, I am " + this.name);
    }
}
ausers.details();
console.log(ausers.name);

document.querySelector("button").addEventListener("click",function (){
    console.log(this);
})


const user1 = {
    name: "Rohith",
    age: 25,
    location: "HYD",
    // greet : function (){
    //     console.log(`Hello my name is ${this.name} and i am ${this.age} years old`);
    // },
    // place : function(){
    //     console.log(`i am from ${this.location}`);
    // }

}

const user2 = {
    name: "Aagnesh",
    age: 27,
    location: "AP",
    // greet : function (){
    //     console.log(`Hello my name is ${this.name} and i am ${this.age} years old`);
    // },
    // place : function(){
    //     console.log(`i am from ${this.location}`);
    // }

}

// user1.greet();
// user1.place();
// user2.greet();
// user2.place();

function greet(time,day){
    console.log(`Hello my name is ${this.name} and i am ${this.age} years old`);
    console.log(time);
}
function place(){
    console.log(`i am from ${this.location}`);
}
greet.call(user1,"Morning","Monday")

greet.apply(user1,["Afternoon","Sat"])

//bind

let result = greet.bind(user1)
result("Evening","Fri");