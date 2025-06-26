//map-->map creates a new array by applying a function to each element of an exisiting array

//syntax: array.map(function(item,index,array){})

let numbers = [1,2,3,4,5];
let result = numbers.map((number)=>{
    return number*number;
})
console.log(result);

let result1 = numbers.map(number => number*number)
console.log(result1);


const products = [
    {
        name : "Mobiles",
        priceInDollors: 2
    },
    {
        name : "Watch",
        priceInDollors: 4
    }
]

const converted = products.map(product => ({
    name: product.name,
    priceInINR: product.priceInDollors*86
}))
console.log(converted);

//Filter

//filter() creates an aarry with elements that matches the condition

//syntax: array.filter(function(item,index,array){
        //return condition;
//})

let ages  = [12,18,30,40,35];
let adults = ages.filter(age => {
    return age>=18;
})
console.log(adults);

//reduce
//reduce will reduces the array to a single value

//syntax: array.reduce(accumulator,item,index,array)


const employeesSalary = [10000,20000,30000,34000]
// let sum =0;
let total = employeesSalary.reduce((sum,employeeSalary)=>{
    return sum+employeeSalary;
})
console.log(total);

//for in

//syntax: for(let key in object){
//console.log(array[key]);
//}

const student = {
    name: "Aagnesh",
    location: "Hyd",
    age: 25
}

for(let key in student){
    console.log(`${key}: ${student[key]}`);
}

//for of

// for(let value of array ){}


let fruits = ["Apple","banana","Mango"]

for(let fruit of fruits){
    console.log(fruit);
}
